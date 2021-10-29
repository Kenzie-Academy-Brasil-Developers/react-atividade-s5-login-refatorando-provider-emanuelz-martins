import { ReactNode } from 'react';

export interface AuthProps {
    children: ReactNode;
}

export interface UserData {
    email: string;
    password: string;
}

export interface AuthData {
    authToken: string;
    signIn: (userData: UserData) => void;
    signOut: () => void;
}
