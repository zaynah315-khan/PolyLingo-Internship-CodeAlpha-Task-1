import { Languages, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Multiple Languages",
    description: "Translate between a variety of supported languages."
  },
  {
    icon: Zap,
    title: "Simple and Quick",
    description: "Get translations with a simple and easy interface."
  },
  {
    icon: Globe,
    title: "Connect Globally",
    description: "Make communication across languages easier."
  }
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-heading">
        <span>WHY POLYLINGO?</span>
        <h2>Communication made simple.</h2>
        <p>Everything you need for a smoother translation experience.</p>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={index}>
              <Icon size={30} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Features;