import { Route, Switch } from 'react-router';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        <Route exact path="/dashboard">
            <Dashboard />
        </Route>
    </Switch>
);
