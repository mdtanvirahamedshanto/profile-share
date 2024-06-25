"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../app/globals.css"

export default function ToastProvider({ children }) {
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex p-1 min-h- bg-primary rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm  font-white font-med block p-3"}
        position="top-left"
        autoClose={3000}
      />
    </>
  );
}