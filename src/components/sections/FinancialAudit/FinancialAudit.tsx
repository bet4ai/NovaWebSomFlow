import { Container } from '../../ui';
import styles from './FinancialAudit.module.css';
import { ArrowRight, Search, BarChart3, Lightbulb } from 'lucide-react';

export function FinancialAudit() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          {/* Fletxa lateral */}
          <div className={styles.arrow} aria-hidden="true">
            <ArrowRight className={styles.arrowIcon} />
          </div>

          <header className={styles.header}>
            <h2 className={styles.title}>
              No només automatitzam processos.
              <br />
              També generam criteri.
            </h2>

            <p className={styles.subtitle}>
              L'<span className={styles.highlight}>Auditoria d'Evolució Financera</span> revisa automàticament
              la comptabilitat, detecta incidències i converteix les dades en informació útil per
              prendre millors decisions.
            </p>
          </header>

          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.iconWrap}>
                <Search className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Revisa</h3>
                <p className={styles.itemText}>
                  Detecta errors, desviacions i incidències abans que siguin un problema.
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconWrap}>
                <BarChart3 className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Interpreta</h3>
                <p className={styles.itemText}>
                  Analitza la rendibilitat, la caixa i l'evolució del negoci.
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconWrap}>
                <Lightbulb className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Recomana</h3>
                <p className={styles.itemText}>
                  Genera alertes i informació útil perquè puguis prendre millors decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}