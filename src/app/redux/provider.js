"use client";
import { Provider } from "react-redux";
import store from "./store";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};
