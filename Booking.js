import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
    return (
        <BookingForm
            availableTimes={props.availableTimes}
            dispatch={props.dispatch}
            submitForm={props.submitForm}  // Changed to match the corrected prop name
        />
    );
};

export default Booking;
