import { FaHome, FaInfoCircle, FaAddressBook } from 'react-icons/fa';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Profiles list</h1>
            <nav className={styles.nav}>
                <a href="#home" className={styles.navLink}>
                    <FaHome></FaHome>
                    Home
                </a>
                <a href="#about" className={styles.navLink}>
                    <FaInfoCircle></FaInfoCircle>
                    About
                </a>
                <a href="#contact" className={styles.navLink}>
                    <FaAddressBook></FaAddressBook>
                    Contact
                </a>
            </nav>
        </header>
    );
}
