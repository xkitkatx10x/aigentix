
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  TrendingUp, 
  Zap, 
  RefreshCw,
  Building2,
  ArrowRight,
  Quote,
  CheckCircle,
  Link2,
  Clock
} from "lucide-react";

const LogisticaPlusCase = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "+85%",
      description: "efficienza gestione ordini",
      details: "Miglioramento complessivo del workflow"
    },
    {
      icon: Package,
      metric: "Zero",
      description: "errori di stock-out",
      details: "Nessun errore rilevato dopo 30 giorni"
    },
    {
      icon: Clock,
      metric: "–60%",
      description: "tempi di spedizione",
      details: "Riduzione significativa dei ritardi"
    },
    {
      icon: Link2,
      metric: "4 sistemi",
      description: "integrati seamlessly",
      details: "Connessione tra strumenti legacy"
    }
  ];

  const challenges = [
    "Gestione manuale ordini da e-commerce, CRM e marketplace",
    "Ritardi frequenti nelle spedizioni",
    "Errori di inventario e stock-out non previsti",
    "Mancanza di sincronizzazione tra sistemi",
    "Perdita di vendite per problemi operativi"
  ];

  const solutions = [
    "Sincronizzazione automatica tra CRM, gestionale magazzino e piattaforme e-commerce",
    "Aggiornamento stock in tempo reale su tutti i canali",
    "Sistema di notifiche automatiche per esaurimento scorte",
    "Automazione del workflow di gestione ordini",
    "Integrazione con 4 strumenti legacy esistenti"
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
              <Package className="w-12 h-12 text-white mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                LogisticaPlus
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4">
              Efficienza +85% con sincronizzazione ordini
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Gestione stock automatizzata tra CRM, magazzino e canali vendita.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                B2B - Logistica
              </Badge>
              <Badge className="bg-brand-orange-500 text-white text-lg px-4 py-2">
                Automazioni Personalizzate
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" 
                  alt="LogisticaPlus Overview" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">LogisticaPlus</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Azienda B2B specializzata in logistica e distribuzione</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Gestione ordini multi-canale (e-commerce, CRM, marketplace)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Magazzino con oltre 5.000 SKU</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Obiettivo: Ottimizzare integrazione sistemi e ridurre errori</span>
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
                LogisticaPlus gestiva manualmente gli ordini ricevuti da e-commerce, CRM e marketplace. 
                I ritardi e gli errori di inventario causavano ritardi nelle spedizioni e perdita di vendite.
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
                Abbiamo implementato un sistema di sincronizzazione automatica che ha trasformato 
                completamente il workflow operativo di LogisticaPlus.
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
                  "L'integrazione ha rivoluzionato il nostro flusso. Finalmente abbiamo controllo totale senza operazioni manuali."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1d?auto=format&fit=crop&w=100&q=80" 
                    alt="Silvia D." 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Silvia D.</p>
                    <p className="text-gray-600">Operations Manager</p>
                    <p className="text-brand-blue-600 font-medium">LogisticaPlus</p>
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
            Vuoi automatizzare il tuo sistema logistico?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Scopri come possiamo sincronizzare e ottimizzare anche i tuoi processi operativi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8">
              Scopri come automatizzare il tuo sistema
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue-600 text-lg px-8">
              Prenota una consulenza gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticaPlusCase;
