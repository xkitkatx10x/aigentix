import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  ShoppingCart, 
  Building2, 
  Phone, 
  Megaphone, 
  FileText,
  ChevronRight,
  Star,
  ArrowRight
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "FastRetail",
      sector: "E-commerce",
      title: "Da 3 giorni a 3 minuti: gestione schede prodotto automatizzata",
      tags: ["Retail", "E-commerce"],
      result: "–72% tempo medio gestione",
      description: "Automatizzazione completa della creazione schede prodotto in 6 lingue con integrazione Shopify.",
      metrics: {
        time: "Da 72h a 8h",
        traffic: "+30% traffico SEO",
        integration: "Shopify + traduzioni automatiche"
      },
      link: "/casi-studio/fastretail"
    },
    {
      company: "TechSupport Pro",
      sector: "Customer Service",
      title: "Assistenza clienti 24/7 senza aumentare il personale",
      tags: ["Servizi B2B", "Customer Service"],
      result: "–70% tempi di risposta",
      description: "Implementazione chatbot AI per primo livello support con escalation automatica.",
      metrics: {
        response: "Da 4h a 20min",
        satisfaction: "+45% customer satisfaction",
        cost: "-50% costi operativi"
      },
      link: "/casi-studio/techsupportpro"
    },
    {
      company: "LogisticaPlus",
      sector: "B2B",
      title: "Sincronizzazione automatica inventario multi-canale",
      tags: ["B2B", "Logistica"],
      result: "+85% efficienza ordini",
      description: "Connessione CRM, magazzino e e-commerce per gestione automatica stock e ordini.",
      metrics: {
        errors: "-90% errori inventario",
        time: "Da 2h a 5min per ordine",
        revenue: "+25% ricavi"
      },
      link: "/casi-studio/logisticaplus"
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "CEO",
      company: "FastRetail",
      text: "Grazie ad AIgentix abbiamo ridotto i tempi di gestione del 80% senza aumentare il personale. È come avere un team in più.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Laura Bianchi",
      role: "Operations Manager",
      company: "TechSupport Pro",
      text: "I nostri clienti sono più soddisfatti e noi lavoriamo meglio. L'automazione ha trasformato il nostro business.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Giuseppe Verde",
      role: "Direttore Logistica",
      company: "LogisticaPlus",
      text: "Zero errori di inventario da 6 mesi. I nostri processi sono completamente ottimizzati.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const sectors = [
    { name: "E-commerce", icon: ShoppingCart, description: "Automatizzazione cataloghi e ordini" },
    { name: "Aziende B2B", icon: Building2, description: "Workflow e CRM integrati" },
    { name: "Customer Service", icon: Phone, description: "Supporto clienti 24/7" },
    { name: "Marketing", icon: Megaphone, description: "Campagne e social automation" },
    { name: "HR & Documentazione", icon: FileText, description: "Gestione documenti automatica" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-brand-blue-500 via-brand-blue-600 to-brand-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-white mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Automazioni che fanno la differenza
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Scopri come aziende come la tua hanno ridotto i costi, aumentato l'efficienza e scalato i risultati grazie alle nostre soluzioni su misura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8">
                Vuoi ottenere risultati simili?
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:text-brand-blue-600 text-lg px-8 bg-orange-600 hover:bg-orange-500 text-slate-100">
                Parla con un esperto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎯 Risultati reali, storie concrete
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-brand-blue-600">{study.company}</h3>
                    <Badge variant="outline" className="text-xs">{study.sector}</Badge>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 leading-tight">
                    {study.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-brand-orange-500 text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-bold text-lg">
                      {study.result}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  
                  {study.link ? (
                    <Link to={study.link}>
                      <Button className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white">
                        Scopri di più
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white">
                      Scopri di più
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                🚀 Caso di successo: FastRetail
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                FastRetail, un e-commerce moda con oltre 10.000 SKU, gestiva manualmente le schede prodotto. 
                Grazie ad AIgentix, ha automatizzato la creazione e pubblicazione dei contenuti in 6 lingue 
                con una riduzione del 80% del tempo e +30% di traffico organico.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Clock className="w-8 h-8 text-brand-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-brand-blue-600">Da 72h a 8h</p>
                  <p className="text-sm text-gray-600">tempo di gestione</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-bold text-green-600">+30% traffico SEO</p>
                  <p className="text-sm text-gray-600">crescita organica</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <Target className="w-8 h-8 text-brand-orange-500 mx-auto mb-2" />
                  <p className="font-bold text-brand-orange-500">6 lingue</p>
                  <p className="text-sm text-gray-600">automatizzate</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white">
                  Leggi la storia completa
                </Button>
                <Button size="lg" variant="outline" className="border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-50">
                  Prenota una consulenza
                </Button>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" 
                  alt="FastRetail Success Story" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-500/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            💬 Cosa dicono i nostri clienti
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-brand-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            🌍 Abbiamo automatizzato per...
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <sector.icon className="w-12 h-12 text-brand-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.name}</h3>
                <p className="text-sm text-gray-600">{sector.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white">
              Non trovi il tuo settore? Parliamone.
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-blue-600 to-brand-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Il prossimo caso studio potrebbe essere il tuo
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Basta processi ripetitivi. Costruiamo oggi la tua prossima automazione vincente.
          </p>
          
          <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Richiedi una demo personalizzata
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
