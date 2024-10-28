import { FC } from "react";

interface ProtectedRouteProps {
  children: any;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return "";
  }

  return children;
};
