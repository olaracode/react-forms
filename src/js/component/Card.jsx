import React from "react";
import PropTypes, { string, number, bool, func } from "prop-types";

// Los props:
// Las propiedades que 
// podemos pasar de un padre a 
// Un componente hijo
// Tener elementos dinamicos
// Reutilizable(?)


// Props -> { name, price }
// const props = {
//     name: "algo",
//     price: "algo",
//     hasDiscount: true,
//     addToCart: "Cualquier cosa"
// }

// const { name, price, hasDiscount, addToCard } = props;

// La consistencia // props // {deestructuracion}

// const Componente = () => {}
// function Componente() {}

const Card = ({ name, price, hasDiscount, addToCart }) => {
    console.log("Renderiza Card")
    // Antes del return
    // props.algo
    // algo
    return (
        <div>
            {name}
            {price}
            {hasDiscount ? "Tiene Descuento" : "No tiene descuento"}
        </div>
    )
}
//
Card.propTypes = {
    name: string.isRequired,
    price: number,
    hasDiscount: bool,
    addToCard: func,
}

// Card.propTypes = {
//     name: PropTypes.string,
//     price: PropTypes.number,
//     hasDiscount: PropTypes.bool,
//     addToCard: PropTypes.func,
// }


export default Card;