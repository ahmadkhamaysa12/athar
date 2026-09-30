import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      athar: 'Athar',
    },
    validation: {
      email_required: 'Email is required',
      email_invalid: 'Email is invalid',
      password_required: 'Password is required',
      password_min_length: 'Password must be at least 8 characters',
      password_invalid:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      username_required: 'Username is required',
      username_invalid: 'Username is invalid',
      fullName_required: 'Full name is required',
      fullName_min_length: 'Full name must be at least 3 characters',
      phoneNumber_required: 'Phone number is required',
      phoneNumber_invalid: 'Phone number is invalid',
    },
  },

  ar: {
    translation: {
      athar: 'أثر',
    },
    validation: {
      email_required: 'البريد الإلكتروني مطلوب',
      email_invalid: 'البريد الإلكتروني غير صالح',
      password_required: 'كلمة المرور مطلوبة',
      password_min_length: 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل',
      password_invalid:
        'يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل وحرف صغير واحد ورقم واحد وحرف خاص واحد',
      username_required: 'اسم المستخدم مطلوب',
      username_invalid: 'اسم المستخدم غير صالح',
      fullName_required: 'الاسم الكامل مطلوب',
      fullName_min_length: 'يجب أن يتكون الاسم الكامل من 3 أحرف على الأقل',
      phoneNumber_required: 'رقم الهاتف مطلوب',
      phoneNumber_invalid: 'رقم الهاتف غير صالح',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
