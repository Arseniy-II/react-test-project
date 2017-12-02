import React from 'react';
import PropTypes from 'prop-types';

export default function LayoutComponent(props) {
    return <div>{props.children}</div>;
}

LayoutComponent.propTypes = {
    children: PropTypes.element.isRequired
};
