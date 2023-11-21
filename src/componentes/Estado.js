import { useState } from "react";
import '../App.css'

function EjemploEstado(props) {

    const [counter, setCounter] = useState(0);

    return (
        <div className="contenedor1">
            <h3>{`Ayudanos a saber si nuestros servicios son eficientes: ${counter}`}</h3>
            <div className="buttonGroup">
                <button className="success" onClick={() => setCounter(counter + 1)}>Si</button>
                <button className="error" onClick={() => setCounter(counter - 1)}>No</button>
            </div>

        </div>
    )
}

export {
    EjemploEstado
}