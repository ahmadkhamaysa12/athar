import * as yup from 'yup';

export const RegisterSchema = (t) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required(t('validation.email_required'))
      .email(t('validation.email_invalid'))
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t('validation.email_invalid'),
      ),

    password: yup
      .string()
      .required(t('validation.password_required'))
      .min(8, t('validation.password_min_length'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        t('validation.password_invalid'),
      ),

    userName: yup
      .string()
      .trim()
      .required(t('validation.username_required'))
      .matches(/^[a-zA-Z0-9_]+$/, t('validation.username_invalid')),

    fullName: yup
      .string()
      .trim()
      .required(t('validation.fullName_required'))
      .min(3, t('validation.fullName_min_length')),

    phoneNumber: yup
      .string()
      .trim()
      .required(t('validation.phoneNumber_required'))
      .matches(
        /^(\+?\d{1,3}[- ]?)?\d{10}$/,
        t('validation.phoneNumber_invalid'),
      ),
  });
