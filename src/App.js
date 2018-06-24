import React from 'react';
import CardList from './CardList';
import {contacts} from './contacts';


const App = () => {
  return (
    <div>
      <CardList contacts={contacts}/>
    </div>
  );
};


export default App;
