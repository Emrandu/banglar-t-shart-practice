import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Aunti from '../Aunti/Aunti';
import './Grandpa.css'
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>Has money: {money}</p>
           <MoneyContext.Provider value={[money, setMoney]}>
           <RingContext.Provider value='golden ring'>
           <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunti ring={ring}></Aunti>
            </section>
           </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/***
 * 1.create a context
 * 2. create a provide and pass a value
 * 3. use useContext to receive
 * 
 * */ 