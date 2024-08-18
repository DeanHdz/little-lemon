import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <img src=""></img>
            <nav>
                <ul>
                    <Link to="/">Inicio</Link>
                    <Link to="/about">Acerca de</Link>
                    <Link to="/menu">Menú</Link>
                    <Link to="/reservations">Reservas</Link>
                    <Link to="/online-order">Pedidos en linea</Link>
                    <Link to="/login">Iniciar sesión</Link>
                </ul>
            </nav>
        </header>
    );
}