import React, {Component} from 'react';

import CardList from '../components/CardList';
import SreachBox from '../components/SreachBox';
import Scroll from '../components/Scroll';

class MainApp extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  filterKitties = () => {
    const {searchField: query, users: kitties} = this.props;
    return kitties.filter(x => x.name
                                .toLowerCase()
                                .includes(query.toLowerCase()));
    };

  render() {
    const { onSearch, isPending } = this.props;

    return isPending
    ? <h1 className='tc mt7 avenir f1 light-green'>Loading...</h1>
    : (
        <div className='tc'>
          <h1 className="avenir f1 light-green">Your Kitties</h1>
          <SreachBox onSearch={onSearch}/>
          <Scroll>
            <CardList contacts={this.filterKitties()}/>
          </Scroll>
        </div>
      );
  }
}


export default MainApp;
