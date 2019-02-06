import React from 'react';
import PropTypes from 'prop-types';


const UserOutput = (props) => {
  return <p>Username: {props.username}</p>
}

UserOutput.PropTypes = {
  username: PropTypes.string
};

export default UserOutput;