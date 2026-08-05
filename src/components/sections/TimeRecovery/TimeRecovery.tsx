import { Container } from '../../ui';
import styles from './TimeRecovery.module.css';

export function TimeRecovery() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 className={styles.title}>D’on recuperam temps</h2>
            <p className={styles.subtitle}>
              Si és repetitiu, és una oportunitat per recuperar temps.
            </p>
          </header>

          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={`${styles.bar} ${styles.pink}`} />
              <h3 className={styles.cardTitle}>Documentació</h3>
              <p className={styles.cardLead}>Els documents circulen sols.</p>
              <p className={styles.cardBody}>
                Factures · Models tributaris · Notificacions · Arxiu
              </p>
            </article>

            <article className={styles.card}>
              <div className={`${styles.bar} ${styles.blue}`} />
              <h3 className={styles.cardTitle}>Comunicació</h3>
              <p className={styles.cardLead}>Els recordatoris es fan sols.</p>
              <p className={styles.cardBody}>
                Recordatoris · Nòmines · Requeriments · Seguiment
              </p>
            </article>

            <article className={styles.card}>
              <div className={`${styles.bar} ${styles.gold}`} />
              <h3 className={styles.cardTitle}>Control financer</h3>
              <p className={styles.cardLead}>Les dades són molt útils.</p>
              <p className={styles.cardBody}>
                Conciliació · Alertes · Detecció d'errors ·{' '}
                <span className={styles.highlight}>Evolució financera</span>
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}