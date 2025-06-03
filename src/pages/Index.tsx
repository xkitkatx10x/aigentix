import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Calendar, MessageCircle, FileText, RefreshCw, UserCheck, CheckCircle, Star, ArrowRight, Zap, Target, TrendingUp, Clock, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Index = () => {
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Automatizza. <br />
              <span className="text-yellow-300">Risparmia Tempo.</span> <br />
              Scala il Tuo Business.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Diamo potere alle aziende con automazioni intelligenti che eliminano attività ripetitive e fanno crescere l'efficienza. Tu pensa alla strategia, noi pensiamo ai processi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contatti">
                <Button size="lg" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  👉 Prenota una Consulenza Gratuita
                </Button>
              </Link>
              <Link to="/casi-studio">
                <Button variant="outline" size="lg" className="border-2 border-white hover:bg-white hover:text-brand-blue-900 px-8 py-4 text-lg rounded-xl text-slate-900">
                  🚀 Scopri cosa possiamo automatizzare per te
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="servizi">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Soluzioni su Misura per Ogni Reparto
            </h2>
            <div className="w-24 h-1 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "Schede Prodotto per E-commerce",
            description: "Generazione automatica con dati da file Excel, feed fornitori, o CMS.",
            color: "bg-blue-500"
          }, {
            icon: <Calendar className="w-8 h-8" />,
            title: "Gestione Social Media",
            description: "Pianificazione e pubblicazione automatica di post su più canali, senza stress.",
            color: "bg-purple-500"
          }, {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "Customer Service Automatizzato",
            description: "Risposte smart via email, WhatsApp, o chat integrata — 24/7, senza personale aggiuntivo.",
            color: "bg-green-500"
          }, {
            icon: <FileText className="w-8 h-8" />,
            title: "Reportistica Intelligente",
            description: "Creazione e invio automatico di report personalizzati da CRM, gestionale o fogli di calcolo.",
            color: "bg-red-500"
          }, {
            icon: <RefreshCw className="w-8 h-8" />,
            title: "Sincronizzazione Dati",
            description: "Connettori automatici tra e-commerce, gestionale, ERP, CRM, Google Sheet e altri strumenti.",
            color: "bg-indigo-500"
          }, {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Onboarding Clienti Automatizzato",
            description: "Da primo contatto a email di benvenuto, tutto senza intervento manuale.",
            color: "bg-teal-500"
          }].map((service, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className={`${service.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              I Vantaggi per la Tua Azienda
            </h2>
            <div className="w-24 h-1 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: <Clock className="w-12 h-12" />,
            title: "Risparmio di Tempo",
            description: "Automatizza le attività ripetitive e lascia il tuo team libero di concentrarsi su ciò che conta davvero."
          }, {
            icon: <CheckCircle className="w-12 h-12" />,
            title: "Meno Errori Umani",
            description: "Processi automatizzati = precisione costante, niente più errori di copia/incolla o dimenticanze."
          }, {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Scalabilità Reale",
            description: "Cresci senza dover assumere personale ogni volta che aumentano i volumi di lavoro."
          }, {
            icon: <Target className="w-12 h-12" />,
            title: "Maggiore Controllo",
            description: "Ogni azione è tracciata, ogni risultato è misurabile."
          }].map((benefit, index) => <div key={index} className="text-center group">
                <div className="text-brand-blue-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  ✅ {benefit.title}
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50" id="casi-studio">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Casi Reali. Risultati Tangibili.
            </h2>
            <div className="w-24 h-1 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[{
            type: "E-commerce",
            problem: "Inserimento manuale di 300 nuovi prodotti al mese.",
            solution: "Automazione collegata al listino fornitori > schede create automaticamente in 15 minuti.",
            result: "-90% di tempo operativo, + rapidità sul mercato.",
            gradient: "from-blue-500 to-purple-600"
          }, {
            type: "Agenzia Social",
            problem: "Pubblicazione manuale dei contenuti per 10 clienti.",
            solution: "Sistema di pubblicazione automatica e tracciamento engagement.",
            result: "+25% produttività del team, meno errori.",
            gradient: "from-purple-500 to-pink-600"
          }, {
            type: "Studio Commercialista",
            problem: "Invio mensile dei report ai clienti via email.",
            solution: "Report PDF auto-generati e inviati via email ogni primo del mese.",
            result: "0 tempo speso, clienti sempre aggiornati.",
            gradient: "from-green-500 to-teal-600"
          }].map((useCase, index) => <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${useCase.gradient} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-2">{useCase.type}</h3>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🔧</span>
                      <span className="font-semibold text-gray-900">Problema:</span>
                    </div>
                    <p className="text-gray-600">{useCase.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">🚀</span>
                      <span className="font-semibold text-gray-900">Soluzione:</span>
                    </div>
                    <p className="text-gray-600">{useCase.solution}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">💰</span>
                      <span className="font-semibold text-gray-900">Risultato:</span>
                    </div>
                    <p className="text-green-600 font-semibold">{useCase.result}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="chi-siamo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Chi ha già scelto di automatizzare con noi
            </h2>
            <div className="w-24 h-1 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "Grazie a loro abbiamo ridotto i tempi di inserimento prodotti da giorni a minuti. Un cambiamento che ci ha permesso di crescere senza aumentare i costi."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marco B.</p>
                    <p className="text-gray-600">CEO di un E-commerce Fashion</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "Pensavo che l'automazione fosse roba da grandi aziende tech. Invece oggi la usiamo ogni giorno. Non torneremmo mai indietro."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    L
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Laura P.</p>
                    <p className="text-gray-600">Founder agenzia marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Client Logos */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">Trusted by leading companies</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-semibold">Logo1</div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-semibold">Logo2</div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-semibold">Logo3</div>
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-semibold">Logo4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-900 via-brand-blue-600 to-brand-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Inizia a lavorare in modo più intelligente.
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Ti basta una consulenza gratuita per scoprire cosa possiamo automatizzare nella tua azienda.
          </p>
           
          <Link to="/contatti">
            <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              📩 Richiedi la Tua Consulenza Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Domande Frequenti
            </h2>
            <div className="w-24 h-1 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[{
            question: "È adatto anche alla mia azienda?",
            answer: "Sì, analizziamo i tuoi flussi e proponiamo soluzioni su misura, anche per realtà non digitalizzate."
          }, {
            question: "Quanto costa?",
            answer: "Dipende dalla complessità delle automazioni. Molte si ripagano da sole in poche settimane."
          }, {
            question: "Devo installare software?",
            answer: "No, tutto avviene online. Usiamo strumenti compatibili con le piattaforme più comuni."
          }, {
            question: "Serve formazione?",
            answer: "No, ti lasciamo una soluzione chiavi in mano pronta all'uso."
          }].map((faq, index) => <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <footer className="bg-gray-900 text-white py-16" id="contatti">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-brand-orange-500">AutomazioneAI</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Siamo un'agenzia specializzata in automazioni aziendali. Aiutiamo le imprese a eliminare attività ripetitive e ad aumentare l'efficienza operativa.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-brand-orange-500" />
                  <span>aigentixofficial@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-brand-orange-500" />
                  <span>Operiamo in tutta Italia</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Link Utili</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-brand-orange-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-orange-500 transition-colors">Contatti</a></li>
                
                <li><a href="#" className="hover:text-brand-orange-500 transition-colors">Lavora con noi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Seguici</h4>
              <div className="flex space-x-4">
                {/* Using placeholder icons since actual social icons might not be available */}
                <div className="w-10 h-10 bg-brand-blue-600 rounded-full flex items-center justify-center hover:bg-brand-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Li</span>
                </div>
                <div className="w-10 h-10 bg-brand-blue-600 rounded-full flex items-center justify-center hover:bg-brand-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Ig</span>
                </div>
                <div className="w-10 h-10 bg-brand-blue-600 rounded-full flex items-center justify-center hover:bg-brand-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Fb</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aigentix. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
