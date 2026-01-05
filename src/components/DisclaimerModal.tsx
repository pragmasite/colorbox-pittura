import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("disclaimer-dismissed");
    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("disclaimer-dismissed", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
            <AlertTriangle className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center font-display text-xl">
            Anteprima Bozza
          </DialogTitle>
          <DialogDescription className="text-center space-y-2 pt-2">
            <p>Questo sito web è un'anteprima bozza</p>
            <p>Non è indicizzato su Google</p>
            <p>Potrebbe contenere errori o imprecisioni</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button onClick={handleDismiss} className="px-8">
            Ho capito
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
