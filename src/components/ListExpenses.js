import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListExpenses extends Component {


    onRowPress () {
            Actions.adding_expenses( {expenses : this.props.expenses});
    }

    render() {
        const { expense_name, amount } = this.props.expenses;

        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>

                <View style={{flex: 1 }}>

                    <TouchableWithoutFeedback onPress = { this.onRowPress.bind(this)}>

                            <View>
                                <CardSection>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>

                                        <Text style={styles.titleStyle}>
                                            {expense_name}
                                        </Text>

                                        <Text style={styles.amountStyle}>
                                            {amount}
                                        </Text>

                                    </View>
                                </CardSection>
                            </View>

                    </TouchableWithoutFeedback>

                </View>

            </View>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    amountStyle: {
        fontSize: 18,
    },
};

export default ListExpenses;