import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-narrow px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold mb-2">
              ColorBox Pittura
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Pittura e Intonacatura Professionale
            </p>
          </div>

          <div className="text-center md:text-right text-sm text-primary-foreground/70">
            <p className="flex items-center justify-center md:justify-end gap-2">
              Fatto con <Heart className="h-4 w-4 text-primary fill-primary" /> a Locarno
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} ColorBox Pittura. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
