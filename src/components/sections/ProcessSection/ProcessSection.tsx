import { Container } from '../../ui';
import styles from './ProcessSection.module.css';

export function ProcessSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 className={styles.title}>
              Començam per <span>un procés concret</span>, no per una demo genèrica.
            </h2>
            <div className={styles.cross} aria-hidden="true">
              <span />
              <span />
            </div>
          </header>

          <div className={styles.grid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.number}>1.</span> Entenem el teu dia a dia
              </h3>
              <p className={styles.cardText}>
                Ens reunim amb tu per entendre l'equip i detectar on es perd més temps.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.number}>2.</span> Detectam les oportunitats
              </h3>
              <p className={styles.cardText}>
                Identificam els processos repetitius i prioritzam per on començar.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.number}>3.</span> Implantam la solució
              </h3>
              <p className={styles.cardText}>
                Connectam les eines que ja utilitzes o desenvolupam la peça que falta.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.number}>4.</span> Milloram contínuament
              </h3>
              <p className={styles.cardText}>
                Mesuram els resultats, ajustam els processos i continuam recuperant temps.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}