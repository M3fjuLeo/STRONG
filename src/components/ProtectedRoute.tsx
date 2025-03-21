import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../authentication/useUser";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated, isLoading]);

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
