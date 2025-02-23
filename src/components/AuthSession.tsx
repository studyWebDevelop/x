"use client";

import { SessionProvider } from "next-auth/react";

interface SessionProps {
  children: React.ReactNode;
}

const AuthSession = ({ children }: SessionProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthSession;
