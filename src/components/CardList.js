import React from 'react';
import Card from './Card';

const CardList = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact) => <Card key={contact.id}
                                            id={contact.id}
                                            name={contact.name}
                                            email={contact.email}/>)}
        </div>
    )
}

export default CardList;
