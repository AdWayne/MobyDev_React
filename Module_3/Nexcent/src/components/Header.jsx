import '../styles/Header.scss';
import * as Images from '../assets/img';
import styles from '../assets/css/Header.module.css';

function Header(){
    return (
        <header className={styles.header}>
            <img src={Images.Logo} alt="Logo" />
            <nav className={styles.nav}>
                <p className={styles.navItem}>Home</p>
                <p className={styles.navItem}>Service</p>
                <p className={styles.navItem}>Feature</p>
                <p className={styles.navItem}>Product</p>
                <p className={styles.navItem}>Testimonial</p>
                <p className={styles.navItem}>FAQ</p>
            </nav>
            <div className={styles['btn-div']}>
                <button className={styles.login}>Login</button>
                <button className={styles['sign-up']}>Sign up</button>
            </div>
        </header>
    )
}
export default Header;