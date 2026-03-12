import { useState, useEffect } from 'react';
import type { Lang } from '../types';
import { translations } from '../constants/translations';

export function useLang() {
    const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
        const saved = localStorage.getItem('lang') as Lang | null;
        if (saved === 'pt' || saved === 'en') setLang(saved);
  }, []);

  const toggle = (next: Lang) => {
        setLang(next);
        localStorage.setItem('lang', next);
  };

  return { lang, t: translations[lang], toggle };
}
