import React from 'react';

const Card = ({id, name, email}) => {
    return (<div className="tc dib br3 bw2 pa3 ma2 bg-light-green grow shadow-1">
        <img src={`https://robohash.org/${name}?set=set4&size=150x150`} alt="avatar"/>
        <div>
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    </div>);
};

export default Card;
