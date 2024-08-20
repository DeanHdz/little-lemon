import { useState } from "react";
import { Link } from "react-router-dom";
import "./BookingForm.css"; // Asegúrate de crear y vincular este archivo CSS

//Formulario de Booking/reserva
export default function BookingForm(props) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");

    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    return (
        <form className="reservation-form">
            <h2>Agenda tu mesa</h2>
            <fieldset>
                <legend>Información Personal</legend>
                <div className="form-group">
                    <label htmlFor="fName">Nombres</label>
                    <input
                        type="text"
                        id="fName"
                        placeholder="First Name"
                        required
                        minLength={2}
                        maxLength={50}
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lName">Apellidos</label>
                    <input
                        type="text"
                        id="lName"
                        placeholder="Last Name"
                        minLength={2}
                        maxLength={50}
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electronico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        required
                        minLength={4}
                        maxLength={200}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phonenum">Numero de celular</label>
                    <input
                        type="tel"
                        id="phonenum"
                        placeholder="(xxx)-xxx-xxxx"
                        value={tel}
                        required
                        minLength={10}
                        maxLength={25}
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>
            </fieldset>

            <fieldset>
                <legend>Detalles de reservación</legend>
                <div className="form-group">
                    <label htmlFor="people">Numero de invitados</label>
                    <input
                        type="number"
                        id="people"
                        placeholder="Number of People"
                        value={people}
                        required
                        min={1}
                        max={100}
                        onChange={(e) => setPeople(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Seleccionar Fecha</label>
                    <input
                        type="date"
                        id="date"
                        required
                        value={date}
                        onChange={handleDateChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Seleccionar Hora</label>
                    <select id="time" required>
                        {finalTime}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="occasion">Ocasión</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="preferences">Mesa interior o exterior</label>
                    <select
                        id="preferences"
                        value={preferences}
                        onChange={(e) => setPreferences(e.target.value)}
                    >
                        <option>None</option>
                        <option>Indoors</option>
                        <option>Outdoor (Patio)</option>
                        <option>Outdoor (Sidewalk)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comentarios adicionales</label>
                    <textarea
                        id="comments"
                        rows={5}
                        cols={50}
                        placeholder="Additional Comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></textarea>
                </div>
            </fieldset>

            <div className="form-actions">
                <Link className="action-button" to="/confirmation">
                    Book Table
                </Link>
            </div>
        </form>
    );
}
