import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      app: {
        name: 'Athar',
      },
      navbar: {
        search_placeholder: 'Search...',
        home: 'Home',
        books: 'Books',
        categories: 'Categories',
        register: 'Register',
        login: 'Login',
        profile: 'Profile',
        logout: 'Logout',
        dark: 'Dark',
        light: 'Light',
        cart: 'Cart',
      },
      validation: {
        email_required: 'Email is required',
        email_invalid: 'Please enter a valid email address',

        password_required: 'Password is required',
        password_min_length: 'Password must be at least 8 characters',
        password_invalid:
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',

        username_required: 'Username is required',
        username_invalid: 'Please enter a valid username',

        fullName_required: 'Full name is required',
        fullName_min_length: 'Full name must be at least 3 characters',

        phoneNumber_required: 'Phone number is required',
        phoneNumber_invalid: 'Please enter a valid phone number',
      },
    },
  },

  ar: {
    translation: {
      app: {
        name: 'أثر',
      },
      navbar: {
        search_placeholder: 'بحث...',
        home: 'الرئيسية',
        books: 'الكتب',
        categories: 'الأصناف',
        register: 'إنشاء حساب',
        login: 'تسجيل الدخول',
        profile: 'الملف الشخصي',
        logout: 'تسجيل الخروج',
        dark: 'الوضع الداكن',
        light: 'الوضع الفاتح',
        cart: 'عربة التسوق',
      },
      validation: {
        email_required: 'البريد الإلكتروني مطلوب',
        email_invalid: 'يرجى إدخال بريد إلكتروني صالح',

        password_required: 'كلمة المرور مطلوبة',
        password_min_length: 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل',
        password_invalid:
          'يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم ورمز خاص على الأقل',

        username_required: 'اسم المستخدم مطلوب',
        username_invalid: 'يرجى إدخال اسم مستخدم صالح',

        fullName_required: 'الاسم الكامل مطلوب',
        fullName_min_length: 'يجب أن يتكون الاسم الكامل من 3 أحرف على الأقل',

        phoneNumber_required: 'رقم الهاتف مطلوب',
        phoneNumber_invalid: 'يرجى إدخال رقم هاتف صالح',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    supportedLngs: ['ar', 'en'],
    fallbackLng: 'ar',

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
