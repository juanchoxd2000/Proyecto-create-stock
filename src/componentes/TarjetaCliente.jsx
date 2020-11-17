import React from "react";
import clientes from "../data/clientes";

function TarjetaCliente(props) {
    
    return (
        <ul>
            <li>
                Nombre = {clientes[0].nombre}
            </li>
            <li>
                Edad = {clientes[0].edad}
            </li>
            <li>
                Fecha de ingreso = {clientes[0].fechaIngreso}
            </li>
        </ul>
    );
};

export default TarjetaCliente;