import React from "react";
import "./About.css";
import img1 from "../../assets/images/food.jpg";
import img2 from "../../assets/images/food.jpg";

export default function About() {
    return (
        <section id="About">
            <h1>Acerca de nosotros</h1>
            <div>
                <h1>
                    Little Lemon
                </h1>
                <h2>
                    Chicago
                </h2>
                <p>
                    Little lemon es un restaurante de comida italiana con mas de 10 años de experiencia en la ciudad de Chicago. Nuestro objetivo es brindar a nuestros clientes la mejor experiencia culinaria posible.
                </p>
            </div>
            <div>
                <img src={img1}></img>
                <img src={img2}></img>
            </div>
        </section>
    );
}