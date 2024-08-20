import React from 'react';
import './Highlights.css';
import { Link } from 'react-router-dom';
import food from '../../assets/images/food.jpg';

export default function Highlights() {
    return (
        <section id="Highlights">
            <div className='Title'>
                <h1>¡Platillos especiales de la semana!</h1>
                <Link to='/menu'><button aria-label="On Click">Ver menú completo</button></Link>
            </div>
            <div className='Body'>
                <article className='Card'>
                    <img src={food}></img>
                    <div className='Card-title'>
                        <h2>Greek Salad</h2>
                        <p>$12.99</p>
                    </div>
                    <div className='Card-body'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Ordenar a domicilio <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M29.004 13.674L25 12.97l.346-1.97l4.136.727A3.5 3.5 0 0 1 32.5 10h3.885c.34 0 .615.275.615.615v5.77c0 .34-.276.615-.615.615H32.5a3.5 3.5 0 0 1-3.496-3.326" /><path fill-rule="evenodd" d="M30.805 18.563L29.875 26H23v-1.28c0-.398-.378-.72-.844-.72h-8.07C8.516 24 4 27.85 4 32.6c0 .22.21.4.47.4h4.552a5.5 5.5 0 0 0 10.956 0h.91q.057 0 .112-.002V33h10.366c.202.68.783 1.115 1.418 1.25a5.5 5.5 0 0 0 10.703-2.137c.445-.464.669-1.145.395-1.882A6.5 6.5 0 0 0 35 26.628V19h-2.5a3.5 3.5 0 0 1-1.695-.437M16.95 33h-4.9a2.5 2.5 0 0 0 4.9 0m18.944.848a2.501 2.501 0 0 0 4.546-.801z" clip-rule="evenodd" /><path d="M9.17 20a3 3 0 0 1 .063-.162M9.17 20c-.11.313-.17.65-.17 1v1h15v-1q-.002-.507-.158-.962L23.83 20A3 3 0 0 0 21 18h-9a3 3 0 0 0-2.764 1.832" /></g></svg></p>
                    </div>
                </article>
                <article className='Card'>
                    <img src={food}></img>
                    <div className='Card-title'>
                        <h2>Bruchetta</h2>
                        <p>$8.99</p>
                    </div>
                    <div className='Card-body'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Ordenar a domicilio <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M29.004 13.674L25 12.97l.346-1.97l4.136.727A3.5 3.5 0 0 1 32.5 10h3.885c.34 0 .615.275.615.615v5.77c0 .34-.276.615-.615.615H32.5a3.5 3.5 0 0 1-3.496-3.326" /><path fill-rule="evenodd" d="M30.805 18.563L29.875 26H23v-1.28c0-.398-.378-.72-.844-.72h-8.07C8.516 24 4 27.85 4 32.6c0 .22.21.4.47.4h4.552a5.5 5.5 0 0 0 10.956 0h.91q.057 0 .112-.002V33h10.366c.202.68.783 1.115 1.418 1.25a5.5 5.5 0 0 0 10.703-2.137c.445-.464.669-1.145.395-1.882A6.5 6.5 0 0 0 35 26.628V19h-2.5a3.5 3.5 0 0 1-1.695-.437M16.95 33h-4.9a2.5 2.5 0 0 0 4.9 0m18.944.848a2.501 2.501 0 0 0 4.546-.801z" clip-rule="evenodd" /><path d="M9.17 20a3 3 0 0 1 .063-.162M9.17 20c-.11.313-.17.65-.17 1v1h15v-1q-.002-.507-.158-.962L23.83 20A3 3 0 0 0 21 18h-9a3 3 0 0 0-2.764 1.832" /></g></svg></p>
                    </div>
                </article>
                <article className='Card'>
                    <img src={food}></img>
                    <div className='Card-title'>
                        <h2>Lemon Dessert</h2>
                        <p>$5.00</p>
                    </div>
                    <div className='Card-body'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Ordenar a domicilio <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M29.004 13.674L25 12.97l.346-1.97l4.136.727A3.5 3.5 0 0 1 32.5 10h3.885c.34 0 .615.275.615.615v5.77c0 .34-.276.615-.615.615H32.5a3.5 3.5 0 0 1-3.496-3.326" /><path fill-rule="evenodd" d="M30.805 18.563L29.875 26H23v-1.28c0-.398-.378-.72-.844-.72h-8.07C8.516 24 4 27.85 4 32.6c0 .22.21.4.47.4h4.552a5.5 5.5 0 0 0 10.956 0h.91q.057 0 .112-.002V33h10.366c.202.68.783 1.115 1.418 1.25a5.5 5.5 0 0 0 10.703-2.137c.445-.464.669-1.145.395-1.882A6.5 6.5 0 0 0 35 26.628V19h-2.5a3.5 3.5 0 0 1-1.695-.437M16.95 33h-4.9a2.5 2.5 0 0 0 4.9 0m18.944.848a2.501 2.501 0 0 0 4.546-.801z" clip-rule="evenodd" /><path d="M9.17 20a3 3 0 0 1 .063-.162M9.17 20c-.11.313-.17.65-.17 1v1h15v-1q-.002-.507-.158-.962L23.83 20A3 3 0 0 0 21 18h-9a3 3 0 0 0-2.764 1.832" /></g></svg></p>
                    </div>
                </article>
            </div>
        </section>
    );
}