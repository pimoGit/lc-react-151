import { useState } from 'react';

export default function Counter() {
    // Definiamo uno stato "count" 
    // e una funzione "setCount" per aggiornarlo
    const [count, setCount] = useState(0);

    // funzione di incremento
    function incrementa() {
        setCount(count + 1);
    }

    // funzione di decremento
    function decrementa() {
        setCount(count - 1);
    }

    return (
        <div>
            <div className="counter">{count}</div>
            <button onClick={incrementa}>Incrementa!</button><br />
            <button onClick={decrementa}>Dercrementa!</button>
        </div>
    );
}