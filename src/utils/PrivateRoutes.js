import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("OYO_Auth"));
  console.log(user);
  if (user.isAdmin) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/error" />;
};

export default ProtectedRoutes;
