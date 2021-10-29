import { useHistory } from 'react-router';
import { useAuth } from '../../providers/auth';
import {
    Container,
    DashboardContainer,
    HeaderContainer,
    Logout,
} from './styles';

const Dashboard = () => {
    const { signOut } = useAuth();
    const history = useHistory();

    const logout = () => {
        signOut();
        history.push('/');
    };

    return (
        <DashboardContainer>
            <Container>
                <HeaderContainer>
                    <h1>Seja Bem-Vindo!</h1>
                </HeaderContainer>
                <Logout onClick={logout}>Sair</Logout>
            </Container>
        </DashboardContainer>
    );
};

export default Dashboard;
