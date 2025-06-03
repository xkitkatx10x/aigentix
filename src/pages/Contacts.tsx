
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const Contacts = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();

  // Inizializza EmailJS
  emailjs.init('La04ezzEXL6UXkhf_');

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        'service_aju0xfc',
        'template_thw7g59',
        {
          from_name: data.name,
          to_email: 'aigentixofficial@gmail.com',
          from_email: data.email,
          company: data.company,
          phone: data.phone,
          message: data.message,
        },
        'La04ezzEXL6UXkhf_'
      );

      toast({
        title: "Messaggio inviato!",
        description: "Ti ricontatteremo entro 24 ore.",
      });
      reset();
    } catch (error) {
      console.error('Errore nell\'invio:', error);
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-blue-900 via-brand-blue-600 to-brand-blue-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Parliamo del tuo progetto
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
              Raccontaci le tue esigenze e scopriamo insieme come l'automazione può trasformare la tua azienda.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Richiedi la tua consulenza gratuita
                </h2>
                <p className="text-gray-600 mb-8">
                  Compila il form e ti ricontatteremo entro 24 ore per discutere delle tue esigenze di automazione.
                </p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome e Cognome *</Label>
                      <Input
                        id="name"
                        {...register("name", { required: "Nome obbligatorio" })}
                        className="mt-1"
                        placeholder="Mario Rossi"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Email obbligatoria",
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
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Azienda</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        className="mt-1"
                        placeholder="Nome Azienda"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefono</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className="mt-1"
                        placeholder="+39 123 456 7890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Descrivici il tuo progetto *</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Messaggio obbligatorio" })}
                      className="mt-1 min-h-[120px]"
                      placeholder="Raccontaci quali processi vorresti automatizzare, quali sono le tue sfide attuali e gli obiettivi che vuoi raggiungere..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white py-3"
                  >
                    Invia Richiesta
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Informazioni di contatto
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue-100 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">aigentixofficial@gmail.com</p>
                        <p className="text-sm text-gray-500">Ti risponderemo entro 4 ore</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue-100 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Telefono</h4>
                        <p className="text-gray-600">+39 02 1234 5678</p>
                        <p className="text-sm text-gray-500">Lun-Ven 9:00-18:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue-100 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sede</h4>
                        <p className="text-gray-600">Milano, Italia</p>
                        <p className="text-sm text-gray-500">Operiamo in tutta Italia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-blue-100 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Orari</h4>
                        <p className="text-gray-600">Lunedì - Venerdì</p>
                        <p className="text-sm text-gray-500">9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 rounded-xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Consulenza immediata?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Se hai un progetto urgente o vuoi parlare subito con un nostro esperto, prenota una call diretta.
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-white text-brand-orange-600 border-white hover:bg-gray-50"
                  >
                    Prenota Call Immediata
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Domande frequenti
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Alcune risposte alle domande più comuni sui nostri servizi di automazione.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Quanto tempo richiede un progetto di automazione?
                </h3>
                <p className="text-gray-600">
                  I tempi variano in base alla complessità. Automazioni semplici possono essere implementate in 1-2 settimane, progetti più articolati richiedono 4-6 settimane. Ti forniamo sempre una timeline dettagliata dopo l'analisi iniziale.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  L'automazione funziona con i nostri sistemi attuali?
                </h3>
                <p className="text-gray-600">
                  Sì, progettiamo le automazioni per integrarsi con i tuoi strumenti esistenti: CRM, e-commerce, gestionali, fogli Excel, Google Workspace e molti altri. Non dovrai cambiare i tuoi sistemi.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Cosa succede se qualcosa non funziona?
                </h3>
                <p className="text-gray-600">
                  Offriamo sempre un periodo di garanzia e supporto post-implementazione. Monitoriamo le automazioni e interveniamo rapidamente in caso di problemi. Il nostro obiettivo è che tutto funzioni perfettamente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;

const onSubmit = async (data: ContactFormData) => {
  try {
    await emailjs.send(
      'service_aju0xfc',
      'template_thw7g59',
      {
        from_name: data.name,
        to_email: 'aigentixofficial@gmail.com',
        from_email: data.email,
        company: data.company,
        phone: data.phone,
        message: data.message,
      },
      'La04ezzEXL6UXkhf_'
    );

    toast({
      title: "Messaggio inviato!",
      description: "Ti ricontatteremo entro 24 ore.",
    });
    reset();
  } catch (error) {
    toast({
      title: "Errore nell'invio",
      description: "Si è verificato un errore. Riprova più tardi.",
      variant: "destructive",
    });
  }
};
