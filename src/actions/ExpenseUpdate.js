
import { EXPENSE_UPDATE } from './types';

export const expenseUpdate = ( { props, value }) => {
   return {
       type: EXPENSE_UPDATE,
       payload:  { prop, value }
   }
};