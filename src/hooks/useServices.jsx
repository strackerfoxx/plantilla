"use client";

import { useContext } from "react";
import ServicesContext from "../context/ServicesProvider";

export function useServices() {
    return useContext(ServicesContext)
}
