import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking'; // Ensure this component exists

const Main = () => {
    // Seed random number generator based on the given seed
    const seedRandom = (seed) => {
        const m = 2 ** 35 - 31;
        const a = 185852;
        let s = seed % m;
        return () => {
            s = (s * a) % m;
            return s / m;
        };
    };

    // Fetch available times based on the given date
    const fetchAPI = (date) => {
        const result = [];
        const random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(`${i}:00`);
            }
            if (random() > 0.5) {
                result.push(`${i}:30`);
            }
        }
        return result;
    };

    // Simulate API submission
    const submitAPI = (formData) => {
        console.log('Form submitted with data:', formData); // Debug log
        return true;
    };

    // Initial state with available times based on the current date
    const initialState = { availableTimes: fetchAPI(new Date()) };

    // Reducer function to update available times based on the selected date
    function updateTimes(state, action) {
        return { availableTimes: fetchAPI(action.date) };
    }

    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();

    // Handle form submission and navigate to the confirmed page
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('/confirmed');
        }
    }

    return (
        <main>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route
                    path='/booking'
                    element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />}
                />
                <Route path='/confirmed' element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;
