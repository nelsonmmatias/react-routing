import { FC } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
