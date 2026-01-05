import { Clock } from "lucide-react";

const openingHours = [
  { day: "Lunedì", hours: "07:00 - 18:00" },
  { day: "Martedì", hours: "07:00 - 18:00" },
  { day: "Mercoledì", hours: "07:00 - 18:00" },
  { day: "Giovedì", hours: "07:00 - 18:00" },
  { day: "Venerdì", hours: "07:00 - 18:00" },
  { day: "Sabato", hours: "07:00 - 18:00" },
  { day: "Domenica", hours: "Chiuso" },
];

const OpeningHours = () => {
  return (
    <section id="orari" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Orari di Apertura</h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="bg-primary/10 px-6 py-4 flex items-center gap-3 border-b border-border">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-display font-semibold text-lg">
                Quando Trovarci
              </span>
            </div>
            <div className="divide-y divide-border">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 flex justify-between items-center ${
                    item.hours.includes("Chiuso") ? "text-muted-foreground" : ""
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
