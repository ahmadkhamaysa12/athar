import * as yup from 'yup';

export const LoginSchema = (t) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required(t('validation.email_required'))
      .email(t('validation.email_invalid')),

    password: yup.string().required(t('validation.password_required')),
  });
