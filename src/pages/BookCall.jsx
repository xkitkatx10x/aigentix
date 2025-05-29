import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const BookCall = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // qui puoi aggiungere l'invio a Formspree, email, backend ecc.
    alert("Call prenotata! Ti ricontatteremo a breve.");
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Prenota la tua Consulenza Gratuita
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Scopri come automatizzare i tuoi processi aziendali con l’intelligenza artificiale. Nessun impegno, solo valore.
        </p>
        <Button size="lg" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white">
          Prenota ora
        </Button>
      </section>

      {/* Info Section */}
      <section className="mt-20 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">📊 Analisi gratuita</h3>
          <p className="text-muted-foreground">Esaminiamo i tuoi flussi e identifichiamo cosa puoi automatizzare subito.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🧠 Consulenza personalizzata</h3>
          <p className="text-muted-foreground">Parla con un nostro esperto AI per idee pratiche e casi studio rilevanti.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🔗 Demo & Integrazioni</h3>
          <p className="text-muted-foreground">Mostriamo esempi reali e demo su misura per il tuo settore o tool.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="mt-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Compila il modulo e ti contattiamo noi</h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <Input name="name" placeholder="Nome e Cognome" value={form.name} onChange={handleChange} required />
          <Input name="email" placeholder="Email aziendale" value={form.email} onChange={handleChange} required />
          <Input name="company" placeholder="Nome Azienda (opzionale)" value={form.company} onChange={handleChange} />
          <Input name="industry" placeholder="Settore" value={form.industry} onChange={handleChange} required />
          <Textarea name="message" placeholder="Descrivi brevemente il tuo obiettivo..." value={form.message} onChange={handleChange} />
          <Button type="submit" className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white">
            Prenota la Call Gratuita
          </Button>
        </form>
      </section>
    </div>
  );
};

export default BookCall;
