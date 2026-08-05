import { Container } from '../../ui';
import styles from './FlowOutcome.module.css';

export function FlowOutcome() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 className={styles.title}>
              Quan desapareix la <span>fricció</span>...
            </h2>
          </header>

          <div className={styles.diagram}>
            <div className={styles.logoWrap}>
              <img src="/assets/LogoColor.jpg" alt="SomFlow" className={styles.logo} />
            </div>

            <div className={styles.line} aria-hidden="true">
              <span className={`${styles.node} ${styles.node1}`} />
              <span className={`${styles.node} ${styles.node2}`} />
              <span className={`${styles.node} ${styles.node3}`} />
              <span className={`${styles.node} ${styles.node4}`} />
            </div>

            <article className={`${styles.card} ${styles.cardTopLeft}`}>
              <div className={`${styles.bar} ${styles.blue}`} />
              <h3 className={styles.cardTitle}>Recuperes temps</h3>
              <p className={styles.cardText}>
                El teu equip deixa de dedicar hores a tasques repetitives i les pot invertir en allò
                que fa créixer el negoci.
              </p>
            </article>

            <article className={`${styles.card} ${styles.cardBottomCenter}`}>
              <div className={`${styles.bar} ${styles.green}`} />
              <h3 className={styles.cardTitle}>Redueixes errors</h3>
              <p className={styles.cardText}>
                Els processos deixen de dependre de còpies manuals, correus o seguiments constants.
              </p>
            </article>

            <article className={`${styles.card} ${styles.cardTopRight}`}>
              <div className={`${styles.bar} ${styles.pink}`} />
              <h3 className={styles.cardTitle}>Escales sense<br />créixer en estructura</h3>
              <p className={styles.cardText}>
                La informació arriba quan la necessites i les decisions es prenen amb més confiança.
              </p>
            </article>

            <div className={styles.flowText}>
              apareix el <strong>flow.</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}