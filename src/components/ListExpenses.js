import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListExpenses extends Component {


    onRowPress () {
            Actions.adding_expenses( {expenses : this.props.expenses});
    }

    render() {
        const { expense_name } = this.props.expenses;

        return (
            <TouchableWithoutFeedback onPress = { this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {expense_name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListExpenses;