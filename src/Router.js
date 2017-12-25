
import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import UserExpenses from './components/UserExpenses';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key = "root">


                <Scene
                    key="login"
                    component = {LoginForm}
                    title = "Please Login"
                />

                <Scene
                        key = "user_expenses"
                    component = { UserExpenses }
                    title = "Your Expenses"
                />

            </Stack>
        </Router>
    );
};

export default RouterComponent;