import React from 'react';


const Card = (props) => {
    return (
        <div className="tc dib br3 bw2 pa3 ma2 bg-light-green grow shadow-1">
            <img src="https://robohash.org/test?set=set4" alt="avatar"/>
            <div>
                <h2>Jane Doe</h2>
                <h3>jane.doe@gmail.com </h3>
            </div>
        </div>
    );
};


export default Card;