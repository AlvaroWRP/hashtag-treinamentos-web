import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Empresa legal. Todos os direitos reservados.</p>
        </footer>
    );
}
