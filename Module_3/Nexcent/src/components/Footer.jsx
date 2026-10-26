import '../styles/Footer.scss';
import * as Images from '../assets/img';
import styles from '../assets/css/Footer.module.css';

function Footer() {
    return (
        <>
        <section className='text-on-footer'>
            <p className={styles['newsletter-title']}>Pellentesque suscipit<br></br>fringilla libero eu.</p>
            <button className='footer-btn'>Get a demo <img src={Images.right} alt="Right Arrow" /></button>
        </section>
        <footer className={styles.footer}>
                <div className={styles['company-info']}>
                    <img src={Images.Logofooter} alt="Company Logo" className={styles.logo} />
                    <p className={styles['copyright']}>Copyright © 2020 Nexcent ltd. <br /><br />All rights reserved.</p>
                    <div className={styles['social-icons']}>
                        <div className='round'><img src={Images.Instagram} alt="Instagram" /></div>
                        <div className='round'><img src={Images.Basket} alt="Basket" /></div>
                        <div className='round'><img src={Images.Twitter} alt="Twitter" /></div>
                        <div className='round'><img src={Images.Youtube} alt="Youtube" /></div>
                    </div>
                </div>

                <div className='company'>
                    <div className={styles['contact-container']}>
                        <p className={styles['contact-title']}>Company</p>
                        <div className={styles['contact-text']}>
                            <p>About us</p>
                            <p>Blog</p>
                            <p>Contact us</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                        </div>
                    </div>

                    <div className={styles['contact-container']}>
                        <p className={styles['contact-title']}>Support</p>
                        <div className={styles['contact-text']}>
                            <p>Help center</p>
                            <p>Terms of service</p>
                            <p>Legal</p>
                            <p>Privacy policy</p>
                            <p>Status</p>
                        </div>
                    </div>

                    <div className={styles['email-container']}>
                        <p className={styles['contact-title']}>Stay up to date</p>

                        <div className={styles['email-field']}>
                            <input className={styles.input} placeholder="Your email address" />
                            <button className={styles.sendBtn}>
                                <img src={Images.send} alt="Send" />
                            </button>
                        </div>
                    </div>
                </div>
        </footer>
        </>
    )
}
export default Footer;