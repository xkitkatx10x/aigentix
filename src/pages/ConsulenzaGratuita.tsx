import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { 
  Rocket,
  Target,
  Zap,
  LineChart,
  Clock,
  CheckCircle,
  Users,
  MessageSquare
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ConsultationFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  objectives: string;
}

const ConsulenzaGratuita = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsultationFormData>();
  const { toast } = useToast();

  const benefits = [
    {
      title: "Analisi Personalizzata",
      description: "Valutiamo le tue esigenze specifiche e identifichiamo le opportunità di automazione",
      icon: Target
    },
    {
      title: "Soluzioni su Misura",
      description: "Progettiamo strategie di automazione AI adatte al tuo business",
      icon: Rocket
    },
    {
      title: "ROI Garantito",
      description: "Massimizziamo il ritorno sull'investimento attraverso l'efficienza operativa",
      icon: LineChart
    },
    {
      title: "Implementazione Rapida",
      description: "Attiviamo le soluzioni in tempi brevi per risultati immediati",
      icon: Zap
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consulenza Iniziale",
      description: "30 minuti di analisi gratuita delle tue esigenze",
      icon: MessageSquare
    },
    {
      number: 2,
      title: "Piano d'Azione",
      description: "Proposta dettagliata con soluzioni e tempistiche",
      icon: Target
    },
    {
      number: 3,
      title: "Implementazione",
      description: "Realizzazione rapida e supporto continuo",
      icon: Rocket
    }
  ];

  const onSubmit = (data: ConsultationFormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo entro 24 ore per fissare la consulenza.",
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
              Trasforma il Tuo Business con l'AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Scopri come l'automazione intelligente può ottimizzare i tuoi processi e aumentare la produttività. Prenota ora la tua consulenza gratuita.
            </p>
            <Button 
              size="lg"
              className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Prenota Ora
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perché Scegliere la Nostra Consulenza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un team di esperti al tuo fianco per guidarti nel processo di trasformazione digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-brand-blue-100 rounded-lg">
                    <benefit.icon className="w-8 h-8 text-brand-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Come Funziona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processo semplice e trasparente per iniziare la tua trasformazione digitale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 relative hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div className="flex flex-col items-center text-center space-y-4 pt-4">
                  <div className="p-3 bg-brand-orange-100 rounded-lg">
                    <step.icon className="w-8 h-8 text-brand-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="consultation-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prenota la Tua Consulenza Gratuita
              </h2>
              <p className="text-xl text-gray-600">
                Compila il form e sarai ricontattato entro 24 ore per programmare la tua sessione di consulenza gratuita
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
                    <Label htmlFor="company">Azienda *</Label>
                    <Input
                      id="company"
                      {...register("company", { required: "Campo obbligatorio" })}
                      className="mt-1"
                      placeholder="Nome Azienda"
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
                  <Label htmlFor="objectives">Obiettivi principali *</Label>
                  <Textarea
                    id="objectives"
                    {...register("objectives", { required: "Campo obbligatorio" })}
                    className="mt-1 min-h-[150px]"
                    placeholder="Descrivi brevemente i processi che vorresti automatizzare e gli obiettivi che vuoi raggiungere..."
                  />
                  {errors.objectives && (
                    <p className="text-red-500 text-sm mt-1">{errors.objectives.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white py-3 text-lg"
                >
                  Richiedi Consulenza Gratuita
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-brand-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24h</h3>
              <p className="text-gray-600">Tempo di Risposta</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-brand-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Soddisfazione Clienti</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-brand-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Clienti Soddisfatti</p>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="w-12 h-12 text-brand-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">90%</h3>
              <p className="text-gray-600">Aumento Efficienza</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsulenzaGratuita;