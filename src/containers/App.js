import React, {Component} from 'react';
import {connect} from 'react-redux';

import MainApp from '../components/MainApp';
import {setSearchField, requestContacts} from '../actions.js'


const mapStateToProps = ({searchContacts, requestContacts}) => ({
  searchField: searchContacts.searchField,
  users: requestContacts.users,
  isPending: requestContacts.isPending,
  error: requestContacts.error,
})

const mapDispatchToProps = dispatch => ({
  onSearch: event => dispatch(setSearchField(event.target.value)),
  fetchContacts: () => dispatch(requestContacts())
})


class App extends Component {
  render() {
    return <MainApp {...this.props}/>;
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
