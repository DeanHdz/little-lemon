import { useState } from "react";
import "./BookingForm.css";

export default function BookingForm(props) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");
    const [errors, setErrors] = useState({});

    function handleDateChange(e) {
        const newDate = new Date(e.target.value);
        setDate(e.target.value);
        props.updateTimes({ type: "dateChanged", payload: newDate });
    }

    const validateForm = () => {
        const newErrors = {};
        if (!fName) newErrors.fName = "El nombre es obligatorio.";
        if (!lName) newErrors.lName = "El apellido es obligatorio.";
        if (!email) {
            newErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "El correo electrónico no es válido.";
        }
        if (!tel) {
            newErrors.tel = "El número de teléfono es obligatorio.";
        } else if (!/^\d{10}$|^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$|^\(\d{3}\)[-\s]?\d{3}[-.\s]?\d{4}$/.test(tel)) {
            newErrors.tel = "El número de teléfono no es válido. Usa un formato válido, como 1234567890, 123-456-7890, o (123) 456-7890.";
        }
        if (!date) newErrors.date = "La fecha es obligatoria.";
        if (!time) newErrors.time = "La hora es obligatoria.";
        if (!people || people < 1) newErrors.people = "Se requiere al menos una persona.";
        if (!preferences || preferences === "Ninguna") newErrors.preferences = "Por favor selecciona una preferencia de mesa.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulario enviado exitosamente");
            window.location.href = "/confirmation";
        }
    };

    return (
        <form className="reservation-form">
            <h2>Agenda tu mesa</h2>
            <fieldset>
                <legend>Información Personal</legend>
                <div className="form-group">
                    <label htmlFor="fName">Nombre</label>
                    <input
                        type="text"
                        id="fName"
                        placeholder="Nombre"
                        required
                        minLength={2}
                        maxLength={50}
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                    />
                    {errors.fName && <span className="error">{errors.fName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="lName">Apellidos</label>
                    <input
                        type="text"
                        id="lName"
                        placeholder="Apellidos"
                        minLength={2}
                        maxLength={50}
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                    />
                    {errors.lName && <span className="error">{errors.lName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Correo electrónico"
                        value={email}
                        required
                        minLength={4}
                        maxLength={200}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phonenum">Número de celular</label>
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
                    {errors.tel && <span className="error">{errors.tel}</span>}
                </div>
            </fieldset>

            <fieldset>
                <legend>Detalles de reservación</legend>
                <div className="form-group">
                    <label htmlFor="people">Número de invitados</label>
                    <input
                        type="number"
                        id="people"
                        placeholder="Número de personas"
                        value={people}
                        required
                        min={1}
                        max={100}
                        onChange={(e) => setPeople(e.target.value)}
                    />
                    {errors.people && <span className="error">{errors.people}</span>}
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
                    {errors.date && <span className="error">{errors.date}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="time">Seleccionar Hora</label>
                    <select
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="">Selecciona una hora</option>
                        {props.availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {errors.time && <span className="error">{errors.time}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="occasion">Ocasión</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Ninguno</option>
                        <option>Cumpleaños</option>
                        <option>Aniversario</option>
                        <option>Otro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="preferences">Mesa interior o exterior</label>
                    <select
                        id="preferences"
                        value={preferences}
                        onChange={(e) => setPreferences(e.target.value)}
                    >
                        <option>Ninguna</option>
                        <option>Interior</option>
                        <option>Exterior (Patio)</option>
                        <option>Exterior (Banqueta)</option>
                    </select>
                    {errors.preferences && <span className="error">{errors.preferences}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comentarios adicionales</label>
                    <textarea
                        id="comments"
                        rows={5}
                        cols={50}
                        placeholder="Comentarios adicionales"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></textarea>
                </div>
            </fieldset>

            <div className="form-actions">
                <button type="submit" aria-label="Reservar Mesa" onClick={handleSubmit} className="action-button">
                    Reservar Mesa
                </button>
            </div>
        </form>
    );
}
