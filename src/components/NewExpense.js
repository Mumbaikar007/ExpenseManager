

/*

onChanged(text){
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            // your call back function
            alert("please enter numbers only");
        }
    }
    this.setState({ myNumber: newText });
}

<TextInput
   style={styles.textInput}
   keyboardType='numeric'
   onChangeText={(text)=> this.onChanged(text)}
   value={this.state.myNumber}
   maxLength={10}  //setting limit of input
/>

*/


import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from "./common";
import { connect } from 'react-redux';
import { expenseUpdate, expenseCreate } from '../actions';
import ExpenseForm from './ExpenseForm';

class NewExpense extends Component {


    constructor() {
        super();

        this.state = {
            textInputValue: ''
        };

    }

    onButtonPress(){

        const { expense_name, amount, day, date} = this.props;

        console.log ( expense_name, amount, day, date );

        this.props.expenseCreate( { expense_name, amount, day, date });
    }

    render(){

        console.log( this.props.expenses);



        return (

            <Card>

                <ExpenseForm { ...this.props} />

                <CardSection>

                    <Button onPress = { this.onButtonPress.bind(this) }>
                        Save
                    </Button>

                </CardSection>

            </Card>

        );

    }

}

const mapStateToProps = ( { expense } ) => {

    const { expense_name, amount, date, day} = expense;

    return { expense_name, amount, date, day };

};



export default connect ( mapStateToProps, { expenseUpdate, expenseCreate } ) (NewExpense);

