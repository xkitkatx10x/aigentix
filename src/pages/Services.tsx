import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Settings } from "lucide-react";
const Services = () => {
  const services = [{
    title: "Automazione E-commerce",
    subtitle: "Ottimizza il tuo negozio online",
    description: "Trasforma il tuo e-commerce con sistemi di automazione avanzati che gestiscono inventario, ordini e customer service in modo intelligente.",
    benefits: ["Gestione automatica degli ordini", "Sincronizzazione inventario real-time", "Customer service automatizzato", "Analisi predittive delle vendite"],
    image: "photo-1531297484001-80022131f5a1"
  }, {
    title: "Chatbot Intelligenti",
    subtitle: "Assistenza clienti 24/7",
    description: "Implementa chatbot AI che forniscono supporto continuo ai tuoi clienti, riducendo i tempi di risposta e migliorando la soddisfazione.",
    benefits: ["Supporto clienti automatizzato", "Riduzione tempi di risposta", "Gestione FAQ automatica", "Integrazione multicanale"],
    image: "photo-1485827404703-89b55fcc595e"
  }, {
    title: "Automazione Social Media",
    subtitle: "Presenza online ottimizzata",
    description: "Automatizza la tua strategia social con pubblicazioni programmate, analisi del sentiment e engagement intelligente.",
    benefits: ["Pubblicazioni automatiche", "Analisi del sentiment", "Engagement personalizzato", "Report performance automatici"],
    image: "photo-1487058792275-0ad4aaf24ca7"
  }, {
    title: "Integrazione Sistemi",
    subtitle: "Connessioni seamless",
    description: "Collega tutti i tuoi strumenti aziendali in un ecosistema integrato che comunica e lavora in sincronia perfetta.",
    benefits: ["Connessione CRM e gestionali", "Sincronizzazione dati automatica", "Workflow ottimizzati", "Eliminazione lavoro duplicato"],
    image: "photo-1461749280684-dccba630e2f6"
  }];
  const integrations = ["Salesforce", "HubSpot", "Shopify", "WooCommerce", "Mailchimp", "Zapier", "Slack", "Microsoft Teams"];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-brand-blue-500 via-brand-blue-600 to-brand-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Settings className="w-12 h-12 text-white mr-4 animate-spin" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                I Nostri Servizi
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Soluzioni di automazione AI personalizzate per far crescere il tuo business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8">
                Scopri le Soluzioni
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:text-brand-blue-600 text-lg px-8 bg-orange-600 hover:bg-orange-500 text-slate-100">
                Consulenza Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => <section key={index} className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <h3 className="text-xl md:text-2xl text-brand-blue-600 font-semibold italic">
                  {service.subtitle}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefici principali:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-brand-orange-500 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
              
              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <img src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=600&q=80`} alt={service.title} className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-500/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>)}

      {/* Bonus Section - Integrazioni Smart */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Integrazioni Smart
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Le nostre soluzioni si integrano perfettamente con i software che già utilizzi, 
            creando un ecosistema tecnologico completo e senza interruzioni.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue-500 to-brand-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{integration}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-blue-600 to-brand-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto a Automatizzare il Tuo Business?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Inizia oggi stesso il tuo percorso verso l'automazione intelligente. 
            Prenota una consulenza gratuita e scopri come possiamo trasformare la tua azienda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Consulenza Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:text-brand-blue-600 text-lg px-8 py-3 bg-orange-600 hover:bg-orange-500 text-gray-50">
              Contattaci Ora
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;