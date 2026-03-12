/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from './hooks/useTheme';
import { useLang } from './hooks/useLang';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';

export default function App() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const { lang, t, toggle: toggleLang } = useLang();

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 dark:bg-preto-azulado dark:text-cinza-claro">
      <Navbar
        t={t}
        lang={lang}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onToggleLang={toggleLang}
      />

      <main>
        <HeroSection t={t} lang={lang} />
        <AboutSection t={t} lang={lang} />
        <ExperienceSection t={t} lang={lang} />
      </main>

      <Footer />
    </div>
  );
}
