import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList';
import SreachBox from '../components/SreachBox';
import Scroll from '../components/Scroll';
import {setSearchField, requestContacts} from '../actions.js'


const mapStateToProps = ({searchContacts, requestContacts}) => ({
  searchField: searchContacts.searchField,
  users: requestContacts.users,
  isPending: requestContacts.inspending,
  error: requestContacts.error,
})

const mapDispatchToProps = dispatch => ({
  onSearch: event => dispatch(setSearchField(event.target.value)),
  fetchContacts: () => dispatch(requestContacts())
})


class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { searchField, onSearch, users, isPending } = this.props;

    const filteredContacts = users.filter(contact => {
      return contact.name
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
    });

    return isPending ?
    <h1>Loading...</h1> :
    (
      <div className='tc'>
        <h1 className="avenir f1 light-green">Contacts List</h1>
        <SreachBox onSearch={onSearch}/>
        <Scroll>
          <CardList contacts={filteredContacts}/>
        </Scroll>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
