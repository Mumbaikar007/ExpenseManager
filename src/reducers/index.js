
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ExpenseReducer from './ExpenseReducer';
import ExpenseFetchReducer from './ExpenseFetchReducer';

export default combineReducers({
    auth: AuthReducer,
    expense: ExpenseReducer,
    expense_fetch: ExpenseFetchReducer
})
