import styles from './navbar.module.scss';

export const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <img src='/FA.svg' alt='logo'/>

                <ul className={styles.navLinks}>
                    <li>About Me</li>
                    <li>My Projects</li>
                    <li>Experience</li>
                    <li>View my Resume</li>
                </ul>
            </div>
        </nav>
    )
}