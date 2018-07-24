import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList';
import SreachBox from '../components/SreachBox';
import Scroll from '../components/Scroll';
import {setSearchField} from '../actions.js'


const mapStateToProps = state => ({
  searchField: state.searchField
})

const mapDispatchToProps = dispatch => ({
  onSearch: event => dispatch(setSearchField(event.target.value))
})


class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(contacts => this.setState({ contacts: contacts }));
  }

  render() {
    const { contacts } = this.state;
    const { searchField, onSearch } = this.props;

    const filteredContacts = contacts.filter(contact => {
      return contact.name
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
    });

    return (
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
