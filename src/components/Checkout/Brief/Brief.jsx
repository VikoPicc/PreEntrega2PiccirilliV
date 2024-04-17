import React from 'react';

const Brief = ({ totalItems, totalPrice }) => {
    return (
        <div>
            <p>Total de artículos: {totalItems}</p>
            <p>Total a pagar: ${totalPrice}</p>
        </div>
    );
};

export default Brief;
