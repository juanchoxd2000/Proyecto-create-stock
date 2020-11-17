import './App.css';
import TarjetaCliente from "./componentes/TarjetaCliente"
import "./data/clientes"
import clientes from './data/clientes';


function App() {
  console.log(clientes);
  function CrearTarjetaCliente(cliente){
    return(<div>
            <TarjetaCliente  />
          </div>
    );
  };
  const listaDeClientes = clientes.map(function (){
    return (<CrearTarjetaCliente  />);
  });
  return (
    <div>
      <h1>Listado de clientes activos{listaDeClientes}</h1>
      <CrearTarjetaCliente  />
      
    </div>
  );
}

export default App;
