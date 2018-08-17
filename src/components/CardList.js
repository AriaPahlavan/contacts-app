import React from 'react';
import Card from './Card';

const CardList = ({contacts}) => {
    return (
        <div>
            {contacts.map(x => <Card key={x.id}
                                     id={x.id}
                                     name={x.name}
                                     email={x.email}/>)}
        </div>
    )
}

export default CardList;
