
import React, { Component } from 'react';
import { ListView, View, Text} from 'react-native';
import { expenseFetch} from "../actions";
import { connect } from 'react-redux';
import _ from  'lodash';
import ListExpenses from './ListExpenses';
import { CardSection } from './common';


class UserExpenses extends Component {


    componentWillMount() {

        this.props.expenseFetch();

        this.createDataSource( this.props);

    }

    componentWillReceiveProps( nextProp ){
        this.createDataSource(nextProp);
    }


    createDataSource ( { expense_fetch } ){
        const ds = new ListView.DataSource ({
            rowHasChanged: ( r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(expense_fetch);

    }

    constructor(props) {
        super(props);
        this.state ={ f1: '',f2: '',result: '' };
    }

    static navigationOptions = {
        headerLeft:null
    }

    renderRow(expense_fetch) {
        return <ListExpenses expenses={expense_fetch} />;
    }

    renderTotalAmount ( expense_fetch ){
        var totalAmount = 0;

        if (typeof something === "undefined") {
            return null;
        }
        expense_fetch.forEach(
            function (object) {
                totalAmount += parseInt(object.amount);
            }
        );

        return totalAmount;
    }

    render() {


        const result = this.renderTotalAmount();


        return (

            <View style = {{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />

                <CardSection>
                    <View>
                        { result ? <Text style={styles.titleStyle}>{ result }</Text> : null }
                    </View>
                </CardSection>

            </View>
        );

    }

}

const mapStateToProps = state => {

    const expense_fetch = _.map ( state.expense_fetch, (val, uid) => {
        return { ...val, uid};
    });

    console.log("*********************************************");
    console.log(expense_fetch);
    console.log("*********************************************");

    return { expense_fetch };

};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};


export default connect ( mapStateToProps, { expenseFetch }) (UserExpenses);