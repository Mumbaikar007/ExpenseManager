
// Expense Actions

import { EXPENSE_UPDATE, EXPENSE_CREATE, EXPENSE_FETCH_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const expenseUpdate = ( { prop, value }) => {
   return {
       type: EXPENSE_UPDATE,
       payload:  { prop, value }
   }
};

export const expenseCreate = ( { expense_name, amount, day, date }) => {

    const { currentUser } = firebase.auth();


    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/expense`)
            .push ( { expense_name, amount, day, date })
            .then ( () => {
                dispatch( { type: EXPENSE_CREATE} );
                Actions.user_expenses();
            });

    };

};


export const expenseFetch = () => {

    const { currentUser } =  firebase.auth();

    return ( dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/expense`)
            .on('value', snapshot => {
                dispatch ( { type: EXPENSE_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };
};
