
import { useEffect, useState } from "react";
import "./App.css";

const services = [
  {
    number: "01",
    icon: "◉",
    title: "Wastewater Treatment",
    description:
      "Advanced treatment systems that transform wastewater into a resource worth recovering.",
    tag: "INDUSTRIAL · MUNICIPAL",
  },
  {
    number: "02",
    icon: "≈",
    title: "Water Reuse & Recycling",
    description:
      "Give every drop another purpose with intelligent recycling and reuse solutions.",
    tag: "CIRCULAR WATER",
  },
  {
    number: "03",
    icon: "✳",
    title: "Sewage Treatment Plants",
    description:
      "Reliable, efficient STPs designed for residential, commercial and urban environments.",
    tag: "END-TO-END SOLUTIONS",
  },
];

const steps = [
  {
    n: "01",
    title: "Understand",
    text: "We study your water, your needs and the environment around you.",
  },
  {
    n: "02",
    title: "Engineer",
    text: "Our team designs a treatment solution built for your specific challenges.",
  },
  {
    n: "03",
    title: "Transform",
    text: "We install, commission and optimise your water treatment system.",
  },
  {
    n: "04",
    title: "Regenerate",
    text: "Cleaner water returns to use, helping resources go further.",
  },
];

const treatmentStages = [
  {
    number: "01",
    name: "Screening",
    short: "Remove the obvious.",
    description:
      "Screens and grit chambers remove larger debris and sand before the water enters the main treatment process.",
    output: "Screened wastewater",
    icon: "▤",
    color: "#b5e8d5",
  },
  {
    number: "02",
    name: "Biological treatment",
    short: "Let biology do its work.",
    description:
      "Controlled biological processes help microorganisms break down biodegradable organic matter in wastewater.",
    output: "Biologically treated water",
    icon: "◌",
    color: "#8bdcc7",
  },
  {
    number: "03",
    name: "Clarification",
    short: "Separate and settle.",
    description:
      "Settling tanks allow suspended solids to separate from the water, helping clarify the treated flow.",
    output: "Clarified effluent",
    icon: "≋",
    color: "#77c8dc",
  },
  {
    number: "04",
    name: "Filtration & disinfection",
    short: "Refine the result.",
    description:
      "Where required, filtration and disinfection provide additional treatment to meet the intended reuse or discharge requirements.",
    output: "Treated water for evaluation",
    icon: "✳",
    color: "#a8c7ff",
  },
  {
    number: "05",
    name: "Reuse or discharge",
    short: "Give water its next purpose.",
    description:
      "Water quality is checked against applicable standards and the intended use before reuse or compliant discharge.",
    output: "Purpose-appropriate destination",
    icon: "↗",
    color: "#b5e8d5",
  },
];


