"use client"
import { UserContext } from "@/auth/context";
import { useContext } from "react";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
};