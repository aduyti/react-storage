import React, { useState } from 'react';
import { addToStorage, removeFromStore } from '../../utilities/fakedb';

const Person = (props) => {
    const [followers, setFollower] = useState(0)
    const { name, age, money, id } = props.person;
    const inc = () => {
        setFollower(followers + 1);
    }
    const dec = () => {
        if (followers > 0)
            setFollower(followers - 1);
    }
    const add = () => {
        addToStorage(id);
    }
    const remove = () => {
        removeFromStore(id);
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}y, ${money}</p>
            <button onClick={inc}>Like</button> {followers} <button onClick={dec}>Dislike</button>
            <br />
            <button onClick={add}>Add</button><button onClick={remove}>Remove</button>
        </div>
    );
};

export default Person;