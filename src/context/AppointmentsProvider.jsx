"use client";

import api from "@/lib/api";
import { createContext, useCallback, useEffect, useState } from "react";
import { useClient } from "@/hooks/useClient";

const AppointmentsContext = createContext();

const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { client, token, isTokenLoaded } = useClient();

  const refetchAppointments = useCallback(async () => {
    if (!isTokenLoaded) return;

    if (!client?.businessClient || !token) {
      setAppointments([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const { data } = await api(
        `/appointment/get-appointments-by-client-id?clientId=${client.businessClient}&page=1&limit=20`,
        { headers: { Authorization: token } }
      );
      setAppointments(data?.appointments || []);
    } catch (error) {
      console.error("No se pudieron cargar las reservas:", error);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  }, [client?.businessClient, token, isTokenLoaded]);

  useEffect(() => {
    refetchAppointments();
  }, [refetchAppointments]);

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments, refetchAppointments, loading }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export default AppointmentsContext;
export { AppointmentsProvider };
