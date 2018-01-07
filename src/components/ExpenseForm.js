

import React, { Component } from 'react';
import { View, Text} from "react-native";
import ModalSelector from 'react-native-modal-selector';
import { connect } from 'react-redux';
import { expenseUpdate } from '../actions';
import { CardSection, Input} from "./common";

class ExpenseForm extends Component {




    render() {

        let index = 0;
        const data_weekday = [
            { key: index++, section: true, label: 'Weekday' },
            { key: index++, label: 'Monday' },
            { key: index++, label: 'Tuesday' },
            { key: index++, label: 'Wednesday' },
            { key: index++, label: 'Thursday' },
            { key: index++, label: 'Friday' },
            { key: index++, label: 'Saturday' },
            { key: index++, label: 'Sunday' },

        ];


        const data_day = [ { key: 0, section: true, label: 'Select Day'}];
        for ( var i = 1; i < 32; i ++){
            data_day.push({
                key: i,
                label: `${i}`
            });
        }


        return (
            <View>

                <CardSection>

                    <Input

                        label = "Expense"
                        placeholder = "Grocery store"

                        onChangeText={value => this.props.expenseUpdate({
                            prop: 'expense_name',
                            value })}
                        value = { this.props.expense_name}
                    />

                </CardSection>

                <CardSection>

                    <Input
                        label = "Amount"
                        placeholder = "Max: 10000"
                        onChangeText={value => this.props.expenseUpdate({
                            prop: 'amount',
                            value })}
                        value={this.props.amount}
                    />

                </CardSection>

                <CardSection>

                    <View style = { styles.viewStyle }>

                        <Text style = {styles.labelStyle}  >
                            When
                        </Text>

                        <View style = { styles.viewStyle }>

                            <ModalSelector

                                style={ { marginLeft: -55}}

                                data={data_day}
                                initValue="Date"

                                onChange={value => this.props.expenseUpdate({
                                    prop: 'date',
                                    value
                                })}
                            />

                            <ModalSelector

                                style={ {marginLeft: 15} }

                                data={data_weekday}
                                initValue="Weekday"

                                onChange={value => this.props.expenseUpdate({
                                    prop: 'day',
                                    value
                                })}
                            />

                        </View>

                    </View>

                </CardSection>


            </View>
        );

    }


}

const styles = {

    viewStyle: {
        flex: 1,
        flexDirection: 'row'
    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        marginTop: 7
    },

};


const mapStateToProps = ( state ) => {

    const  { expense_name, amount, date, day } = state.expense;
    return  {
        expense_name, amount, date, day
    };

};


export default connect ( mapStateToProps , { expenseUpdate }) (ExpenseForm);