import * as yup from 'yup';

export const RegisterSchema = (t) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required(t('email_required'))
      .email(t('email_invalid'))
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t('email_invalid'),
      ),
    password: yup
      .string()
      .trim()
      .required(t('password_required'))
      .min(8, t('password_min_length'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        t('password_invalid'),
      ),
    username: yup
      .string()
      .trim()
      .required(t('username_required'))
      .matches(/^[a-zA-Z0-9_]+$/, t('username_invalid')),
    fullName: yup
      .string()
      .trim()
      .required(t('fullName_required'))
      .min(3, t('fullName_min_length')),
    phoneNumber: yup
      .string()
      .trim()
      .required(t('phoneNumber_required'))
      .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, t('phoneNumber_invalid')),
  });
