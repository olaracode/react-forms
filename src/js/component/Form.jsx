import React, { useState } from "react";

const Form = () => {
    // que cuando el usuario escriba en el input
    // El valor del input se almacene en una variable
    const [user, setUser] = useState(""); // null
    const [password, setPassword] = useState("");

    function submitForm(e) {
        e.preventDefault(); // Previene que se rerenderize la pagina al enviar
        // Dentro de esta funcion yo puedo hacer algo
        // Enviar datos a una base de datos

        console.log("Enviando a BBDD", {
            dbUser: user,
            dbPassword: password
        })
    }

    function reset() {
        // queremos que al darle click al boton
        // Esta funcion vacie los datos de los estados
        setPassword("");
        setUser("");
    }
    return (
        <div className="my-3 container mx-auto">
            <h1>Inicia sesión</h1>
            <form className="d-flex flex-column gap-4"
                onSubmit={(e) => submitForm(e)}
            >
                <div>
                    <label>Usuario: {user}</label>
                    <input
                        type="text"
                        className="form-control"
                        value={user}
                        onChange={(event) => setUser(event.target.value)}
                    />
                </div>

                <div>
                    <label>Contraseña: {password}</label>
                    <input type="password" className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Inicia sesion
                </button>
                <button type="button" className="btn btn-secondary" onClick={reset}>
                    Limpiar campos
                </button>
            </form>
        </div>
    )
}

export default Form;