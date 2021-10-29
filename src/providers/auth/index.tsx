import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { AuthData, AuthProps, UserData } from '../../interfaces/auth';

const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthProvider = ({ children }: AuthProps) => {
    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem('token') || '',
    );

    const signIn = (userData: UserData) => {
        axios
            .post('https://kenziehub.herokuapp.com/sessions', userData)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                setAuthToken(response.data.token);
            })
            .catch((error) => console.error(error));
    };

    const signOut = () => {
        localStorage.clear();
        setAuthToken('');
    };

    return (
        <AuthContext.Provider value={{ authToken, signOut, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
