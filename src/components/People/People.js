import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const People = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('people.json')
            .then(response => response.json())
            .then(data => setPeople(data))
    }, []);
    return (
        <div>
            {
                people.map(person => <Person person={person} key={person.id}></Person>)
            }
        </div>
    );
};

export default People;