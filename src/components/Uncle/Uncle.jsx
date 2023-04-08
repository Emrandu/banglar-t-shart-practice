import React, { useContext } from 'react';
import Causin from '../Causin/Causin';
import { MoneyContext } from '../Grandpa/Grandpa';


const Uncle = () => {
    const[money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p> <small>grandpa money: {money}</small> </p>
            <button onClick={()=>setMoney(money + 2000)}>Send 1000tk</button>
            <section className='flex'>
                <Causin>Nabil</Causin>
                <Causin>Nabila</Causin>

            </section>
        </div>
    );
};

export default Uncle;