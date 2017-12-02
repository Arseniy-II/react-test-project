import React from 'react';
import PropTypes from 'prop-types';

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
