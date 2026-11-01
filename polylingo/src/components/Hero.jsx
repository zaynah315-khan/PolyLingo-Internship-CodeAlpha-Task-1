 
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-label">
          BREAK LANGUAGE BARRIERS
        </span>

        <h1>
          Every word brings us <span>closer.</span>
        </h1>

        <p>
          Connect with the world through language.
          Translate your words easily with PolyLingo.
        </p>

        <a href="#translator" className="primary-button">
          Start translating <ArrowRight size={18} />
        </a>
      </div>

      <div className="hero-visual">
        <div className="globe-circle">
          <img
            src="/images/polylingo-hero.png"
            alt="PolyLingo world globe"
            className="hero-globe"
          />
        </div>

        <span className="floating-language">Hello!</span>
        <span className="floating-language second">Hola!</span>
        <span className="floating-language third">سلام!</span>
      </div>
    </section>
  );
}

export default Hero;