function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        BUILDING A WATER-POSITIVE FUTURE
        <span className="announcement-divider">/</span>
        ENGINEERED FOR TOMORROW
      </div>

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-symbol">a<span>·</span></span>
          <span className="brand-word">
            aqua<span>vera</span>
            <small>WATER SYSTEMS, REIMAGINED</small>
          </span>
        </a>

        <button
          type="button"
          className="treatment-arrow"
          aria-label="Previous treatment stage"
          disabled={activeStage <= 0}
          onClick={() => setActiveStage(activeStage - 1)}
        >
          ←
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>Our approach</a>
          <a href="#services" onClick={closeMenu}>Solutions</a>
          <a href="#process" onClick={closeMenu}>How it works</a>
          <a href="#impact" onClick={closeMenu}>Our impact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="eyebrow-line" />
              THE NEXT ERA OF WATER
            </div>

            <h1>
              What if waste
              <br />
              was just <span className="serif-accent">water</span>
              <br />
              <span className="last-line">in the <span className="outlined">wrong</span> place?</span>
            </h1>

            <p className="hero-description">
              We engineer intelligent water and wastewater systems that
              turn today's environmental challenges into tomorrow's
              possibilities.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore our solutions <Arrow diagonal />
              </a>
              <a className="text-link" href="#about">
                Discover AQUAVERA <Arrow />
              </a>
            </div>

            <div className="hero-proof">
              <div className="proof-mark">✳</div>
              <div>
                <strong>Designed around every drop.</strong>
                <span>Thoughtful engineering. Lasting impact.</span>
              </div>
            </div>
          </div>


        <section className="facility-banner">
          <img
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1800&q=85"
            alt="Industrial infrastructure and engineering facility"
          />
          <div className="facility-overlay" />
          <div className="facility-content">
            <span className="facility-label">01 / ENGINEERED FOR THE REAL WORLD</span>
            <h2>Infrastructure that works.<br /><em>Water that goes further.</em></h2>
            <p>Purpose-built treatment systems for a world that can't afford to waste.</p>
            <a href="#services">EXPLORE OUR CAPABILITIES ↗</a>
          </div>
          <div className="facility-stamp">WATER<br />REIMAGINED<br /><span>EST. 2026</span></div>
        </section>


          <div className="hero-art" aria-label="Abstract water-inspired artwork">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-water">
              <div className="water-glow" />
              <div className="water-ripple ripple-one" />
              <div className="water-ripple ripple-two" />
              <div className="water-ripple ripple-three" />
              <div className="water-drop">a<span>·</span></div>
            </div>
            <div className="art-label art-label-top">
              <span className="label-dot" />
              WATER / REIMAGINED
            </div>
            <div className="art-label art-label-bottom">
              <span>H₂O</span>
              <span>THE CYCLE CONTINUES</span>
            </div>
            <div className="art-coordinate">28°36' N<br />77°12' E</div>
          </div>

          <div className="hero-bottom">
            <span>01 — A DIFFERENT WAY FORWARD</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
            <span>WATER IS A RESOURCE. ALWAYS.</span>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="section-kicker">A BETTER KIND OF INFRASTRUCTURE <span>✳</span></div>
          <div className="intro-grid">
            <h2>
              The future isn't
              <br />
              about using less.
              <br />
              It's about <span className="serif-dark">wasting nothing.</span>
            </h2>
            <div className="intro-copy">
              <p>
                Water is too important to be a one-time resource. Yet the
                systems that manage it have too often been an afterthought.
              </p>
              <p>
                AQUAVERA brings thoughtful engineering and modern treatment
                technology together, helping businesses and communities
                make every drop count.
              </p>
              <a href="#process" className="dark-link">
                OUR PHILOSOPHY <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="intro-foot">
            <span>BETTER SYSTEMS.</span>
            <span>BETTER WATER.</span>
            <span>A BETTER TOMORROW.</span>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div>
              <h2>Complex problems.<br /><span className="serif-accent">Clear solutions.</span></h2>
            </div>
            <p>
              From the first drop to the final discharge, we design
              water systems that work harder for people and the planet.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">{service.number} / 03</span>
                  <span className="service-icon">{service.icon}</span>
                </div>
                <div className="service-illustration">
                  <div className={`service-art service-art-${service.number}`}>
                    <span className="art-ring ring-a" />
                    <span className="art-ring ring-b" />
                    <span className="art-ring ring-c" />
                    <span className="art-core">{service.icon}</span>
                  </div>
                </div>
                <div className="service-tag">{service.tag}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link" aria-label={`Enquire about ${service.title}`}>
                  Explore solution <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>

        
        <section className="process-section treatment-section" id="process">
          <div className="treatment-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> INSIDE THE PROCESS
              </div>
              <h2>
                Every stage has
                <br />
                a <span className="serif-dark">purpose.</span>
              </h2>
            </div>
            <p>
              Wastewater treatment is a sequence of carefully engineered
              steps. Explore how each stage contributes to the bigger picture.
            </p>
          </div>

          <div className="treatment-explorer">
            <div className="treatment-visual">
              <div className="treatment-visual-top">
                <span>THE WATER JOURNEY</span>
                <span>STAGE {String(activeStage + 1).padStart(2, "0")} / 05</span>
              </div>

              <div className={`treatment-art treatment-art-${activeStage}`}>
                <div className="treatment-pipe pipe-left" />
                <div className="treatment-pipe pipe-right" />
                <div className="treatment-tank">
                  <div className="tank-water">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="tank-rim" />
                </div>
                <div className="treatment-particle particle-one" />
                <div className="treatment-particle particle-two" />
                <div className="treatment-particle particle-three" />
                <div className="treatment-stage-symbol">
                  {treatmentStages[activeStage].icon}
                </div>
              </div>

              <div className="treatment-visual-bottom">
                <span>ILLUSTRATIVE PROCESS DIAGRAM</span>
                <span>H₂O / AQUAVERA</span>
              </div>
            </div>

            <div className="treatment-detail">
              <span className="treatment-overline">
                STAGE {String(activeStage + 1).padStart(2, "0")}
              </span>
              <h3>{treatmentStages[activeStage].name}</h3>
              <h4>{treatmentStages[activeStage].short}</h4>
              <p>{treatmentStages[activeStage].description}</p>

              <div className="treatment-output">
                <span>STAGE OUTCOME</span>
                <strong>{treatmentStages[activeStage].output}</strong>
              </div>

              <div className="treatment-controls">
                <button
                  className="treatment-arrow"
                  aria-label="Previous treatment stage"
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage((s) => Math.max(0, s - 1))}
                >
                  ←
                </button>
                <div className="treatment-dots" aria-label="Choose treatment stage">
                  {treatmentStages.map((stage, index) => (
                    <button
                      key={stage.number}
                      className={`treatment-dot ${activeStage === index ? "active" : ""}`}
                      aria-label={`View stage ${stage.number}: ${stage.name}`}
                      aria-pressed={activeStage === index}
                      onClick={() => setActiveStage(index)}
                    />
                  ))}
                </div>
                <button
                  className="treatment-arrow"
                  aria-label="Next treatment stage"
                  disabled={activeStage === treatmentStages.length - 1}
                  onClick={() =>
                    setActiveStage((s) =>
                      Math.min(treatmentStages.length - 1, s + 1)
                    )
                  }
                >
                  →
                </button>
              </div>
              <span className="treatment-hint">
                SELECT A STAGE TO EXPLORE THE PROCESS
              </span>
            </div>
          </div>
        </section>


        <section className="impact-section" id="impact">
          <div className="impact-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> THE BIGGER PICTURE</div>
            <h2>
              Good engineering
              <br />
              leaves a <span className="serif-accent">lighter footprint.</span>
            </h2>
            <p>
              The measure of a water system isn't just what goes in or
              what comes out. It's the difference it makes along the way.
            </p>
            <a href="#contact" className="button button-light">
              Build something better <Arrow diagonal />
            </a>
          </div>

          <div className="impact-visual">
            <div className="impact-orbit impact-orbit-one" />
            <div className="impact-orbit impact-orbit-two" />
            <div className="impact-center">
              <span>H₂O</span>
              <small>ONE PLANET.<br />EVERY DROP.</small>
            </div>
            <div className="impact-caption">
              <span className="label-dot" />
              A MORE CIRCULAR WATER FUTURE
            </div>
          </div>
          <div className="impact-foot">
            <span>OUR AMBITION</span>
            <strong>Make responsible water management the natural choice.</strong>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-symbol">a<span>·</span></div>
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE</div>
          <h2>
            Let's make
            <br />
            <span className="serif-dark">every drop count.</span>
          </h2>
          <p>
            Have a project, a challenge, or a better idea for water?
            We'd love to hear what you're working on.
          </p>
          <a
            className="button button-dark"
            href="mailto:18ayushi.s@gmail.com?subject=AQUAVERA%20Project%20Enquiry"
          >
            Start a conversation <Arrow diagonal />
          </a>
          <span className="contact-note">BETTER WATER STARTS WITH A CONVERSATION.</span>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-symbol">a<span>·</span></span>
          <span className="brand-word">
            aqua<span>vera</span>
            <small>WATER SYSTEMS, REIMAGINED</small>
          </span>
        </a>
        <span>ENGINEERED FOR A BETTER TOMORROW.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <p>© 2026 AQUAVERA · CONCEPT WEBSITE CREATED FOR DESIGN EVALUATION</p>
      </footer>
    </div>
  );
}

export default App;
