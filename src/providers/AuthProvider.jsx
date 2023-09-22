import React from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = { displayName: "Akash" };
  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
