import React, { useState } from "react";

import Card from "./Card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./Counter";
import Form from "./Form";
import Register from "./Register";
//create your first component
// const [state, setState] = useState(valorInicial)
// ------[Estado, Funcion que modifica el estado]
const Home = () => {
	console.log("Renderiza Home");

	return (
		<div className="">
			<Counter />
			<Card
				name="Producto"
				price={100}
				hasDiscount
			/>
			<Form />
			<hr className="my-5" />
			<Register />
		</div>
	);
};

export default Home;
