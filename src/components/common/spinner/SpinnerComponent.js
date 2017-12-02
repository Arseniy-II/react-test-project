import React from 'react'
import PropTypes from 'prop-types';

export default function SpinnerComponent(props) {
    return (
        <div className="spinner"/>
    )
}

SpinnerComponent.propTypes = {
    class: PropTypes.string
};
