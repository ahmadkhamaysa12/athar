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
        welcome_back: 'Welcome back',
        login_quote: 'Return to the books that left a mark.',
        login_side_description:
          'Continue exploring your library and discover the next book worth remembering.',
        username_required: 'Username is required',
        username_invalid: 'Please enter a valid username',

        fullName_required: 'Full name is required',
        fullName_min_length: 'Full name must be at least 3 characters',

        phoneNumber_required: 'Phone number is required',
        phoneNumber_invalid: 'Phone number is invalid',

        login: 'Login',
        login_description: 'Welcome back to Athar',
        email: 'Email',
        password: 'Password',
        forgot_password: 'Forgot password?',
        no_account: "Don't have an account?",
        create_account: 'Create a new account',
        submitting: 'Logging in...',
        login_failed: 'Email or password is incorrect',

        register: 'Create account',
        register_description:
          'Create your account and start building your personal library.',
        register_failed: 'Unable to create your account',
        creating_account: 'Creating account...',

        fullName: 'Full name',
        fullName_placeholder: 'Enter your full name',

        username: 'Username',
        username_placeholder: 'Choose a username',

        phoneNumber: 'Phone number',

        have_account: 'Already have an account?',

        join_athar: 'Join Athar',
        register_quote: 'Every book you read leaves a mark.',
        register_side_description:
          'Build your library, discover meaningful books, and keep the titles that leave a lasting impression.',

        discover: 'Discover',
        read: 'Read',
        collect: 'Collect',
        email_domain: 'Please enter a valid Gmail, Yahoo, or iCloud email address.',

        code_required: 'Verification code is required',
        code_pattern: 'Verification code must be 4 digits',

        reset_password_min: 'Password must be at least 6 characters',
        reset_password_uppercase: 'Password must begin with a capital letter',
        reset_password_number: 'Password must contain at least one number',
        reset_password_special: 'Password must contain at least one special character',

        reset_password_title: 'Reset password',
        reset_password_description:
          'Enter your email, verify the code, and choose a new password.',
        restore_access: 'Restore access',

        verification_code: 'Verification code',
        new_password: 'New password',
        new_password_placeholder: 'Enter your new password',

        send_code: 'Send code',
        sending_code: 'Sending...',
        code_sent: 'Verification code sent successfully',
        send_code_failed: 'Unable to send verification code',

        reset_password_button: 'Reset password',
        resetting_password: 'Resetting...',
        reset_password_failed: 'Password reset failed',

        remember_password: 'Remember your password?',
        reset_security_text: 'Your account security comes first.',
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
        welcome_back: 'مرحباً بعودتك',
        login_quote: 'عُد إلى الكتب التي تركت أثرًا.',
        login_side_description:
          'واصل رحلتك بين الكتب، وعد إلى مكتبتك، واكتشف كتابك القادم.',
        username_required: 'اسم المستخدم مطلوب',
        username_invalid: 'يرجى إدخال اسم مستخدم صالح',

        fullName_required: 'الاسم الكامل مطلوب',
        fullName_min_length: 'يجب أن يتكون الاسم الكامل من 3 أحرف على الأقل',

        phoneNumber_required: 'رقم الهاتف مطلوب',
        phoneNumber_invalid: 'رقم الهاتف غير صالح',

        login: 'تسجيل الدخول',
        login_description: 'مرحباً بعودتك إلى أثر',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        forgot_password: 'نسيت كلمة المرور؟',
        no_account: 'ليس لديك حساب؟',
        create_account: 'إنشاء حساب جديد',
        submitting: 'جاري تسجيل الدخول...',
        login_failed: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',

        register: 'إنشاء حساب',
        register_description: 'أنشئ حسابك وابدأ ببناء مكتبتك الخاصة.',
        register_failed: 'تعذر إنشاء الحساب',
        creating_account: 'جاري إنشاء الحساب...',

        fullName: 'الاسم الكامل',
        fullName_placeholder: 'أدخل اسمك الكامل',

        username: 'اسم المستخدم',
        username_placeholder: 'اختر اسم مستخدم',

        phoneNumber: 'رقم الهاتف',

        have_account: 'لديك حساب بالفعل؟',

        join_athar: 'انضم إلى أثر',
        register_quote: 'كل كتاب تقرؤه يترك أثرًا.',
        register_side_description:
          'ابنِ مكتبتك، واكتشف كتبًا قيّمة، واحتفظ بالعناوين التي تركت أثرًا فيك.',

        discover: 'اكتشف',
        read: 'اقرأ',
        collect: 'احتفظ',
        email_domain: 'يرجى إدخال بريد Gmail أو Yahoo أو iCloud صالح',

        code_required: 'رمز التحقق مطلوب',
        code_pattern: 'يجب أن يتكون رمز التحقق من 4 أرقام',

        reset_password_min: 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل',
        reset_password_uppercase: 'يجب أن تبدأ كلمة المرور بحرف إنجليزي كبير',
        reset_password_number: 'يجب أن تحتوي كلمة المرور على رقم واحد على الأقل',
        reset_password_special: 'يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل',

        reset_password_title: 'إعادة تعيين كلمة المرور',
        reset_password_description:
          'أدخل بريدك الإلكتروني، ثم رمز التحقق، واختر كلمة مرور جديدة.',
        restore_access: 'استعادة الوصول',

        verification_code: 'رمز التحقق',
        new_password: 'كلمة المرور الجديدة',
        new_password_placeholder: 'أدخل كلمة المرور الجديدة',

        send_code: 'إرسال الرمز',
        sending_code: 'جاري الإرسال...',
        code_sent: 'تم إرسال رمز التحقق بنجاح',
        send_code_failed: 'تعذر إرسال رمز التحقق',

        reset_password_button: 'إعادة تعيين كلمة المرور',
        resetting_password: 'جاري إعادة التعيين...',
        reset_password_failed: 'فشل تغيير كلمة المرور',

        remember_password: 'تذكرت كلمة المرور؟',
        reset_security_text: 'أمان حسابك يأتي أولاً.',
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
