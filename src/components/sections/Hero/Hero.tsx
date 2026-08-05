import { useEffect, useState } from 'react';
import { Container, Text } from '../../ui';
import styles from './Hero.module.css';
import logoColor from '../../../assets/images/LogoColor.png';

const text1 = `Eliminam les tasques repetitives 
que fan perdre hores al teu equip
perquè pugui dedicar-se 
al que realment aporta valor.`;

export function Hero() {
  const [displayed1, setDisplayed1] = useState('');
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed1(text1.slice(0, index));
      if (index >= text1.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowSecond(true);
        }, 500);
      }
    }, 26);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.copyBlock}>
            <Text as="p" className={styles.text1}>
              {displayed1}
            </Text>

            {showSecond && (
              <p className={styles.text2}>
                Perquè el negoci <span className={styles.italic}>flueïxi</span>.
              </p>
            )}
          </div>

          <div className={styles.logoWrapper}>
            <img src={logoColor} alt="SomFlow" className={styles.logo} />
          </div>
        </div>
      </Container>
    </section>
  );
}