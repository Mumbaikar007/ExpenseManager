
import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import UserExpenses from './components/UserExpenses';
import NewExpense from "./components/NewExpense";


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
                    onBack={()=>{}}
                    rightTitle = " Add"
                    onRight = {() =>  Actions.adding_expenses() }
                />

                <Scene
                    key = "adding_expenses"
                    component = {NewExpense}
                    title = "New Expense"
                />

            </Stack>

        </Router>
    );
};

export default RouterComponent;