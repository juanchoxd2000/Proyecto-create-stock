import './App.css';

import "./data/clientes"
import clientes from './data/clientes';

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

function App() {
  console.log(clientes)
  return (
    <div>
      <h1>Listado de clientes activos</h1>
      <TarjetaCliente />
    </div>
  );
}

export default App;
