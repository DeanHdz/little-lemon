import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/hero_image.jpg";

export default function Hero() {
    return (
        <section id="Hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Somos un restaurante ubicado en Chicago, Illinois. <br /> Te invitamos a probar nuestra gran variedad de platillos. </p>
                <Link to="/reservations">
                    <button aria-label="On Click" >Reservar una mesa</button>
                </Link>
            </div>
            <div>
                <img src={heroImage}></img>
            </div>
        </section>
    );
}