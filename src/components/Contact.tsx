import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contatti" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="section-header">
          <h2 className="section-title">Contattaci</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="glass-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Indirizzo
                  </h3>
                  <p className="text-muted-foreground">
                    Via Alberto Franzoni 63<br />
                    6600 Solduno<br />
                    Svizzera
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Telefono
                  </h3>
                  <a
                    href="tel:+41786327590"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +41 78 632 75 90
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:colorboxpittura@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    colorboxpittura@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-display text-lg font-semibold mb-4">
                Richiedi un Preventivo
              </h3>
              <p className="text-muted-foreground mb-4">
                Contattateci per un preventivo personalizzato e una consulenza professionale.
              </p>
              <Button asChild className="w-full hover-lift">
                <a href="tel:+41786327590">
                  <Phone className="h-4 w-4 mr-2" />
                  Chiama Ora
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="glass-card overflow-hidden aspect-square md:aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.8!2d8.7795!3d46.168812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEwJzA3LjciTiA4wrA0Nic0Ni4yIkU!5e0!3m2!1sit!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa ColorBox Pittura"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
