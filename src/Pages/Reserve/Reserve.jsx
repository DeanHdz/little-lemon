import { React, useReducer } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./Reserve.css";
import { fetchAPI } from "../../utils/API";

export default function Reserve() {
    const initializeTimes = () => fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    function updateTimes(state, action) {
        if (action.type === "dateChanged") {
            return fetchAPI(action.payload);
        }
        return state;
    }

    return (
        <>
            <div id="Reserve">
                <h1>Reservar mesa</h1>
            </div>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </>
    );
}
