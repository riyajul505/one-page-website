import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const drilling = { user, loading };
  return (
    <AuthContext.Provider value={drilling}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
