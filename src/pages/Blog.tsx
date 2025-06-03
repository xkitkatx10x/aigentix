import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  ChevronLeft,
  Filter,
  Calendar,
  User,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Dati di esempio per gli articoli del blog
  const blogPosts = [
    {
      id: 1,
      title: "Come l'AI sta rivoluzionando l'automazione dei processi aziendali",
      excerpt: "Scopri come l'intelligenza artificiale sta trasformando il modo in cui le aziende gestiscono i loro processi quotidiani.",
      category: "Intelligenza Artificiale",
      date: "15 Maggio 2024",
      author: "Marco Rossi",
      image: "photo-1518770660439-4636190af475",
      slug: "ai-automazione-processi-aziendali"
    },
    {
      id: 2,
      title: "5 strategie per implementare l'automazione nel tuo e-commerce",
      excerpt: "Guida pratica per integrare soluzioni di automazione nel tuo negozio online e aumentare l'efficienza operativa.",
      category: "E-commerce",
      date: "3 Maggio 2024",
      author: "Laura Bianchi",
      image: "photo-1563013544-824ae1b704d3",
      slug: "strategie-automazione-ecommerce"
    },
    {
      id: 3,
      title: "Chatbot AI: il futuro del customer service è già qui",
      excerpt: "Come i chatbot basati su intelligenza artificiale stanno trasformando l'assistenza clienti e migliorando l'esperienza utente.",
      category: "Customer Service",
      date: "28 Aprile 2024",
      author: "Giuseppe Verde",
      image: "photo-1531746790731-6c087fecd65a",
      slug: "chatbot-ai-customer-service"
    },
    {
      id: 4,
      title: "Automazione del marketing: strumenti e strategie per il 2024",
      excerpt: "Le migliori soluzioni per automatizzare le tue campagne marketing e ottenere risultati migliori con meno sforzo.",
      category: "Marketing",
      date: "15 Aprile 2024",
      author: "Sofia Neri",
      image: "photo-1460925895917-adbbd4accf0e",
      slug: "automazione-marketing-strumenti-strategie"
    },
    {
      id: 5,
      title: "Integrazione tra CRM e sistemi di automazione: guida completa",
      excerpt: "Come connettere il tuo CRM con i sistemi di automazione per creare un ecosistema aziendale efficiente e sincronizzato.",
      category: "CRM",
      date: "5 Aprile 2024",
      author: "Marco Rossi",
      image: "photo-1552664730-d307ca884978",
      slug: "integrazione-crm-automazione"
    },
    {
      id: 6,
      title: "Il futuro del lavoro: come l'automazione cambierà le professioni",
      excerpt: "Analisi dell'impatto dell'automazione sul mercato del lavoro e delle nuove competenze richieste nel prossimo decennio.",
      category: "Future Trends",
      date: "28 Marzo 2024",
      author: "Laura Bianchi",
      image: "photo-1486312338219-ce68d2c6f44d",
      slug: "futuro-lavoro-automazione"
    }
  ];

  // Categorie per i filtri
  const categories = ["Tutte le categorie", "Intelligenza Artificiale", "E-commerce", "Customer Service", "Marketing", "CRM", "Future Trends"];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-blue-600 transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-brand-blue-500 via-brand-blue-600 to-brand-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-white mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Il Nostro Blog
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Approfondimenti, news e innovazioni dal mondo dell'AI e dell'automazione aziendale
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Input 
                type="text" 
                placeholder="Cerca articoli..." 
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Filtra per:</span>
              </div>
              
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700">
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700">
                <option value="recent">Più recenti</option>
                <option value="oldest">Più vecchi</option>
                <option value="popular">Più popolari</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-orange-500 text-white hover:bg-brand-orange-600">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-brand-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-brand-blue-600 font-medium hover:text-brand-blue-700 transition-colors">
                    Leggi di più
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="w-9 h-9 p-0">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Pagina precedente</span>
              </Button>
              
              <Button variant="outline" size="sm" className="w-9 h-9 p-0 bg-brand-blue-600 text-white border-brand-blue-600">
                1
              </Button>
              
              <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                2
              </Button>
              
              <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                3
              </Button>
              
              <span className="text-gray-500">...</span>
              
              <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                8
              </Button>
              
              <Button variant="outline" size="icon" className="w-9 h-9 p-0">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Pagina successiva</span>
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rimani aggiornato</h2>
            <p className="text-lg text-gray-600 mb-8">
              Iscriviti alla nostra newsletter per ricevere i nostri ultimi articoli e aggiornamenti
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input 
                type="email" 
                placeholder="La tua email" 
                className="sm:w-64 md:w-80"
              />
              <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white">
                Iscriviti ora
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;