import React from 'react';

const Client = ({ data }) => {
    const { firstName, lastName, phone, imageUrl } = data;

    return (
        <li className="col-12 col-sm-3 col-md-4 col-lg-6 mb-4">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <a href={`mailto:${lastName.toLowerCase()}.${firstName.toLowerCase()}@gmail.com`} 
                        className="btn btn-primary me-2">Envoyer un message</a>
                    <a href={`callto:${phone}`} 
                        className="btn btn-secondary">${phone}</a>
                </div>
            </div>
        </li>
    );
};

export default Client;