import { Award, Users, Wrench } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Esperienza Professionale",
      description: "Team esperto pronto a trasformare i vostri spazi con risultati eccellenti e duraturi nel tempo.",
    },
    {
      icon: Wrench,
      title: "Materiali di Qualità",
      description: "Utilizziamo materiali di alta qualità e metodi di lavoro all'avanguardia per ogni progetto.",
    },
    {
      icon: Users,
      title: "Servizio Completo",
      description: "Dalla consulenza personalizzata alla realizzazione, vi accompagniamo in ogni fase del progetto.",
    },
  ];

  return (
    <section id="chi-siamo" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Chi Siamo</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            ColorBox è l'azienda di pittura e intonacatura a Locarno specializzata in un'ampia gamma di servizi di alta qualità.
            Il nostro obiettivo è soddisfare le vostre esigenze e superare le vostre aspettative, trasformando i vostri spazi in veri capolavori.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 text-center hover-lift">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
