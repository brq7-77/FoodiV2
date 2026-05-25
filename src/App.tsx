import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function LanguageDirection() {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const dir = i18nInstance.dir();
    document.documentElement.dir = dir;
    document.documentElement.lang = i18nInstance.language;
  }, [i18nInstance, i18nInstance.language]);

  return null;
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <LanguageDirection />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;