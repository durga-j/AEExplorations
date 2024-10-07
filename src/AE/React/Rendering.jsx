import React from "react";
import PropTypes from 'prop-types';
export default function Welcome(props) {   
    return <h1>Hello, {props.name}</h1>;
}

//default props
Welcome.defaultProps = {
    name: 'Guest',
};

//prop type
Welcome.propTypes = {
    name: PropTypes.string.isRequired,
};
//if name is not a string or is missing, a warning will appear in the developer console.