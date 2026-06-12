"use client";

import { useContext } from "react";
import BusinessContext from "../context/BusinessProvider";

export function useBusiness() {
    return useContext(BusinessContext)
}
