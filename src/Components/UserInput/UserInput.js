import React from 'react';

const UserInput = (props) => {
    return <input value={props.value} onChange={props.onChange} />
}

export default UserInput;