import { Paintbrush, Home, Building2, Flame, DoorOpen, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Pittura Industriale",
      description: "Gestiamo progetti di pittura su larga scala per ambienti industriali, garantendo protezione efficace e aspetto impeccabile.",
    },
    {
      icon: Layers,
      title: "Intonacatura e Cartongesso",
      description: "Lavori di intonacatura e installazione cartongesso per creare pareti lisce, uniformi, solide e durevoli.",
    },
    {
      icon: Home,
      title: "Pittura Interni ed Esterni",
      description: "Trasformiamo interni ed esterni con colori vivaci e finiture di alta qualità, personalizzate secondo le vostre preferenze.",
    },
    {
      icon: Paintbrush,
      title: "Ristrutturazione Facciate",
      description: "Ci occupiamo della ristrutturazione delle facciate, riparando eventuali danni e applicando rivestimenti protettivi.",
    },
    {
      icon: Flame,
      title: "Ristrutturazione Termica",
      description: "Soluzioni di ristrutturazione termica che migliorano l'efficienza energetica, riducendo i costi di riscaldamento e raffreddamento.",
    },
    {
      icon: DoorOpen,
      title: "Restauro e Verniciatura",
      description: "Restauro e verniciatura di porte, finestre, infissi, persiane, mobili e cucine in legno o metallo per un aspetto rinnovato.",
    },
  ];

  return (
    <section id="servizi" className="section-padding">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">I Nostri Servizi</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Offriamo una gamma completa di servizi professionali per soddisfare tutte le vostre esigenze di pittura, intonacatura e verniciatura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 hover-lift">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
