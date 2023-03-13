import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';


const WarningNotUsed = () => {
    return <h1>Todavía no se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    return <p>{clicks.join(', ')}</p>
}

const App = () => {
    /*     const [left, setLeft] = useState(10);
        const [right, setRight] = useState(20); */
    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: 'Mensaje en el estado'
    });

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        const newCountersState = {
            /**
             * // Spread operator JS: ...counters //
             * Cuando se quieren conservar las propiedades/estado inicial o anterior
             * (que puede estar compuesto de valores simples, objetos, etc.)
             * a un nuevo estado, se pueden usar tres puntos consecutivos 
             * para traer (esparcir) estas propiedades al nuevo estado
             * y modificar/añadir/eliminar los datos que interese.
             */
            ...counters,
            left: counters.left + 1
            /**
             * IMPORTANTE: NUNCA se debe mutar el objeto del estado.
             * ESTO NUNCA -> counters. clicks++
             */
        }
        setCounters(newCountersState);
        setClicks(prevClicks => {
            return ([...prevClicks, 'L'])
            //return prevClicks.concat("L")
        })
    };

    const handleClickRight = () => {
        const newCountersState = {
            ...counters,
            right: counters.right + 1
        }
        setCounters(newCountersState);
        setClicks(prevClicks => {
            return ([...prevClicks, 'R'])
            //return prevClicks.concat("L")
        })
    }

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            {clicks.length === 0 ? (<WarningNotUsed />) : (<ListOfClicks clicks={clicks} />)}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
