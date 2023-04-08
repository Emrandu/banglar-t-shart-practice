import React from 'react';
import Friend from '../Friend/Friend';

const Causin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
           { hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Causin;