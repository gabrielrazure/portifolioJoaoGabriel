import { Linkedin, Instagram, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants/data';

export function Footer() {
    return (
          <footer className="py-20 px-6 bg-preto-azulado dark:bg-preto-azulado border-t border-azul-escuro/30 text-white transition-colors duration-500">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                        <span className="font-black text-3xl tracking-tighter text-azul-claro">JOÃO GABRIEL.</span>span>
                
                        <div className="flex gap-8">
                                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-azul-medio hover:text-azul-claro transition-colors">
                                              <Linkedin size={24} />
                                  </a>a>
                                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-azul-medio hover:text-azul-claro transition-colors">
                                              <Instagram size={24} />
                                  </a>a>
                                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-azul-medio hover:text-azul-claro transition-colors">
                                              <Github size={24} />
                                  </a>a>
                        </div>div>
                
                        <p className="text-azul-medio text-[10px] font-black uppercase tracking-widest">
                                  © {new Date().getFullYear()} João Gabriel • n8n Specialist
                        </p>p>
                </div>div>
          </footer>footer>
        );
}</footer>
