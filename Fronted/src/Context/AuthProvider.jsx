import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const googleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  const emailSignUp = (email, pass) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user)=>{
      setUser(user);
      setLoading(false);
      console.log(user, 'current user');
    });
    return ()=>{
      return unSubscribe();
    }
  },[])
  const drilling = { user, loading, googleLogin, googleSignOut, emailSignUp};
  return (
    <AuthContext.Provider value={drilling}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
