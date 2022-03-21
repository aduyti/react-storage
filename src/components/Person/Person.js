import React, { useState } from 'react';

const Person = (props) => {
    const [followers, setFollower] = useState(0)
    const { name, age, money } = props.person;
    const inc = () => {
        setFollower(followers + 1);
    }
    const dec = () => {
        setFollower(followers - 1);
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}y, ${money}</p>
            <button onClick={inc}>Like</button> {followers} <button onClick={dec}>Dislike</button>
        </div>
    );
};

export default Person;