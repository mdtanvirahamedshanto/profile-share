"use client"
import { AuthContext } from "@/auth/context";
import { useContext } from "react";

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};