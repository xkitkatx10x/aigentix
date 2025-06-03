import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16" id="contatti">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-brand-orange-500">Algentix</h3>
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
                <span>Milano | Operiamo in tutta Italia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-orange-500 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-orange-500 transition-colors">Contatti</a></li>
              
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
          <p>&copy; 2024 Algentix. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;