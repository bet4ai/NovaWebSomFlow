import { Container } from "../../ui/Container/Container";
import { Heading } from "../../ui/Heading/Heading";
import { Text } from "../../ui/Text/Text";
import { Button } from "../../ui/Button/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Auditoria de processos
          </div>
          
          <Heading as="h1" variant="hero" className={styles.title}>
            On acaba el teu software,<br />
            comença SomFlow. 
          </Heading>
          
          <Text variant="lead" className={styles.subtitle}>
            Eliminam les tasques repetitives que fan perdre hores al teu equip 
            perquè pugui dedicar-se al que realment aporta valor al negoci.
          </Text>
          
          <div className={styles.actions}>
            <Button variant="primary" size="large">
              Demana auditoria gratuïta
            </Button>
          </div>
          
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>+500h</span>
              <span className={styles.metricLabel}>recuperades/mes</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>-30%</span>
              <span className={styles.metricLabel}>reducció costos</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>2-4 set</span>
              <span className={styles.metricLabel}>temps implementació</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDot}></div>
              <span>Procés actual</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.processStep}>
                <span className={styles.stepNumber}>1</span>
                <span>Entenem el teu dia a dia</span>
              </div>
              <div className={styles.processStep}>
                <span className={styles.stepNumber}>2</span>
                <span>Detectam oportunitats</span>
              </div>
              <div className={styles.processStep}>
                <span className={styles.stepNumber}>3</span>
                <span>Implantam la solució</span>
              </div>
              <div className={styles.processStep}>
                <span className={styles.stepNumber}>4</span>
                <span>Milloram contínuament</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}