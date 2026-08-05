import { useEffect, useRef, useState } from 'react';
import { Container, Text } from '../../ui';
import styles from './Problems.module.css';

type ProblemItem = {
  icon: string;
  text: string;
  className: string;
};

const items: ProblemItem[] = [
  {
    icon: '↻',
    text: 'Passar dades\nd’una eina a una altra',
    className: styles.itemTopLeft,
  },
  {
    icon: '◔',
    text: 'Notificacions que\nningú vol gestionar',
    className: styles.itemTopCenter,
  },
  {
    icon: '◷',
    text: 'Esperar documentació\nque no arriba a temps',
    className: styles.itemTopRight,
  },
  {
    icon: '⌕',
    text: 'Perdre hores\ncercant un únic error',
    className: styles.itemBottomLeft,
  },
  {
    icon: '✉',
    text: 'Enviar el mateix correu\nuna vegada i una altra',
    className: styles.itemBottomCenter,
  },
  {
    icon: '▥',
    text: 'Els números hi són.\nLes respostes, no.',
    className: styles.itemBottomRight,
  },
];

export function Problems() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [visibleCount, setVisibleCount] = useState(0);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Scroll progress: repartim la secció en 6 trams
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // fora de viewport → cap element visible
      if (sectionBottom <= 0 || sectionTop >= windowHeight) {
        setVisibleCount(0);
        return;
      }

      const sectionHeight = rect.height;
      const scrollInside = windowHeight - sectionTop;
      const progressRaw = scrollInside / sectionHeight;
      const progress = Math.min(Math.max(progressRaw, 0), 1);

      const maxItems = items.length;
      const newVisibleCount = Math.floor(progress * (maxItems + 1));

      setVisibleCount(newVisibleCount);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Ajustar mida del canvas quan canvia viewport
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const el = sectionRef.current;
      if (!canvas || !el) return;

      const rect = el.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      lastPointRef.current = null;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const getRelativeCoords = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el || !canvasRef.current) return null;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };

  // Pintar línia contínua en moure el ratolí (sense click)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const canvas = canvasRef.current;
    const coords = getRelativeCoords(e);
    if (!canvas || !coords) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const last = lastPointRef.current;

    ctx.strokeStyle = 'rgb(255, 221, 214)'; // vermell soroll suau
    ctx.lineWidth = 6;                           // gruix de retolador
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    if (last) {
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(coords.x, coords.y);
    } else {
      ctx.moveTo(coords.x, coords.y);
      ctx.lineTo(coords.x, coords.y);
    }
    ctx.stroke();
    ctx.closePath();

    lastPointRef.current = coords;
  };

  const handleMouseLeave = () => {
    lastPointRef.current = null;
  };

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Canvas de fons per la traça */}
      <canvas ref={canvasRef} className={styles.trailCanvas} />

      <Container>
        <div className={styles.layout}>
          <h2 className={styles.title}>
            On van <span>les hores</span> del teu equip?
          </h2>

          <div className={styles.grid}>
            {items.map((item, index) => {
              const isVisible = index < visibleCount;

              return (
                <div
                  key={item.text}
                  className={`${styles.card} ${item.className} ${
                    isVisible ? styles.cardVisible : styles.cardHidden
                  }`}
                >
                  <div className={styles.iconWrap}>
                    <span className={styles.icon}>{item.icon}</span>
                  </div>
                  <Text as="p" className={styles.text}>
                    {item.text}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}