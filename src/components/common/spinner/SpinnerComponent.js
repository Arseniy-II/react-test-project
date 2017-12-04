import PropTypes from 'prop-types';
import React from 'react';

export default function SpinnerComponent() {
    return (
        <div className='spinner'>
            <div className='spinner-item'/>
        </div>
    );
}

SpinnerComponent.propTypes = {
    spinnerWrapperClass: PropTypes.string
};
