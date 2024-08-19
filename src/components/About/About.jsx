import React from "react";
import "./About.css";
import img1 from "../../assets/images/food.jpg";
import img2 from "../../assets/images/food.jpg";

export default function About() {
    return (
        <section id="About">
            <h1>Acerca de nosotros</h1>
            <div>
                <div id="About-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon es un restaurante de comida italiana con más de 10 años de experiencia, fundado en la ciudad de Chicago. Desde nuestros inicios, nos hemos comprometido a ofrecer platos auténticos y de alta calidad, elaborados con ingredientes frescos y tradicionales. Nuestro objetivo es brindar a nuestros clientes la mejor experiencia culinaria posible, creando un ambiente acogedor y un servicio excepcional que haga de cada visita una ocasión memorable. Nos enorgullece ser un referente en la comunidad, donde la pasión por la buena comida se refleja en cada uno de nuestros platos.</p>
                </div>
                <div id="About-gallery">
                    <img src={img1} className="about-1"></img>
                    <img src={img2} className="about-2"></img>
                </div>
            </div>
        </section>
    );
}