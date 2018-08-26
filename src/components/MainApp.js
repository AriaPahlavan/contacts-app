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
    return this.generateContent(this.props);
  }

  generateContent({ onSearch, isPending, error }) {
    if (isPending) {
      return (
        <h1 className='tc mt7 avenir f1 light-green'>
          {'releasing the yarn balls to attract kitties...'}
        </h1>);
    } else {
      if (error === 'FAIL') {
        return (
          <h1 className='tc mt7 avenir f1 light-green'>
            {'connection with kitties failed :('}
          </h1>
        );
      } else {
        return (
          <div className='tc'>
            <h1 className="avenir f1 light-green">{'Your Kitties'}</h1>
            <SreachBox onSearch={onSearch}/>
            <Scroll>
              <CardList contacts={this.filterKitties()}/>
            </Scroll>
          </div>
        );

      }
    }
  }
}


export default MainApp;
