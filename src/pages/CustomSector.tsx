import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageSquare,
  Settings,
  Lightbulb,
  Users,
  Palette,
  Building,
  Leaf,
  Hammer,
  Home,
  HelpCircle
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
}

const CustomSector = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();

  const services = [
    {
      title: "Automazioni personalizzate",
      description: "Soluzioni su misura per le tue esigenze specifiche",
      icon: Settings
    },
    {
      title: "Analisi del flusso operativo",
      description: "Studio dettagliato dei tuoi processi aziendali",
      icon: Lightbulb
    },
    {
      title: "Prototipazione e test AI",
      description: "Sviluppo e test di soluzioni innovative",
      icon: MessageSquare
    },
    {
      title: "Assistenza al cambiamento",
      description: "Supporto continuo nell'implementazione",
      icon: Users
    }
  ];

  const sectors = [
    {
      name: "Associazioni culturali",
      description: "Gestione eventi, membership e comunicazione",
      icon: Palette
    },
    {
      name: "Aziende agricole",
      description: "Monitoraggio colture e automazione processi",
      icon: Leaf
    },
    {
      name: "Artigianato digitale",
      description: "Integrazione tra tradizione e innovazione",
      icon: Hammer
    },
    {
      name: "Studio di architettura",
      description: "Gestione progetti e collaborazione digitale",
      icon: Home
    }
  ];

  const faqs = [
    {
      question: "Lavorate anche con piccole aziende?",
      answer: "Sì, offriamo soluzioni scalabili adatte a ogni dimensione aziendale. Il nostro approccio si adatta alle tue esigenze e al tuo budget."
    },
    {
      question: "Come si struttura un progetto su misura?",
      answer: "Iniziamo con un'analisi dettagliata dei tuoi processi, definiamo insieme gli obiettivi e creiamo un piano d'azione personalizzato con milestone chiare."
    },
    {
      question: "Serve già avere dati o sistemi digitali?",
      answer: "No, possiamo partire da zero e guidarti nella digitalizzazione. Ti aiuteremo a scegliere e implementare gli strumenti più adatti."
    }
  ];

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Messaggio inviato!",
      description: "Ti contatteremo a breve per approfondire.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-brand-blue-500 via-brand-blue-600 to-brand-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Non trovi il tuo settore?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Ogni settore può essere trasformato con l'Intelligenza Artificiale. Raccontaci la tua realtà, troveremo insieme la soluzione giusta.
            </p>
            <Button 
              size="lg"
              className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Prenota una consulenza
            </Button>
          </div>
        </div>
      </section>

      {/* Come possiamo aiutarti */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Come possiamo aiutarti?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lavoriamo con realtà di ogni tipo, creando soluzioni su misura che si adattano perfettamente alle tue esigenze specifiche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-brand-blue-100 rounded-lg">
                    <service.icon className="w-8 h-8 text-brand-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Settori alternativi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Che tipo di settori alternativi trattiamo già
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-brand-orange-100 rounded-lg">
                    <sector.icon className="w-8 h-8 text-brand-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{sector.name}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modulo di contatto */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Parliamo del tuo progetto
              </h2>
              <p className="text-xl text-gray-600">
                Raccontaci la tua realtà e le sfide che affronti. Ti contatteremo per trovare insieme la soluzione migliore.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome e Cognome *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Campo obbligatorio" })}
                      className="mt-1"
                      placeholder="Mario Rossi"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company">Azienda/Settore *</Label>
                    <Input
                      id="company"
                      {...register("company", { required: "Campo obbligatorio" })}
                      className="mt-1"
                      placeholder="La tua azienda"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Campo obbligatorio",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Email non valida"
                        }
                      })}
                      className="mt-1"
                      placeholder="mario@azienda.it"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefono (opzionale)</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className="mt-1"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Descrivici la tua realtà e le sfide che affronti *</Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Campo obbligatorio" })}
                    className="mt-1 min-h-[150px]"
                    placeholder="Raccontaci del tuo settore, dei processi che vorresti automatizzare e degli obiettivi che vuoi raggiungere..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white py-3 text-lg"
                >
                  Invia Richiesta
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Domande frequenti
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-brand-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSector;