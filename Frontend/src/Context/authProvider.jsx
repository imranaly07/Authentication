import { useContext, createContext, useState } from "react";

export const AuthContext = createContext();

function authProvider({ children }) {
    let initialAuthUser = localStorage.getItem("User");

    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.stringify(initialAuthUser) : null
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default authProvider;
