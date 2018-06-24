import React, {Component} from 'react';
import CardList from './CardList';
import SreachBox from './SreachBox';
import {contacts} from './contacts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts,
      searchfield: ''
    }
  }

  onSearch = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
                    .toLowerCase()
                    .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className="avenir f1 light-green">Contacts List</h1>
        <SreachBox onSearch={this.onSearch}/>
        <CardList contacts={filteredContacts}/>
      </div>
    );
  }
}


export default App;
