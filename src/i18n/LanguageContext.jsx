import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ar from './ar.json';
import en from './en.json';
import fr from './fr.json';

const translations = { ar, en, fr };

const LanguageContext = createContext(null);

export const LANGUAGES = [
  { code: 'ar', name: 'العربية', nativeName: 'العربية', dir: 'rtl' },
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'fr', name: 'Français', nativeName: 'Français', dir: 'ltr' },
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('like-food-lang');
    return saved || 'ar';
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('like-food-lang');
    if (saved) {
      setLanguage(saved);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem('like-food-lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = LANGUAGES.find(l => l.code === language)?.dir || 'ltr';
  }, [language, isReady]);

  const changeLanguage = useCallback((newLang) => {
    if (translations[newLang]) {
      setLanguage(newLang);
    }
  }, []);

  const t = useCallback((key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    if (value === undefined) return key;
    return Object.entries(params).reduce((str, [k, v]) => str.replace(`{{${k}}}`, v), value);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isReady, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}