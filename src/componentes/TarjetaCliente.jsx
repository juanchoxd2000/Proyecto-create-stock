import React from "react";
import clientes from "../data/clientes";

function TarjetaCliente (props) {
    return (
        <ul>
            <li>
                nombre={clientes[props].nombre}
            </li>
            <li>
                edad={clientes[props].edad}
            </li>
            <li>
                fechaIngreso={clientes[props].fechaIngreso}
            </li>
        </ul>
    );
}

export default "TarjetaCliente";