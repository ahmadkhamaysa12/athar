import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { LoginSchema } from '../../validations/LoginSchema';
import useAuthStore from '../../store/useAuthStore';
import axiosInstance from '../../api/axiosInstance';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const setLogin = useAuthStore((state) => state.Login);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema(t)),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(
        '/auth/Account/Login',
        data,
      );
      
      setLogin(response.data.accessToken);

      navigate('/');
    } catch (error) {
      setError('root', {
        type: 'server',
        message:
          error.response?.data?.message ||
          t('login_failed') ||
          'Email or password is incorrect',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="login-email">{t('email')}</FieldLabel>

          <Input
            id="login-email"
            type="email"
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
          />

          {errors.email && (
            <FieldDescription>{errors.email.message}</FieldDescription>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="login-password">{t('password')}</FieldLabel>

          <Input
            id="login-password"
            type="password"
            aria-invalid={Boolean(errors.password)}
            {...register('password')}
          />

          {errors.password && (
            <FieldDescription>{errors.password.message}</FieldDescription>
          )}
        </Field>

        {errors.root && (
          <FieldDescription>{errors.root.message}</FieldDescription>
        )}

        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => reset()}>
            {t('reset')}
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('submitting') : t('login')}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
