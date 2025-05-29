
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MessageCircle, 
  TrendingDown, 
  Brain,
  Phone,
  ArrowRight,
  Quote,
  CheckCircle,
  Users,
  Smile
} from "lucide-react";

const TechSupportProCase = () => {
  const results = [
    {
      icon: Clock,
      metric: "–70%",
      description: "tempi medi di risposta",
      details: "Da 4 ore a 20 minuti per ticket"
    },
    {
      icon: Phone,
      metric: "24/7",
      description: "supporto attivo",
      details: "Senza aggiunta di personale"
    },
    {
      icon: TrendingDown,
      metric: "–40%",
      description: "carico sul team umano",
      details: "Più tempo per casi complessi"
    },
    {
      icon: Smile,
      metric: "+18",
      description: "punti NPS",
      details: "Maggiore soddisfazione cliente"
    }
  ];

  const challenges = [
    "Oltre 300 ticket al giorno da gestire",
    "Team di supporto sovraccarico",
    "Tempi di risposta troppo lunghi",
    "Mancanza di assistenza rapida nei weekend",
    "Clienti insoddisfatti per i ritardi"
  ];

  const solutions = [
    "Chatbot AI per primo livello supporto (FAQ e problemi ricorrenti)",
    "Smistamento intelligente dei ticket più complessi", 
    "Integrazione con WhatsApp Business e Gmail",
    "Connessione al sistema Help Desk esistente",
    "Automazione delle risposte standard"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-brand-blue-500 via-brand-blue-600 to-brand-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-white mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                TechSupport Pro
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4">
              Assistenza 24/7 senza espandere il team
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Automazione del customer service con chatbot AI intelligente.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                Servizi B2B - Customer Service
              </Badge>
              <Badge className="bg-brand-orange-500 text-white text-lg px-4 py-2">
                Customer Service Automatizzato
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              📊 Il Cliente
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80" 
                  alt="TechSupport Pro Overview" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">TechSupport Pro</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Azienda B2B specializzata in supporto tecnico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Oltre 300 ticket giornalieri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Team di 15 operatori</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Obiettivo: Ridurre tempi di risposta e alleggerire il carico del team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              🎯 La Sfida
            </h2>
            <Card className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                TechSupport Pro riceveva oltre 300 ticket al giorno. Il team di supporto era sovraccarico, 
                i tempi di risposta salivano e i clienti segnalavano mancanza di assistenza rapida nei weekend e fuori orario.
              </p>
              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              🚀 La Soluzione AIgentix
            </h2>
            <Card className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Abbiamo implementato un sistema di customer service automatizzato che ha trasformato 
                l'esperienza di supporto di TechSupport Pro.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              📈 Risultati Ottenuti
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <result.icon className="w-12 h-12 text-brand-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-green-600 mb-2">{result.metric}</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{result.description}</p>
                  <p className="text-sm text-gray-600">{result.details}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              💬 Testimonianza
            </h2>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-orange-50">
              <div className="text-center">
                <Quote className="w-12 h-12 text-brand-blue-600 mx-auto mb-6" />
                <blockquote className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                  "È come avere un nuovo team sempre sveglio. La qualità è aumentata, e anche il morale del nostro staff."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                    alt="Luca G." 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Luca G.</p>
                    <p className="text-gray-600">Direttore Operativo</p>
                    <p className="text-brand-blue-600 font-medium">TechSupport Pro</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-blue-600 to-brand-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vuoi migliorare il tuo customer service?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Scopri come possiamo automatizzare anche il supporto clienti della tua azienda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8">
              Parla con un esperto di automazioni
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue-600 text-lg px-8">
              Richiedi una demo gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechSupportProCase;
