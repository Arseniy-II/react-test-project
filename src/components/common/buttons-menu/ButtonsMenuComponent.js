import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonsMenuContainer (props) {
    return (
        <div className="buttons-menu">
            {props.children}
        </div>);
}

ButtonsMenuContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
