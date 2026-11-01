 
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Translator from "./components/Translator";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <Translator />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <h2 className="footer-brand">PolyLingo.</h2>
            <p className="footer-description">
              Connecting people through language.
              Discover new ways to communicate with the world.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#translator">Translator</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Our purpose</h4>
            <p className="footer-description">
              Connecting people through languagegit status, one word at a time.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PolyLingo. All rights reserved.</p>
          <p>
            Crafted with care by <span>Zaynah Khan</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
