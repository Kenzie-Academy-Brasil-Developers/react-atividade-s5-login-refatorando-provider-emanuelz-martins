import { ProviderProps } from '../interfaces/provider';
import { AuthProvider } from './auth';

const Providers = ({ children }: ProviderProps) => (
    <AuthProvider>{children}</AuthProvider>
);

export default Providers;
