/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ChevronRight,
  Zap,
  User,
  Cpu,
  Send,
  Workflow,
  Sun,
  Moon,
  Github
} from 'lucide-react';

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Automações",
      contact: "Contato",
      whatsapp: "WhatsApp"
    },
    hero: {
      badge: "Developer and Expert n8n, Python & AI",
      title: "Escalando negócios com ",
      titleAccent: "automação.",
      subtitle: "Desenvolvo fluxos inteligentes no n8n para eliminar processos manuais e conectar suas ferramentas favoritas.",
      cta: "Ver Soluções"
    },
    about: {
      badge: "Perfil Profissional",
      description1: "Desenvolvedor e Expert em n8n focado na criação de soluções inteligentes e automações de alto nível. Especialista em transformar processos complexos em fluxos eficientes utilizando Python e Inteligência Artificial.",
      description2: "Com experiência em empresas como Saúde Bliss, LG - Lugar de gente e Veridian, desenvolvo agentes autônomos, arquiteturas RAG e pipelines de dados escaláveis para otimização de processos e eficiência operacional.",
      location: "Localização",
      email: "E-mail",
      country: "Brasil"
    },
    experience: {
      badge: "Soluções",
      title: "Automações & Fluxos",
      topics: [
        {
          title: "AI Developer",
          company: "Saúde Bliss",
          period: "Set 2025 - Fev 2026",
          description: "Automação da emissão de planos de saúde com agentes de IA, integrando coleta e validação de dados. Desenvolvimento de workflows no n8n para otimizar a jornada do cliente entre Produto, Operações e Dados.",
          tags: ["IA", "n8n", "Data Analysis", "Slack"]
        },
        {
          title: "Data Analyst",
          company: "Veridian",
          period: "Jan 2025 - Jul 2025",
          description: "Desenvolvimento de Agentes de IA com foco em RAG, Supabase e ChatBots. Estruturação de arquiteturas de agentes autônomos e fluxos complexos para o setor jurídico e tomada de decisão.",
          tags: ["RAG", "Supabase", "Python", "LLMs", "NLP"]
        }
      ]
    },
    cta: {
      title: "Tem um processo manual?",
      subtitle: "Eu transformo ele em um fluxo automático no n8n.",
      button: "Falar sobre projeto"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Automations",
      contact: "Contact",
      whatsapp: "WhatsApp"
    },
    hero: {
      badge: "Developer and Expert n8n, Python & AI",
      title: "Scaling businesses with ",
      titleAccent: "automation.",
      subtitle: "I develop intelligent workflows in n8n to eliminate manual processes and connect your favorite tools.",
      cta: "See Solutions"
    },
    about: {
      badge: "Professional Profile",
      description1: "Developer and n8n Expert focused on creating intelligent solutions and high-level automations. Specialist in transforming complex processes into efficient flows using Python and Artificial Intelligence.",
      description2: "With experience in companies like Saúde Bliss, LG - Lugar de gente, and Veridian, I develop autonomous agents, RAG architectures, and scalable data pipelines for process optimization and operational efficiency.",
      location: "Location",
      email: "Email",
      country: "Brazil"
    },
    experience: {
      badge: "Solutions",
      title: "Automations & Flows",
      topics: [
        {
          title: "AI Developer",
          company: "Saúde Bliss",
          period: "Sep 2025 - Feb 2026",
          description: "Automation of health insurance issuance with AI agents, integrating data collection and validation. Development of n8n workflows to optimize the customer journey across Product, Operations, and Data.",
          tags: ["AI", "n8n", "Data Analysis", "Slack"]
        },
        {
          title: "Data Analyst",
          company: "Veridian",
          period: "Jan 2025 - Jul 2025",
          description: "Development of AI Agents focused on RAG, Supabase, and ChatBots. Structuring autonomous agent architectures and complex flows for the legal sector and decision making.",
          tags: ["RAG", "Supabase", "Python", "LLMs", "NLP"]
        }
      ]
    },
    cta: {
      title: "Have a manual process?",
      subtitle: "I transform it into an automatic flow in n8n.",
      button: "Talk about project"
    }
  }
};

const skills = [
  "n8n", "Python", "Supabase", "OpenAI", "Gemini", 
  "LangChain", "RAG", "Redis", "NLP", "Prompt Engineering", "Docker"
];

