import React from 'react';
import PropTypes from 'prop-types';

const UserInput = (props) => {
    return <input value={props.value} onChange={props.onChange} />
}

UserInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default UserInput;