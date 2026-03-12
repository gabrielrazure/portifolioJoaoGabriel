import { motion } from 'motion/react';
import { User, MapPin, Mail } from 'lucide-react';
import type { Lang, Translations } from '../../types';
import { SKILLS, CONTACT } from '../../constants/data';
import { ProfileImage } from '../ui/ProfileImage';

interface AboutSectionProps {
    t: Translations;
    lang: Lang;
}

export function AboutSection({ t, lang }: AboutSectionProps) {
    return (
          <section
                  id="about"
                  className="section-padding bg-white dark:bg-preto-azulado transition-colors duration-500"
                >
                <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                          {/* Profile Photo */}
                                  <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                className="relative"
                                              >
                                              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-azul-claro/10 dark:bg-azul-escuro/20 border-8 border-cinza-claro dark:border-azul-escuro relative group">
                                                            <ProfileImage />
                                                            <div className="absolute inset-0 bg-preto-azulado/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                                              </div>div>
                                  </motion.div>motion.div>
                        
                          {/* Bio */}
                                  <motion.div
                                                key={lang}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                              >
                                              <div className="flex items-center gap-2 text-azul-medio mb-6">
                                                            <User size={16} />
                                                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t.about.badge}</span>span>
                                              </div>div>
                                              <h2 className="text-5xl font-black mb-8 leading-none uppercase tracking-tighter text-preto-azulado dark:text-white">
                                                            João Gabriel.
                                              </h2>h2>
                                              <div className="space-y-6 text-azul-escuro dark:text-azul-claro mb-10 text-lg leading-relaxed font-medium">
                                                            <p>{t.about.description1}</p>p>
                                                            <p>{t.about.description2}</p>p>
                                              </div>div>
                                  
                                              <div className="grid grid-cols-2 gap-8 mb-12">
                                                            <div>
                                                                            <h4 className="font-black text-[10px] uppercase tracking-widest mb-3 text-azul-medio">{t.about.location}</h4>h4>
                                                                            <p className="text-preto-azulado dark:text-cinza-claro font-bold flex items-center gap-2">
                                                                                              <MapPin size={16} className="text-azul-medio" /> {t.about.country}
                                                                            </p>p>
                                                            </div>div>
                                                            <div>
                                                                            <h4 className="font-black text-[10px] uppercase tracking-widest mb-3 text-azul-medio">{t.about.email}</h4>h4>
                                                                            <p className="text-preto-azulado dark:text-cinza-claro font-bold flex items-center gap-2">
                                                                                              <Mail size={16} className="text-azul-medio" /> {CONTACT.email}
                                                                            </p>p>
                                                            </div>div>
                                              </div>div>
                                  
                                              <div className="flex flex-wrap gap-3">
                                                {SKILLS.map((skill) => (
                                                                <span
                                                                                    key={skill}
                                                                                    className="px-4 py-2 bg-azul-claro/20 dark:bg-azul-escuro/30 rounded-lg text-[11px] text-preto-azulado dark:text-azul-claro font-black uppercase tracking-wider"
                                                                                  >
                                                                  {skill}
                                                                </span>span>
                                                              ))}
                                              </div>div>
                                  </motion.div>motion.div>
                        </div>div>
                </div>div>
          </section>section>
        );
}</section>
