import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setCounter((prev) => prev - 1);
    };

    const handleReset = () => {
        setCounter(0);
    };

    const handleDuplicate = () => {
        setCounter((prev) => prev * 2);
    };

    return (
        <div>
            <h1>Contador de cliques</h1>
            <h2>Cliques: {counter}</h2>
            <button onClick={handleIncrease}>adicionar</button>
            <button onClick={handleDecrease} disabled={counter <= 0 ? true : false}>
                remover
            </button>
            <button onClick={handleReset}>zerar</button>
            <button onClick={handleDuplicate}>duplicar</button>
        </div>
    );
}
