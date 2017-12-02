import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonsContainer (props) {
    return (
        <div>
            {props.children}
        </div>);
}

ButtonsContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
