import React from 'react';
import faker from 'faker';
import Client from 'components/Client';

const Clients = () => {
    faker.locale = "fr";
    const clientsList = Array.from({ length: 100 }, () => ({
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
    }));

    console.log(clientsList);

    return (
        <ul>
            {clientsList.map((clientData) => (
                <Client data={clientData} key={clientData.id} />
            ))}
        </ul>
    );
};

export default Clients;