import './App.css';
import TarjetaCliente from "./componentes/TarjetaCliente"
import "./data/clientes"
import clientes from './data/clientes';


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
