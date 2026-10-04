import * as yup from 'yup';

export const ResetPasswordSchema = (t) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required(t('validation.email_required'))
      .email(t('validation.email_invalid'))
      .matches(
        /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|icloud\.com)$/,
        t('validation.email_domain'),
      ),

    code: yup
      .string()
      .required(t('validation.code_required'))
      .matches(/^[0-9]{4}$/, t('validation.code_pattern')),

    newPassword: yup
      .string()
      .required(t('validation.password_required'))
      .min(6, t('validation.reset_password_min'))
      .matches(/^[A-Z]/, t('validation.reset_password_uppercase'))
      .matches(/[0-9]/, t('validation.reset_password_number'))
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        t('validation.reset_password_special'),
      ),
  });
