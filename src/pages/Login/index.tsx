import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { UserData } from '../../interfaces/auth';
import { useAuth } from '../../providers/auth';
import { Button, Form, InputField, LoginScreen, Title } from './styles';

interface LoginData {
    email: string;
    password: string;
}

const Login = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('This field could not to be empty')
            .email(),
        password: yup.string().required('This field could not to be empty'),
    });

    const { signIn } = useAuth();
    const history = useHistory();
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: yupResolver(schema),
    });

    const toSubmit = (data: UserData) => {
        signIn(data);
        history.push('/dashboard');
    };

    return (
        <LoginScreen>
            <Form onSubmit={handleSubmit(toSubmit)}>
                <Title>Login</Title>
                <InputField
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                />
                <Button type="submit">Entrar</Button>
            </Form>
        </LoginScreen>
    );
};

export default Login;
