import React from "react";
import Hero from "../../components/Hero/Hero";
import Highlights from "../../components/Highlights/Highlights";
import Testimonials from "../../components/Testimonials/Testimonials";
import About from "../../components/About/About";
import "./Home.css";

export default function Home() {
    return (
        <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </>
    );
}