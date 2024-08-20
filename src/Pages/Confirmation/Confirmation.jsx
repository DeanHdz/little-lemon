import { Link } from "react-router-dom";
import "./Confirmation.css";

export default function Confirmation() {
    return (
        <section id="Confirmation">
            <div>
                <article className="reserve-header-text">
                    <h1>¡Tu reserva ha sido confirmada!</h1>
                    <h4>Un mensaje de confirmación ha sido enviado a tu correo.</h4>
                    <h4>Gracias por considerarnos.</h4>
                </article>

                <div className="redirect-buttons">
                    <Link className="redirect-button" to="/">
                        Inicio
                    </Link>
                </div>
            </div>
        </section>
    );
}
