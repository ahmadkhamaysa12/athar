import { LoginSchema } from '../../validations/LoginSchema';
import { useTranslation } from 'react-i18next';
import useAuthStore from '../../store/useAuthStore';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authAxiosInstance } from '../../api/authAxiosInstance';
import { useNavigate } from 'react-router-dom';
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
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema(t)),
    mode: 'onBlur',
  });
  const onSubmit = async (data) => {
    try {
      const response = await authAxiosInstance.post('/auth/login', data);
      if (response.status === 200) {

        setToken(response.data.token);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
          />
          <FieldDescription>
            {errors.email?.message || "We'll never share your email."}
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
          <Input
            id="fieldgroup-password"
            type="password"
            aria-invalid={Boolean(errors.password)}
            {...register('password')}
          />
          {errors.password && (
            <FieldDescription>{errors.password.message}</FieldDescription>
          )}
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : 'Submit'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