const ProfileImage = () => {
  const [photo, setPhoto] = React.useState<string | null>(null);

  React.useEffect(() => {
    const savedPhoto = localStorage.getItem('profile-photo');
    if (savedPhoto) setPhoto(savedPhoto);
  }, []);

  if (photo) {
    return (
      <img 
        src={photo} 
        alt="João Gabriel" 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
      />
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 text-zinc-300">
      <User size={80} />
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [lang, setLang] = React.useState<'pt' | 'en'>('pt');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    const savedLang = localStorage.getItem('lang') as 'pt' | 'en';
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLang = (newLang: 'pt' | 'en') => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 dark:bg-preto-azulado dark:text-cinza-claro">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-preto-azulado text-white dark:bg-cinza-claro dark:text-preto-azulado shadow-2xl hover:scale-110 transition-all group"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={24} className="group-hover:rotate-45 transition-transform" /> : <Moon size={24} className="group-hover:-rotate-12 transition-transform" />}
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cinza-claro/80 dark:bg-preto-azulado/80 backdrop-blur-md border-b border-azul-claro/50 dark:border-azul-escuro/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-sans text-xl font-extrabold tracking-tighter text-preto-azulado dark:text-cinza-claro">JOÃO GABRIEL.</span>
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-azul-escuro dark:text-azul-claro">
            <a href="#home" className="hover:text-cta-laranja transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-cta-laranja transition-colors">{t.nav.about}</a>
            <a href="#experience" className="hover:text-cta-laranja transition-colors">{t.nav.experience}</a>
            <a href="https://wa.me/5562992258750" target="_blank" rel="noopener noreferrer" className="hover:text-cta-laranja transition-colors">{t.nav.contact}</a>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-3 border-l border-azul-claro/30 dark:border-azul-escuro/30 pl-8">
              <button 
                onClick={() => toggleLang('pt')}
                className={`transition-all hover:scale-110 flex items-center ${lang === 'pt' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`}
                title="Português"
              >
                <img 
                  src="https://flagcdn.com/w40/br.png" 
                  alt="Brasil" 
                  className="w-6 h-auto rounded-sm shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </button>
              <button 
                onClick={() => toggleLang('en')}
                className={`transition-all hover:scale-110 flex items-center ${lang === 'en' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`}
                title="English"
              >
                <img 
                  src="https://flagcdn.com/w40/us.png" 
                  alt="USA" 
                  className="w-6 h-auto rounded-sm shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </button>
            </div>
          </div>
          <a 
            href="https://wa.me/5562992258750" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cta-laranja text-preto-azulado px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-azul-escuro hover:text-white transition-all flex items-center gap-2 shadow-lg"
          >
            <MessageCircle size={14} />
            {t.nav.whatsapp}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-cinza-claro dark:bg-preto-azulado transition-colors duration-500">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azul-claro rounded-full blur-3xl opacity-30 dark:opacity-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-azul-medio rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse delay-700" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-azul-escuro text-azul-claro dark:bg-azul-claro dark:text-preto-azulado text-[9px] font-black uppercase tracking-[0.2em] mb-8">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 uppercase text-preto-azulado dark:text-white">
              {t.hero.title}<span className="text-azul-medio">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-2xl text-azul-escuro dark:text-azul-claro max-w-3xl mx-auto mb-12 font-medium leading-tight">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/5562992258750" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-cta-laranja text-preto-azulado px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
              >
                {t.hero.cta} <Workflow size={18} />
              </a>
              <div className="flex gap-4 items-center">
                <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-7a9849362/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border-2 border-azul-claro dark:border-azul-escuro hover:bg-preto-azulado hover:text-white dark:hover:bg-cinza-claro dark:hover:text-preto-azulado transition-all text-azul-escuro dark:text-azul-claro">
                  <Linkedin size={22} />
                </a>
                <a href="https://www.instagram.com/gabrielrazure?igsh=MTBudzFvZXd2bjVkMw==" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border-2 border-azul-claro dark:border-azul-escuro hover:bg-preto-azulado hover:text-white dark:hover:bg-cinza-claro dark:hover:text-preto-azulado transition-all text-azul-escuro dark:text-azul-claro">
                  <Instagram size={22} />
                </a>
                <a href="https://github.com/gabrielrazure?tab=repositories" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border-2 border-azul-claro dark:border-azul-escuro hover:bg-preto-azulado hover:text-white dark:hover:bg-cinza-claro dark:hover:text-preto-azulado transition-all text-azul-escuro dark:text-azul-claro">
                  <Github size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-preto-azulado transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-azul-claro/10 dark:bg-azul-escuro/20 border-8 border-cinza-claro dark:border-azul-escuro relative group">
                <ProfileImage />
                <div className="absolute inset-0 bg-preto-azulado/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            </motion.div>
            
            <motion.div
              key={lang}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-azul-medio mb-6">
                <User size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t.about.badge}</span>
              </div>
              <h2 className="text-5xl font-black mb-8 leading-none uppercase tracking-tighter text-preto-azulado dark:text-white">João Gabriel.</h2>
              <div className="space-y-6 text-azul-escuro dark:text-azul-claro mb-10 text-lg leading-relaxed font-medium">
                <p>
                  {t.about.description1}
                </p>
                <p>
                  {t.about.description2}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest mb-3 text-azul-medio">{t.about.location}</h4>
                  <p className="text-preto-azulado dark:text-cinza-claro font-bold flex items-center gap-2">
                    <MapPin size={16} className="text-azul-medio" /> {t.about.country}
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest mb-3 text-azul-medio">{t.about.email}</h4>
                  <p className="text-preto-azulado dark:text-cinza-claro font-bold flex items-center gap-2">
                    <Mail size={16} className="text-azul-medio" /> gabrielrazure@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-azul-claro/20 dark:bg-azul-escuro/30 rounded-lg text-[11px] text-preto-azulado dark:text-cinza-claro font-black uppercase tracking-wider border border-azul-claro/30 dark:border-azul-escuro/50">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-azul-claro/10 dark:bg-preto-azulado/50 transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-2 text-azul-medio mb-4">
              <Cpu size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t.experience.badge}</span>
            </div>
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-none text-preto-azulado dark:text-white">{t.experience.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.experience.topics.map((topic, index) => (
              <motion.div
                key={`${lang}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-preto-azulado p-10 rounded-[2.5rem] border border-azul-claro/30 dark:border-azul-escuro/50 hover:border-azul-medio transition-all shadow-sm group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-preto-azulado dark:bg-azul-escuro rounded-2xl flex items-center justify-center text-cta-laranja group-hover:scale-110 transition-transform">
                    <Workflow size={24} />
                  </div>
                  <span className="text-[10px] font-black px-4 py-2 bg-azul-claro/20 dark:bg-azul-escuro/30 rounded-full text-azul-escuro dark:text-azul-claro uppercase tracking-widest">
                    {topic.period}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-preto-azulado dark:text-white">{topic.title}</h3>
                <p className="text-azul-medio font-bold text-xs mb-6 uppercase tracking-widest">{topic.company}</p>
                <p className="text-azul-escuro dark:text-azul-claro mb-8 leading-relaxed font-medium">
                  {topic.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {topic.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-[0.15em] text-preto-azulado dark:text-azul-claro">
                      • {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            key={`cta-${lang}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-10 bg-preto-azulado dark:bg-azul-escuro rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <div>
              <h3 className="text-2xl font-black uppercase mb-2 text-azul-claro">{t.cta.title}</h3>
              <p className="text-azul-medio dark:text-azul-claro font-medium">{t.cta.subtitle}</p>
            </div>
            <a 
              href="https://wa.me/5562992258750" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-cta-laranja text-preto-azulado px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-lg"
            >
              {t.cta.button}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-preto-azulado dark:bg-preto-azulado border-t border-azul-escuro/30 text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <span className="font-black text-3xl tracking-tighter text-azul-claro">JOÃO GABRIEL.</span>
          
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-7a9849362/" target="_blank" rel="noopener noreferrer" className="text-azul-medio hover:text-cta-laranja transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/gabrielrazure?igsh=MTBudzFvZXd2bjVkMw==" target="_blank" rel="noopener noreferrer" className="text-azul-medio hover:text-cta-laranja transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://github.com/gabrielrazure?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-azul-medio hover:text-cta-laranja transition-colors">
              <Github size={24} />
            </a>
          </div>

          <p className="text-azul-medio text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} João Gabriel • n8n Specialist
          </p>
        </div>
      </footer>
    </div>
  );
}
