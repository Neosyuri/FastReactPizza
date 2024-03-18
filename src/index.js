import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const pizzaData = [{
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
}, {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
}, {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
}, {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
}, {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
}, {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
},];


function App() {
    return <div className={'container'}>
        <Header/>
        <Menu/>
        <Footer/>
    </div>;
}

function Header() {
    const style = {};

    return <header className={'header'}>
        <h1 style={style}>Fast React Pizza Co.</h1>
    </header>;

}


function Menu() {
    const pizzas = pizzaData;

    //  const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return <main className={'menu'}>
        <h2>Our menu</h2>


        {numPizzas > 0 ? (
            <React.Fragment>

                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic,
                    all
                    delicious.</p>
                <ul className={'pizzas'}>
                    {pizzas.map(pizza => (
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))}

                </ul>
            </React.Fragment>
        ) : (<p>We're still working on our menu.</p>)}


    </main>;

}

function Pizza({pizzaObj}) {

    // if (pizzaObj.soldOut) {
    //     return null;
    // }
    return <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt="pizza"/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
        </div>
    </li>;
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if (hour >= openHour && hour <= closeHour) {
    //     alert('We are currently open');
    // } else {
    //     alert('We are close');
    // }
    // if (!isOpen) {
    //     return <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>;
    // }
//

    return <footer className={'footer'}>
        {isOpen ? (<Order closeHours={closeHour} openHours={openHour}/>) :
            <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>}
    </footer>;
}

function Order({closeHours, openHours}) {
    return <div className={'order'}>
        <p>We're open from {openHours}:00 to {closeHours}:00</p>
        <button className={'btn'}>Order</button>
    </div>;
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<React.StrictMode> <App/> </React.StrictMode>);