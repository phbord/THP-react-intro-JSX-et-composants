import React from 'react';
import TotalAmount from 'components/TotalAmount';

const MixedContent = (props) => {
    const {name, price} = props.book;
    return (
        <li>
            <h4>{name}</h4>
            <p><TotalAmount amount={price} /> €</p>
        </li>
    );
};

export default MixedContent;