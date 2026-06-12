"use client"

import { useContext } from "react"
import ClientContext from "../context/ClientProvider";

export function useClient() {
    return useContext(ClientContext)
}