import React from 'react';

const Client = ({ data }) => {
    const { firstName, lastName, phone } = data;

    return (
        <li className="mb-2">
            <strong className="me-2 d-inline-block" style={{ minWidth: '200px' }}>{firstName} {lastName}</strong>
            <a href={`mailto:${lastName}.${firstName}@gmail.com`} className="btn btn-primary me-2">Envoyer un message</a>
            <a href={`callto:${phone}`} className="btn btn-secondary">${phone}</a>
        </li>
    );
};

export default Client;