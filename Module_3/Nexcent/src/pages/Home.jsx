import * as Images from '../assets/img';
import styles from '../assets/css/Home.module.css';
//будем чисто на модулях

function Home() {
  return (
    <>
    <div className={styles.home}>
    <section className={styles.hero}>
      <div>
        <div className={styles.text}>
          <p className={styles.bigText}>Lessons and insights</p>
          <span>from 8 years</span><br /><br /><br />
          <p className={styles.littleText}>
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <button className={styles.sectionButton}>Register</button>
      </div>

      <div>
        <img src={Images.illustration} alt="Illustration" />
      </div>
    </section>

    <div className={styles.clients}>
    <div className={styles.what}>
      <p className={styles.title}>Our Clients</p>
      <p className={styles.littleText}>We have been working with some Fortune 500+ clients</p>
    </div>
    <div className={styles.logos}>
      <img src="/src/assets/img/logo (1).svg" alt="Logo" />
      <img src="/src/assets/img/logo (2).svg" alt="Logo" />
      <img src="/src/assets/img/logo (3).svg" alt="Logo" />
      <img src="/src/assets/img/logo (4).svg" alt="Logo" />
      <img src="/src/assets/img/logo (5).svg" alt="Logo" />
      <img src="/src/assets/img/logo (6).svg" alt="Logo" />
      <img src="/src/assets/img/logo (7).svg" alt="Logo" />
    </div>
    </div>


    <article>
      <div className={styles.what}>
      <p className={styles.title}>Manage your entire community <br />in a single system</p>
      <p className={styles.littleText}>Who is Nextcent suitable for?</p>
      </div>
      
      <div className={styles.cardscontainer}>
        <div className={styles.card}>
          <div className={styles.member}>
            <img src="/src/assets/img/Icon.svg" alt="Card 1" />
            <p>Membership Organisations</p>
          </div>
          <div className={styles.cardtext}>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
      </div>

      <div className={styles.card}>
          <div className={styles.member}>
            <img src="/src/assets/img/Icon (1).svg" alt="Card 1" />
            <p>National <br />Associations</p>
          </div>
          <div className={styles.cardtext}>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
      </div>

      <div className={styles.card}>
          <div className={styles.member}>
            <img src="/src/assets/img/Icon (2).svg" alt="Card 1" />
            <p>Clubs And <br />Groups</p>
          </div>
          <div className={styles.cardtext}>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
      </div>
      </div>

      
    </article>
    </div>
    </>
  );
}

export default Home;
