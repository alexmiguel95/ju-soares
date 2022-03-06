import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBr from './pt-br.json';

const i18n = i18next.createInstance();

const resources = {
    ptBr: {
        translation: ptBr,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ptBr',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
