
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { expenseFetch} from "../actions";
import { connect } from 'react-redux';
import _ from  'lodash';
import ListExpenses from './ListExpenses';

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
        super(props)
    }

    static navigationOptions = {
        headerLeft:null
    }

    renderRow(expense_fetch) {
        return <ListExpenses expenses={expense_fetch} />;
    }

    render() {

        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );

    }

}

const mapStateToProps = state => {

    const expense_fetch = _.map ( state.expense_fetch, (val, uid) => {
        return { ...val, uid};
    });

    return { expense_fetch };

};

export default connect ( mapStateToProps, { expenseFetch }) (UserExpenses);