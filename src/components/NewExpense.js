

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
import {Card, CardSection, Input} from "./common";
import {TextInput} from "react-native";

class NewExpense extends Component {

    render(){

        return (

            <Card>

                <CardSection>
                    <Input
                        label = "Expense label"
                        placeholder = "Grocery store"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label = "Amount"
                        placeholder = "Max: 10000"
                    />
                </CardSection>

                <CardSection></CardSection>


                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>

            </Card>

        );

    }

}

export default NewExpense;

