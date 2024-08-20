import { React, useReducer } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./Reserve.css";
import { fetchAPI } from "../../utils/API";

export default function Reserve() {

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    function updateTimes(date) {
        return fetchAPI(date);
    }

    return (
        <>
            <div id="Reserve">
                <h1>Reservar mesa</h1>
            </div>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </>
    )
};