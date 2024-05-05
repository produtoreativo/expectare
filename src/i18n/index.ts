import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  'pt-BR': {
    translation: {
      welcome: 'Welcome 3!',
      greeting: 'Hello, {{name}}!',
      'screen.add.narrative': 'Adicione uma nova Narrativa',
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'pt-BR', // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
