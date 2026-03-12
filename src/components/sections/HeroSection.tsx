import { motion } from 'motion/react';
import { Linkedin, Instagram, Github, Workflow } from 'lucide-react';
import type { Lang, Translations } from '../../types';
import { SOCIAL_LINKS } from '../../constants/data';

interface HeroSectionProps {
    t: Translations;
    lang: Lang;
}

export function HeroSection({ t, lang }: HeroSectionProps) {
    return (
          <section
                  id="home"
                  className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-cinza-claro dark:bg-preto-azulado transition-colors duration-500"
                >
            {/* Background blobs */}
                <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azul-claro rounded-full blur-3xl opacity-30 dark:opacity-10 animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-azul-medio rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
                </div>div>
          
                <div className="max-w-5xl mx-auto text-center px-6">
                        <motion.div
                                    key={lang}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                  >
                                  <span className="inline-block py-1.5 px-4 rounded-full bg-azul-escuro text-azul-claro dark:bg-azul-claro dark:text-preto-azulado text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                    {t.hero.badge}
                                  </span>span>
                                  <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 uppercase text-preto-azulado dark:text-white">
                                    {t.hero.title}
                                              <span className="text-azul-medio">{t.hero.titleAccent}</span>span>
                                  </h1>h1>
                                  <p className="text-lg md:text-2xl text-azul-escuro dark:text-azul-claro max-w-3xl mx-auto mb-12 font-medium leading-tight">
                                    {t.hero.subtitle}
                                  </p>p>
                                  <div className="flex flex-wrap justify-center gap-6">
                                              <a
                                                              href={SOCIAL_LINKS.whatsapp}
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                              className="bg-cta-laranja text-preto-azulado px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
                                                            >
                                                {t.hero.cta} <Workflow size={18} />
                                              </a>a>
                                              <div className="flex gap-4 items-center">
                                                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-azul-escuro/10 dark:bg-azul-escuro/30 text-azul-escuro dark:text-azul-claro hover:bg-azul-escuro hover:text-white transition-all">
                                                                            <Linkedin size={22} />
                                                            </a>a>
                                                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-azul-escuro/10 dark:bg-azul-escuro/30 text-azul-escuro dark:text-azul-claro hover:bg-azul-escuro hover:text-white transition-all">
                                                                            <Instagram size={22} />
                                                            </a>a>
                                                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-azul-escuro/10 dark:bg-azul-escuro/30 text-azul-escuro dark:text-azul-claro hover:bg-azul-escuro hover:text-white transition-all">
                                                                            <Github size={22} />
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                        </motion.div>motion.div>
                </div>div>
          </section>section>
        );
}</section>
