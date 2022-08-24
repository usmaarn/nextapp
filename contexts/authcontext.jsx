import cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState } from "react"
import { unhash } from '../utils/helper';


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = cookies.get("sessionId");
        token ? setUser(unhash(token)) : null;
    }, [])

    function logout() {
        location.href = '/api/logout';
    }

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx || typeof ctx == 'undefined') {
        throw new Error('useAth must me called within an AuthProvider')
    }
    return ctx;
}