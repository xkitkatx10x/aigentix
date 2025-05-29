
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Lightbulb, Users, Shield, Rocket, Clock, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue-900 via-brand-blue-600 to-brand-blue-500 text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automatizziamo per <br />
              <span className="text-yellow-300">liberare il tuo potenziale.</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Siamo un'agenzia specializzata nella creazione di automazioni su misura per aziende che vogliono lavorare in modo più intelligente, efficiente e scalabile.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-lg text-yellow-200 font-medium">
                Il nostro lavoro inizia da una semplice domanda:
              </p>
              <p className="text-2xl font-bold text-white mt-2">
                Quante ore perdi ogni settimana su attività che potrebbero essere automatizzate?
              </p>
              <p className="text-lg text-blue-100 mt-4">
                Se la tua risposta è "troppe"… siamo qui per questo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-12 h-12 text-brand-orange-500 mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Cosa facciamo, in pratica?
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trasformiamo i tuoi flussi di lavoro ripetitivi in processi automatici, progettati per integrarsi perfettamente con i tuoi strumenti digitali. Senza complicazioni. Senza dover cambiare il tuo modo di lavorare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              "Creare automaticamente schede prodotto a partire da file Excel, gestionali o feed fornitori, pronte da pubblicare sul tuo e-commerce.",
              "Pianificare e pubblicare post sui social, sincronizzati con il calendario editoriale.",
              "Gestire il customer service con risposte automatiche via email, WhatsApp o live chat.",
              "Generare e inviare report mensili o settimanali da CRM, ERP o fogli di calcolo.",
              "Sincronizzare dati tra sistemi, eliminando doppi inserimenti e aggiornamenti manuali.",
              "Gestire il ciclo di onboarding dei clienti, dalla richiesta iniziale all'invio del contratto, tutto in automatico.",
              "Notificare il team quando succede qualcosa di importante: nuovi ordini, lead ricevuti, pagamenti effettuati."
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-brand-orange-100 text-brand-orange-800 px-6 py-4 rounded-xl inline-block">
              <p className="font-semibold text-lg">
                E ogni automazione che creiamo è personalizzata: niente soluzioni "standard", ma progetti cuciti su misura per la tua azienda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do It Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-brand-orange-500 mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Perché lo facciamo?
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Perché crediamo che il tempo sia la risorsa più preziosa che hai.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg border-l-4 border-l-brand-orange-500">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ogni ora passata su attività che un sistema può fare al posto tuo è un'ora persa su:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: <Target className="w-8 h-8" />, text: "strategia" },
                    { icon: <Users className="w-8 h-8" />, text: "relazioni con i clienti" },
                    { icon: <Zap className="w-8 h-8" />, text: "innovazione" },
                    { icon: <TrendingUp className="w-8 h-8" />, text: "crescita" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-brand-blue-500 mb-2 flex justify-center">
                        {item.icon}
                      </div>
                      <p className="font-semibold text-gray-900">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                La tecnologia giusta ti permette di fare di più, con meno. <br />
                Ma serve un partner che sappia davvero analizzare, progettare e costruire automazioni su misura. <br />
                <span className="font-semibold text-brand-blue-600">E questo è esattamente il nostro lavoro.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              🧩 Come lavoriamo
            </h2>
            <div className="w-24 h-1 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analisi dei tuoi processi",
                description: "Ti ascoltiamo. Studiamo come lavori oggi. Identifichiamo i punti critici e le attività ripetitive.",
                color: "bg-blue-500"
              },
              {
                step: "02",
                title: "Proposta di automazione",
                description: "Ti presentiamo una mappa chiara di ciò che si può automatizzare, con benefici concreti e misurabili.",
                color: "bg-purple-500"
              },
              {
                step: "03",
                title: "Sviluppo e integrazione",
                description: "Costruiamo l'automazione attorno ai tuoi strumenti attuali (sì, anche fogli Excel o gestionali vecchi!).",
                color: "bg-green-500"
              },
              {
                step: "04",
                title: "Test, monitoraggio e ottimizzazione",
                description: "Nulla viene lasciato al caso. Ogni flusso è testato, ottimizzato e facilmente scalabile nel tempo.",
                color: "bg-orange-500"
              }
            ].map((phase, index) => (
              <Card key={index} className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`${phase.color} text-white p-4`}>
                  <div className="text-3xl font-bold opacity-80">{phase.step}</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-brand-orange-500 mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                A chi ci rivolgiamo
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "E-commerce",
                description: "che vogliono risparmiare tempo e aumentare la precisione nella gestione del catalogo e degli ordini.",
                icon: "🛒"
              },
              {
                title: "Agenzie marketing",
                description: "che cercano efficienza nei flussi social e nella reportistica.",
                icon: "📈"
              },
              {
                title: "Studi professionali e team amministrativi",
                description: "che vogliono automatizzare la gestione dei documenti, delle email e dei clienti.",
                icon: "📋"
              },
              {
                title: "Startup e PMI tech",
                description: "che vogliono scalare rapidamente senza gonfiare il team.",
                icon: "🚀"
              }
            ].map((target, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{target.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{target.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{target.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-brand-blue-100 text-brand-blue-800 px-6 py-4 rounded-xl inline-block">
              <p className="font-semibold text-lg">
                Se hai dei processi digitali… noi possiamo automatizzarli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-brand-orange-500 mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Affidabilità. Trasparenza. Risultati.
              </h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Non siamo un software, non siamo un template, non siamo un corso. <br />
                  <span className="font-semibold">Siamo un team umano</span>, con competenze trasversali in:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "automazione",
                    "integrazione API",
                    "ottimizzazione dei flussi digitali",
                    "design dell'esperienza operativa"
                  ].map((skill, index) => (
                    <div key={index} className="bg-gray-100 p-3 rounded-lg text-center">
                      <p className="font-medium text-gray-800">{skill}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Parliamo il tuo linguaggio: ti spieghiamo tutto in modo chiaro, senza tecnicismi inutili.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ogni automazione viene costruita insieme a te, secondo i tuoi tempi e le tue priorità.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-900 via-brand-blue-600 to-brand-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-12 h-12 text-yellow-300 mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pronto a scoprire cosa possiamo automatizzare?
            </h2>
          </div>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Prenota una consulenza gratuita: ti mostriamo, in 30 minuti, come risparmiare ore ogni settimana.
          </p>
          <Button size="lg" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            👉 Prenota ora il tuo appuntamento
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
