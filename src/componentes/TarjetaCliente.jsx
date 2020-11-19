import React from "react";

function TarjetaCliente(props) {
    
    return (
        <ul>
            <li>
                Nombre : {props.nombre || "No hay datos"}
            </li>
            <li>
                Edad : {props.edad || "No hay datos"}
            </li>
            <li>
                Fecha de ingreso : {props.fechaIngreso || "No hay datos"}
            </li>
        </ul>
    );
};

export default TarjetaCliente;