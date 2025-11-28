import { GiPencil } from 'react-icons/gi';
import styles from './button.module.css';

export function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className={styles.button}>
            <GiPencil></GiPencil>
            {children}
        </button>
    );
}
