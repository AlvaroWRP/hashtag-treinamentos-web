import { useState, useEffect } from 'react';

export function Timer() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setData({ dado: 1, dadinho: 2, dadao: 3 });
        }, 2000);

        return () => {
            clearTimeout(loadingTimer);
        };
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <p>Dado: {data.dado}</p>
                    <p>Dadinho: {data.dadinho}</p>
                    <p>Dadao: {data.dadao}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}
