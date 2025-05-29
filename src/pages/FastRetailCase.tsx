
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Globe, 
  TrendingUp, 
  Brain,
  ShoppingCart,
  ArrowRight,
  Quote,
  CheckCircle
} from "lucide-react";

const FastRetailCase = () => {
  const results = [
    {
      icon: Clock,
      metric: "–72%",
      description: "tempo medio di gestione",
      details: "Da 3 giorni a 3 minuti per scheda prodotto"
    },
    {
      icon: Globe,
      metric: "6 lingue",
      description: "pubblicazione automatica",
      details: "Italiano, inglese, francese, spagnolo, tedesco, portoghese"
    },
    {
      icon: TrendingUp,
      metric: "+30%",
      description: "traffico organico",
      details: "Crescita SEO nei primi 60 giorni"
    },
    {
      icon: Brain,
      metric: "100%",
      description: "coerenza SEO",
      details: "Ottimizzazione automatica in tutto il catalogo"
    }
  ];

  const challenges = [
    "Gestione manuale di oltre 10.000 prodotti",
    "3 giorni alla settimana dedicati alla creazione schede",
    "Errori frequenti e incoerenza tra le descrizioni",
    "Traduzione costosa e lenta in 6 lingue",
    "Scarsa ottimizzazione SEO"
  ];

  const solutions = [
    "Automatizzazione completa generazione schede prodotto",
    "Integrazione diretta con Shopify per pubblicazione automatica", 
    "Traduzione automatica multilingua ottimizzata",
    "Ottimizzazione SEO automatica per ogni prodotto",
    "Sistema di controllo qualità automatico"
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
              <ShoppingCart className="w-12 h-12 text-white mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                FastRetail
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4">
              Da 3 giorni a 3 minuti
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Automazione schede prodotto in 6 lingue. Più visibilità, meno lavoro manuale.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                Retail - E-commerce
              </Badge>
              <Badge className="bg-brand-orange-500 text-white text-lg px-4 py-2">
                Automazione Schede Prodotto
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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                  alt="FastRetail Overview" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">FastRetail</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">E-commerce moda con oltre 10.000 SKU</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Presenza in 6 mercati europei</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Team di 25 persone</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Obiettivo: Ottimizzare gestione catalogo e aumentare SEO</span>
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
                FastRetail gestiva un catalogo con oltre 10.000 prodotti, in continuo aggiornamento. 
                Il team dedicava in media 3 giorni alla settimana alla creazione manuale di schede in 6 lingue, 
                con errori frequenti e poca coerenza SEO.
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
                Abbiamo implementato un sistema di automazione completo che ha trasformato 
                il processo di gestione del catalogo prodotti di FastRetail.
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
                  "Prima perdevamo tempo e opportunità. Ora le schede si generano da sole e sono migliori di quelle fatte a mano."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1d?auto=format&fit=crop&w=100&q=80" 
                    alt="Marta F." 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Marta F.</p>
                    <p className="text-gray-600">Head of E-commerce</p>
                    <p className="text-brand-blue-600 font-medium">FastRetail</p>
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
            Vuoi risultati simili per il tuo e-commerce?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Scopri come possiamo automatizzare anche la gestione del tuo catalogo prodotti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8">
              Prenota una consulenza gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue-600 text-lg px-8">
              Scopri cosa possiamo fare per il tuo e-commerce
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastRetailCase;
