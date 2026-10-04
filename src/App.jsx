import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Router from './router';
import AppToaster from '@/components/AppToaster';

export default function App() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, language]);

  return (
    <>
      <Router />
      <AppToaster />
    </>
  );
}
