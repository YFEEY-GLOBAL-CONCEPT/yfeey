import React from "react";
import {
  Eye,
  Hourglass,
  Network,
  Handshake as HandshakeIcon,
} from "lucide-react";

const valueItems = [
  {
    title: "Clarity",
    desc: "Eliminating noise to reveal the core purpose of every digital interaction.",
    icon: Eye,
  },
  {
    title: "Longevity",
    desc: "Engineering solutions that withstand the rapid decay of digital trends.",
    icon: Hourglass,
  },
  {
    title: "Structure",
    desc: "A rigid adherence to logical systems and architectural excellence.",
    icon: Network,
  },
  {
    title: "Partnership",
    desc: "Working as an extension of your team to ensure mutual transformation.",
    icon: HandshakeIcon,
  },
];

const AboutValues = () => {
  return (
    <section className="py-32 bg-deep-midnight/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h4 className="text-primary mb-4">Our Values</h4>
          <h2 className="text-white">Anchoring our creative output.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 border border-white/10 bg-white/5 rounded-2xl hover:border-white/20 transition-all duration-500"
              >
                <Icon className="w-10 h-10 text-primary mb-12" />
                <div>
                  <h3 className="text-white mb-4 uppercase tracking-widest text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
