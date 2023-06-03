import React, { useContext } from "react";
import { AuthContext } from "../Auth Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
