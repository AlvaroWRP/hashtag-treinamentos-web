import styles from './ordersContainer.module.css';
import { OrdersList } from '../orders-list/OrdersList';

export function OrdersContainer() {
    return (
        <div className={styles.containerArea}>
            <h1 className={styles.title}>Today's orders</h1>
            <OrdersList></OrdersList>
        </div>
    );
}
