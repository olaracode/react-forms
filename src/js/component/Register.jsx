import React, { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({
        email: "",
        phoneNumber: "",
        username: "",
        password: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false)

    const [aceptoTerminosYCondiciones, setAceptoTerminosYCondiciones] = useState(false)
    // {...user, email: "nuevovaloremail" }
    // {...user, password: "Nuevo valor password"}
    // {...user, calle: "avenido tal tal tal"}

    function updateUser(event) {
        // {key: newValue}
        console.log("key:", event.target.name);
        console.log("value:", event.target.value);
        console.log(user["email"])

        // Que van a ver mucho
        // que va a simplificar el trabajo de inputs
        // en react
        // setUser({...user, ["email"]: event.target.value })
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    // El spread operator '...'
    // sirve para objetos y arreglos
    // Y significa todoSusContenidos

    function submitForm(e) {
        e.preventDefault();
        console.log(aceptoTerminosYCondiciones)
    }

    return (
        <div className="my-3 container mx-auto">
            <h1>Registro de usuario</h1>
            <form
                className="d-flex flex-column gap-4"
                onSubmit={(e) => submitForm(e)}
            >
                <div>
                    <label>Email: {user.email} </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={(e) => updateUser(e)}
                        value={user.email}
                        disabled={true}
                    />
                </div>
                <div>
                    <label>Numero Telefonico: {user.phoneNumber} </label>
                    <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        onChange={(e) => updateUser(e)}
                    />
                </div>
                <div>
                    <label>Usuario: {user.username} </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={(e) => updateUser(e)}
                    />
                </div>

                <div className="input-group mb-3">
                    <button className="input-group-text" id="basic-addon1"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        {passwordVisible ? <i className="far fa-eye"></i> : <i class="far fa-eye-slash"></i>}

                    </button>
                    <input type={passwordVisible ? "text" : "password"} className="form-control" name="password" />
                </div>

                <div>
                    <input type="checkbox" checked={aceptoTerminosYCondiciones} onClick={() => setAceptoTerminosYCondiciones(!aceptoTerminosYCondiciones)} />
                </div>
                <button type="submit" className="btn btn-primary" >
                    Inicia sesion
                </button>

            </form>
        </div>
    );
};

export default Register;
