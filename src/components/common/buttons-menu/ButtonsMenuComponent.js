import PropTypes from 'prop-types';
import React from 'react';

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
