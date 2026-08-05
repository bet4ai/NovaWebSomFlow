import { Container } from '../../ui';
import styles from './SoftwareBoundary.module.css';
import LogoColor from '../../../assets/images/LogoColor.png'; // ajusta el path

export function SoftwareBoundary() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.hero}>
            <h2 className={styles.title}>
              On acaba el teu software,
              <br />
              comença{' '}
              <span className={styles.logoWrapper}>
                <img
                  src={LogoColor}
                  alt="SomFlow"
                  className={styles.logo}
                />
              </span>
              .
            </h2>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <p className={styles.columnTitle}>No et demanam...</p>
              <ul className={styles.list}>
                <li>
                  <span className={styles.cross}>×</span>
                  <span>canviar d’ERP</span>
                </li>
                <li>
                  <span className={styles.cross}>×</span>
                  <span>migrar dades</span>
                </li>
                <li>
                  <span className={styles.cross}>×</span>
                  <span>formar tot l’equip</span>
                </li>
                <li>
                  <span className={styles.cross}>×</span>
                  <span>començar de zero</span>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <p className={styles.columnTitle}>En canvi...</p>
              <ul className={styles.list}>
                <li>
                  <span className={styles.check}>✓</span>
                  <span>aprofitam les eines que ja tens</span>
                </li>
                <li>
                  <span className={styles.check}>✓</span>
                  <span>connectam processos</span>
                </li>
                <li>
                  <span className={styles.check}>✓</span>
                  <span>eliminam la feina repetitiva</span>
                </li>
                <li>
                  <span className={styles.check}>✓</span>
                  <span>recuperam hores per al teu equip</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}