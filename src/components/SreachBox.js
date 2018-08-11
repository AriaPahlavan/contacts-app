import React from 'react';


const SreachBox = ({onSearch}) => {
  return (
    <div className='pa2'>
      <input className='pa3 ma2 ba b--green bg-lightest-blue'
            type='search'
            aria-label='Search Kitties'
            placeholder='search kitties'
            onChange={onSearch}/>
    </div>
  );
};


export default SreachBox;
