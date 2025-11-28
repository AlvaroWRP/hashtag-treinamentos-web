import { OrderAction } from '../orderAction/OrderAction';
import styles from './order.module.css';
import { GiKnifeFork } from 'react-icons/gi';

export function Order({ table, client, items }) {
    const popup = () => {
        alert(`Clicou no botão da mesa ${table}`);
    };

    return (
        <div className={styles.item}>
            <p className={styles.text}>
                <GiKnifeFork className={styles.icon}></GiKnifeFork>
                <strong>Table {table}</strong> - {client}: {items}
            </p>
            <OrderAction editBehaviour={popup}></OrderAction>
        </div>
    );
}
