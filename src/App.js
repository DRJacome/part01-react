import './App.css';
import Mensaje from './componentes/mensaje.js';

const Descripcion = () => {
  return <p>Esta es la App del curso bootcamp fullstack</p>
}

const App = () => {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message=' en un curso' />
      <Mensaje color='yellow' message=' de React' />
      <Descripcion />
    </div>
  );
}

export default App;
