import React from 'react';
import Causin from '../Causin/Causin';

const Aunti = ({ring}) => {
    return (
        <div>
            <h2>Aunti</h2>
            <section className='flex'>
                <Causin>Abir</Causin>
                <Causin  hasFriend={true} ring={ring}>Nibir</Causin>
            </section>
        </div>
    );
};

export default Aunti;