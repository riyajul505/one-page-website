import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const drilling = {user, loading};
    return (
        <AuthContext.Provider value={drilling}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;