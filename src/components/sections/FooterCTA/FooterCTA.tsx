import styles from './FooterCTA.module.css';
import logoColor from '../../../assets/images/LogoColor.png';

export function FooterCTA() {
  const year = new Date().getFullYear();

  return (
    <section id="contacte" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.title}>
            Comencem per un procés.
            <br />
            Sense compromisos.
          </h2>
          <p className={styles.subtitle}>
            Ens reunim per entendre el teu dia a dia i identifiquem junts
            on pots recuperar temps des del primer moment.
          </p>
        </div>

        <div className={styles.actions}>
          <a
            href="mailto:hola@somflow.com"
            className={styles.ctaPrimary}
          >
            Parlem
          </a>
          <button className={styles.ctaSecondary} type="button">
            O escriu-nos directament
          </button>
        </div>

        <hr className={styles.divider} />

        <div className={styles.footer}>
          <img
            src={logoColor}
            alt="SomFlow"
            className={styles.logo}
          />
          <p className={styles.legal}>
            © {year} SomFlow. Tots els drets reservats.
          </p>
        </div>
      </div>
    </section>
  );
}
