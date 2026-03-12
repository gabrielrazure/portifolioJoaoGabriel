import { MessageCircle, Sun, Moon } from 'lucide-react';
import type { Lang } from '../../types';
import type { Translations } from '../../types';
import { SOCIAL_LINKS } from '../../constants/data';

interface NavbarProps {
  t: Translations;
  lang: Lang;
  isDark: boolean;
  onToggleTheme: () => void;
  onToggleLang: (lang: Lang) => void;
}

export function Navbar({ t, lang, isDark, onToggleTheme, onToggleLang }: NavbarProps) {
  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={onToggleTheme}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-preto-azulado text-white dark:bg-cinza-claro dark:text-preto-azulado shadow-2xl hover:scale-110 transition-all group"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun size={24} className="group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon size={24} className="group-hover:-rotate-12 transition-transform" />
        )}
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cinza-claro/80 dark:bg-preto-azulado/80 backdrop-blur-md border-b border-azul-claro/50 dark:border-azul-escuro/30 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-sans text-xl font-extrabold tracking-tighter text-preto-azulado dark:text-cinza-claro">
            JOÃO GABRIEL.
          </span>

          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-azul-escuro dark:text-azul-claro">
            <a href="#home" className="hover:text-cta-laranja transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-cta-laranja transition-colors">{t.nav.about}</a>
            <a href="#experience" className="hover:text-cta-laranja transition-colors">{t.nav.experience}</a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-cta-laranja transition-colors">
              {t.nav.contact}
            </a>

            {/* Language Toggle */}
            <div className="flex items-center gap-3 border-l border-azul-claro/30 dark:border-azul-escuro/30 pl-8">
              <button
                onClick={() => onToggleLang('pt')}
                className={`transition-all hover:scale-110 flex items-center ${lang === 'pt' ? 'opacity-100 scale-110' : 'opacity-40 grayscale'}`}
                title="Português"
              >
                <img src="https://flagcdn.com/w40/br.png" alt="Brasil" className="w-6 h-auto rounded-sm shadow-sm" referrerPolicy="no-referrer" />
              </button>
              <button
                onClick={() => onToggleLang('en')}
                className={`transition-all hover:scale-110 flex items-center ${lang === 'en' ? 'opacity-100 scale-110' : 'opacity-40 grayscale'}`}
                title="English"
              >
                <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-6 h-auto rounded-sm shadow-sm" referrerPolicy="no-referrer" />
              </button>
            </div>
          </div>

          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta-laranja text-preto-azulado px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-azul-escuro hover:text-white transition-all flex items-center gap-2 shadow-lg"
          >
            <MessageCircle size={14} />
            {t.nav.whatsapp}
          </a>
        </div>
      </nav>
    </>
  );
}
