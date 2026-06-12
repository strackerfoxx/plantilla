"use client";

import { useContext } from "react";
import AppointmentsContext from "../context/AppointmentsProvider";

export function useAppointments() {
    return useContext(AppointmentsContext)
}
