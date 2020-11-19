import './App.css';
import TarjetaCliente from "./componentes/TarjetaCliente"
import clientes from './data/clientes';

function crearTarjetaCliente(clientes){
  return(<div>
          <TarjetaCliente nombre={clientes.nombre} edad={clientes.edad} fechaIngreso={clientes.fechaIngreso} />
        </div>
  );
};

const listaDeClientes = clientes.map(crearTarjetaCliente);


function App(props) {
  console.log(clientes);
  return (
    <div className = "App">
      <h1>Listado de clientes activos</h1>
      {listaDeClientes}
    </div>
  );
}

export default App;
