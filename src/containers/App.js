import React, {Component} from 'react';
import CardList from '../components/CardList';
import SreachBox from '../components/SreachBox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(contacts => this.setState({ contacts: contacts }));
  }

  onSearch = (event) => this.setState({searchfield: event.target.value});

  render() {
    const { contacts, searchfield } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.name
                    .toLowerCase()
                    .includes(searchfield.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className="avenir f1 light-green">Contacts List</h1>
        <SreachBox onSearch={this.onSearch}/>
        <Scroll>
          <CardList contacts={filteredContacts}/>
        </Scroll>
      </div>
    );
  }
}


export default App;
