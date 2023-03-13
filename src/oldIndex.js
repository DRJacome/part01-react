import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Counter = ({number}) => {
  console.log("Counter render");
  return <h1>{number}</h1> 
}

const App = (props) => {
  const [contador, setContador] = useState(0);

  console.log("Render");

  const handleClick = () => {
    /**
     * // Ambas líneas setContador hacen lo mismo. //
     * En la primera línea se pasa el valor de contador directamente al estado;
     * en la segunda línea se usa una función dentro del estado, 
     * y dicha función recibe como parámetro el valor anterior de contador (prevContador)
     * y devuelve el valor actualizado.
     */
    //setContador(contador + 1)
    setContador((prevContador) => { return prevContador + 1 })
  }

  const handleClickReset = () => {
    setContador(0)
  }

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "Es par." : "Es impar.";

  return (
    <div>
      <p>El valor del contador es: </p>
    <Counter number={contador}></Counter>
      <p>{mensajePar}</p>
      <h2>Magia de React</h2>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reiniciar</button>
    </div>
  )
}

root.render(<App />);
