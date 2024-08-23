import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);  // Default to 1 guest
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, time, guests, occasion });
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.dispatch({ type: 'UPDATE_TIMES', date: new Date(selectedDate) }); // Correct action dispatch
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* Date */}
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input
                                id='book-date'
                                value={date}
                                onChange={handleDateChange}
                                type='date'
                                required
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select
                                id="book-time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.map(time => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>

                        {/* Guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input
                                id='book-guests'
                                type="number"
                                min='1'
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                required
                            />
                        </div>

                        {/* Occasion */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select
                                id='book-occasion'
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className='btnReceive'>
                            <input
                                aria-label='On Click'
                                type='submit'
                                value="Make Your Reservation"
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
