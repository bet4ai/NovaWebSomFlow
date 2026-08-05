import { useState } from "react";
import {
  Button,
  Container,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import {
  Sparkles,
  Layers,
  Palette,
  CheckCircle2,
  ArrowRight,
  Layout,
  Component,
  Zap,
  Code,
  Sliders,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [activeTab, setActiveTab] = useState<"all" | "buttons" | "typography" | "tokens">("all");
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header / Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(252, 251, 247, 0.85)",
          borderBottom: "1px solid var(--color-border-subtle)",
        }}
      >
        <Container size="wide">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "4.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-brand-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <Sparkles size={20} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--color-brand-primary)",
                }}
              >
                NovaWebSomFlow
              </span>
            </div>

            <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <a
                href="#features"
                style={{
                  textDecoration: "none",
                  color: "var(--color-text-secondary)",
                  fontSize: "var(--text-small)",
                  fontWeight: 500,
                }}
              >
                Característiques
              </a>
              <a
                href="#showcase"
                style={{
                  textDecoration: "none",
                  color: "var(--color-text-secondary)",
                  fontSize: "var(--text-small)",
                  fontWeight: 500,
                }}
              >
                Components
              </a>
              <a
                href="#tokens"
                style={{
                  textDecoration: "none",
                  color: "var(--color-text-secondary)",
                  fontSize: "var(--text-small)",
                  fontWeight: 500,
                }}
              >
                Tokens
              </a>
              <Button size="sm" variant="primary">
                Començar
              </Button>
            </nav>
          </div>
        </Container>
      </header>

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Section variant="default" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <Container size="default">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "var(--radius-pill)",
                  backgroundColor: "var(--color-surface-secondary)",
                  border: "1px solid var(--color-border-subtle)",
                  marginBottom: "1.5rem",
                }}
              >
                <Zap size={16} color="var(--color-brand-accent)" />
                <Text variant="caption" weight="medium" color="secondary">
                  Sistema de Disseny Modulable & React + TypeScript
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Heading as="h1" size="hero" color="default" style={{ marginBottom: "1.5rem" }}>
                  Construït per a la màxima consistència i velocitat
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Text variant="lead" color="secondary" style={{ marginBottom: "2.5rem" }}>
                  Un entorn de desenvolupament modern basat en tokens de disseny, components reutilitzables i una arquitectura neta per a crear aplicacions web sorprenents.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}
              >
                <Button size="lg" variant="primary">
                  Explorar Components <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="outline">
                  <Code size={18} /> Documentació
                </Button>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Feature Grid Section */}
        <Section id="features" variant="muted">
          <Container size="wide">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Heading as="h2" size="h1" color="default" style={{ marginBottom: "1rem" }}>
                Arquitectura i Mòduls
              </Heading>
              <Text variant="lead" color="secondary">
                Descobreix la base tècnica corregida i optimitzada del teu projecte.
              </Text>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: Layout,
                  title: "Contenidors & Seccions",
                  desc: "Marge adaptatiu, amplada variable i variants de fons per estructurar qualsevol pàgina amb facilitat.",
                },
                {
                  icon: Component,
                  title: "Components Atomic UI",
                  desc: "Buttons, Headings i Text amb variants, mides i suports per accesibilitat i estils tipogràfics.",
                },
                {
                  icon: Sliders,
                  title: "Tokens Centralitzats",
                  desc: "Colors, tipografia, espaiat i ombres sincronitzats entre CSS variables i TypeScript.",
                },
                {
                  icon: Layers,
                  title: "Tailwind & Module CSS",
                  desc: "Integració d'utilitats fluid amb suport d'estils locals encapsulats.",
                },
                {
                  icon: Palette,
                  title: "Paleta Harmònica",
                  desc: "Colors corporatius elegants (#146243, #F6912C, #FCFBF7) per a una aparença premium.",
                },
                {
                  icon: CheckCircle2,
                  title: "100% Type-Safe",
                  desc: "Sense errors de TypeScript, configuració de paths alias (@/*) i integració total amb Vite.",
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      backgroundColor: "var(--color-surface-primary)",
                      padding: "2rem",
                      borderRadius: "var(--radius-lg)",
                      boxShadow: "var(--shadow-md)",
                      border: "1px solid var(--color-border-subtle)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--color-surface-secondary)",
                        color: "var(--color-brand-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                    <Heading as="h3" size="h3" color="default">
                      {item.title}
                    </Heading>
                    <Text variant="body" color="secondary">
                      {item.desc}
                    </Text>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Component Showcase Section */}
        <Section id="showcase" variant="default">
          <Container size="default">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <Heading as="h2" size="h1" color="brand" style={{ marginBottom: "1rem" }}>
                Demostració de Components
              </Heading>
              <Text variant="lead" color="secondary">
                Tots els components de la biblioteca `src/components/ui` funcionals i interconnectats.
              </Text>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                marginBottom: "3rem",
              }}
            >
              {(["all", "buttons", "typography", "tokens"] as const).map((tab) => (
                <Button
                  key={tab}
                  size="sm"
                  variant={activeTab === tab ? "primary" : "ghost"}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "all"
                    ? "Tots"
                    : tab === "buttons"
                    ? "Botons"
                    : tab === "typography"
                    ? "Tipografia"
                    : "Tokens"}
                </Button>
              ))}
            </div>

            {/* Buttons Showcase */}
            {(activeTab === "all" || activeTab === "buttons") && (
              <div
                style={{
                  backgroundColor: "var(--color-surface-secondary)",
                  padding: "2.5rem",
                  borderRadius: "var(--radius-lg)",
                  marginBottom: "2.5rem",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <Heading as="h3" size="h2" style={{ marginBottom: "1.5rem" }}>
                  Botons (`Button`)
                </Heading>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <Text variant="small" weight="semibold" color="muted" style={{ marginBottom: "0.75rem" }}>
                      Variants:
                    </Text>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="small" weight="semibold" color="muted" style={{ marginBottom: "0.75rem" }}>
                      Mides:
                    </Text>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                      <Button size="sm" variant="primary">
                        Petit (sm)
                      </Button>
                      <Button size="md" variant="primary">
                        Mitjà (md)
                      </Button>
                      <Button size="lg" variant="primary">
                        Gran (lg)
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Typography Showcase */}
            {(activeTab === "all" || activeTab === "typography") && (
              <div
                style={{
                  backgroundColor: "var(--color-surface-primary)",
                  padding: "2.5rem",
                  borderRadius: "var(--radius-lg)",
                  marginBottom: "2.5rem",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Heading as="h3" size="h2" style={{ marginBottom: "1.5rem" }}>
                  Tipografia (`Heading` & `Text`)
                </Heading>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <Heading as="h1" size="hero" color="brand">
                    Hero Heading (Larken / Plus Jakarta)
                  </Heading>
                  <Heading as="h2" size="h1" color="default">
                    Heading 1 - Títol Principal
                  </Heading>
                  <Heading as="h3" size="h2" color="default">
                    Heading 2 - Subtítol de Secció
                  </Heading>
                  <Heading as="h4" size="h3" color="muted">
                    Heading 3 - Muted Variant
                  </Heading>
                  <hr style={{ border: "none", borderTop: "1px solid var(--color-border-subtle)", margin: "1rem 0" }} />
                  <Text variant="lead" color="primary">
                    Lead Text: Paràgraf destacat per introduccions i resums importants d'una pàgina.
                  </Text>
                  <Text variant="body" color="secondary">
                    Body Text: Text estàndard de cos de pàgina configurat amb alçada de línia relaxada per a una millor llegibilitat.
                  </Text>
                  <Text variant="quote" color="brand">
                    “El disseny no és només com es veu o se sent. El disseny és com funciona.”
                  </Text>
                </div>
              </div>
            )}

            {/* Tokens Showcase */}
            {(activeTab === "all" || activeTab === "tokens") && (
              <div
                id="tokens"
                style={{
                  backgroundColor: "var(--color-surface-secondary)",
                  padding: "2.5rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <Heading as="h3" size="h2" style={{ marginBottom: "1rem" }}>
                  Tokens de Color
                </Heading>
                <Text variant="body" color="secondary" style={{ marginBottom: "1.5rem" }}>
                  Fes clic a qualsevol token per copiar la variable CSS al teu porta-retalls:
                </Text>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {[
                    { name: "--color-brand-primary", val: "#146243" },
                    { name: "--color-brand-secondary", val: "#689E62" },
                    { name: "--color-brand-accent", val: "#F6912C" },
                    { name: "--color-brand-warm", val: "#F6B22A" },
                    { name: "--color-brand-coral", val: "#EC5C44" },
                    { name: "--color-brand-sand", val: "#BDA686" },
                    { name: "--color-background-primary", val: "#FCFBF7" },
                    { name: "--color-background-secondary", val: "#F3EFE6" },
                  ].map((tok) => (
                    <button
                      key={tok.name}
                      onClick={() => handleCopy(`var(${tok.name})`)}
                      style={{
                        padding: "0.75rem",
                        backgroundColor: "var(--color-surface-primary)",
                        border: "1px solid var(--color-border-subtle)",
                        borderRadius: "var(--radius-md)",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        transition: "transform 0.15s ease",
                      }}
                    >
                      <div
                        style={{
                          height: "2.5rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: tok.val,
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      />
                      <Text variant="caption" weight="semibold" color="primary">
                        {tok.name}
                      </Text>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Text variant="caption" color="muted">
                          {tok.val}
                        </Text>
                        {copiedToken === `var(${tok.name})` && <Check size={14} color="var(--color-brand-primary)" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>

        {/* Inverse/Dark Section Showcase */}
        <Section variant="dark">
          <Container size="content">
            <div style={{ textAlign: "center" }}>
              <Heading as="h2" size="h1" color="inverse" style={{ marginBottom: "1.5rem" }}>
                Secció Inversa / Mode Fosc
              </Heading>
              <Text variant="lead" color="inverse" style={{ marginBottom: "2rem" }}>
                El component `Section` admet la variant `dark` adaptant automàticament els colors del text i fons.
              </Text>
              <Button size="lg" variant="secondary">
                Provar Variant Secundària
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--color-border-subtle)",
          backgroundColor: "var(--color-background-primary)",
          paddingBlock: "2rem",
        }}
      >
        <Container size="wide">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Text variant="small" color="muted">
              © {new Date().getFullYear()} NovaWebSomFlow. Projecte preparat i corregit.
            </Text>
            <Text variant="small" color="muted">
              Desenvolupat amb React 19 + TypeScript + Vite + Tailwind CSS
            </Text>
          </div>
        </Container>
      </footer>
    </div>
  );
}