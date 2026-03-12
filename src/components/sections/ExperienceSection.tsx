import { motion } from 'motion/react';
import { Cpu, Workflow, Send } from 'lucide-react';
import type { Lang, Translations } from '../../types';
import { SOCIAL_LINKS } from '../../constants/data';

interface ExperienceSectionProps {
    t: Translations;
    lang: Lang;
}

export function ExperienceSection({ t, lang }: ExperienceSectionProps) {
    return (
          <section
                  id="experience"
                  className="section-padding bg-azul-claro/10 dark:bg-preto-azulado/50 transition-colors duration-500"
                >
                <div className="max-w-5xl mx-auto">
                  {/* Section Header */}
                        <div className="mb-20">
                                  <div className="flex items-center gap-2 text-azul-medio mb-4">
                                              <Cpu size={16} />
                                              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t.experience.badge}</span>
                                  </div>
                                  <h2 className="text-6xl font-black uppercase tracking-tighter leading-none text-preto-azulado dark:text-white">
                                    {t.experience.title}
                                  </h2>
                        </div>
                
                  {/* Experience Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                          {t.experience.topics.map((topic, index) => (
                              <motion.div
                                              key={`${lang}-${index}`}
                                              initial={{ opacity: 0, y: 20 }}
                                              whileInView={{ opacity: 1, y: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ delay: index * 0.1 }}
                                              className="bg-white dark:bg-preto-azulado p-10 rounded-[2.5rem] border border-azul-claro/30 dark:border-azul-escuro/50 hover:border-azul-medio/50 transition-all hover:shadow-xl"
                                            >
                                            <div className="flex items-start justify-between mb-8">
                                                            <div className="w-14 h-14 bg-preto-azulado dark:bg-azul-escuro rounded-2xl flex items-center justify-center text-cta-laranja">
                                                                              <Workflow size={24} />
                                                            </div>
                                                            <span className="text-[10px] font-black px-4 py-2 bg-azul-claro/20 dark:bg-azul-escuro/30 rounded-full text-azul-escuro dark:text-azul-claro">
                                                              {topic.period}
                                                            </span>
                                            </div>
                                            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-preto-azulado dark:text-white">
                                              {topic.title}
                                            </h3>
                                            <p className="text-azul-medio font-bold text-xs mb-6 uppercase tracking-widest">{topic.company}</p>
                                            <p className="text-azul-escuro dark:text-azul-claro mb-8 leading-relaxed font-medium">
                                              {topic.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                              {topic.tags.map((tag) => (
                                                                <span key={tag} className="text-[10px] font-black uppercase tracking-[0.15em] text-preto-azulado dark:text-azul-claro">
                                                                                    • {tag}
                                                                </span>
                                                              ))}
                                            </div>
                              </motion.div>
                            ))}
                        </div>
                
                  {/* CTA Banner */}
                        <motion.div
                                    key={`cta-${lang}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="mt-12 p-10 bg-preto-azulado dark:bg-azul-escuro rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
                                  >
                                  <div>
                                              <h3 className="text-2xl font-black uppercase mb-2 text-azul-claro">{t.cta.title}</h3>
                                              <p className="text-azul-medio dark:text-azul-claro font-medium">{t.cta.subtitle}</p>
                                  </div>
                                  <a
                                                href={SOCIAL_LINKS.whatsapp}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-cta-laranja text-preto-azulado px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-lg shrink-0"
                                              >
                                              <Send size={16} />
                                    {t.cta.button}
                                  </a>
                        </motion.div>
                </div>
          </section>
        );
}</section>
