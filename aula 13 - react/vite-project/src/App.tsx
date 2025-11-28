import { OrdersContainer } from './components/orders-container/OrdersContainer';
import '../styles.css';
import { useMessage } from './hooks/useMessage';
import { Counter } from './components/counter/Counter';
import { Timer } from './components/timer/Timer';

export function App() {
    const { user, showMessage, handleMessage } = useMessage();

    return (
        <div className="container">
            <OrdersContainer></OrdersContainer>
            <br></br>
            <hr></hr>
            <div>
                <h1>Mensagem</h1>
                <input type="text" placeholder="digite algo" onKeyDown={handleMessage}></input>
                {showMessage && <p>Olá {user}!</p>}
                <Counter></Counter>
            </div>
            <br></br>
            <hr></hr>
            <Timer></Timer>
        </div>
    );
}
