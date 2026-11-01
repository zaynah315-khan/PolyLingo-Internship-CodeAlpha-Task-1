import { Languages, Menu } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <Languages size={28} />
        <span>PolyLingo</span>
      </a>

      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#translator">Translator</a>
      </nav>

      <a href="#translator" className="header-button">
        Try it free
      </a>
    </header>
  );
}

export default Header;