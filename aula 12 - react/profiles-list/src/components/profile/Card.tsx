import styles from './card.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Card({
    image,
    name,
    job,
    phone,
    email,
    github,
    linkedin,
    instagram,
    theme = 'female',
}) {
    return (
        <>
            <div className={styles.container}>
                <img src={image} className={styles.image}></img>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.info}>{job}</div>
                <div className={styles.info}>{phone}</div>
                <div className={styles.info}>{email}</div>
                <div className={styles.links}>
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferer"
                        className={`${styles.linkButton} ${
                            theme === 'male' ? styles.linkButtonMale : styles.linkButtonFemale
                        }`}
                    >
                        <FaGithub className={styles.icon} />
                        GitHub
                    </a>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferer"
                        className={`${styles.linkButton} ${
                            theme === 'male' ? styles.linkButtonMale : styles.linkButtonFemale
                        }`}
                    >
                        <FaLinkedin className={styles.icon} />
                        LinkedIn
                    </a>
                    <a
                        href={instagram}
                        target="_blank"
                        rel="noreferer"
                        className={`${styles.linkButton} ${
                            theme === 'male' ? styles.linkButtonMale : styles.linkButtonFemale
                        }`}
                    >
                        <FaInstagram className={styles.icon} />
                        Instagram
                    </a>
                </div>
            </div>
        </>
    );
}
