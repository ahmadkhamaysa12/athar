import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import {  Moon, Quote, Sun } from 'lucide-react';

import logo from '../../assets/logo.png';
import { RegisterSchema } from '../../validations/RegisterSchema';
import axiosInstance from '../../api/axiosInstance';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function Register() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();

  const currentLanguage = i18n.resolvedLanguage;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    const language = currentLanguage === 'ar' ? 'en' : 'ar';

    i18n.changeLanguage(language);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(RegisterSchema(t)),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post('/auth/Account/Register', data);

      navigate('/auth/login');
    } catch (error) {
      setError('root', {
        type: 'server',
        message: error.response?.data?.message || t('validation.register_failed'),
      });
    }
  };

  return (
    <div
      className="bg-background min-h-screen px-4 py-5 lg:flex
        lg:items-center lg:justify-center lg:px-8"
    >
      <div
        className="border-border bg-card shadow-popover mx-auto w-full
          max-w-6xl overflow-hidden rounded-3xl border lg:grid
          lg:min-h-[720px] lg:grid-cols-[0.9fr_1.1fr]"
      >
        {/* identity side */}
        <div
          className="bg-primary text-primary-foreground relative
            hidden overflow-hidden p-10 lg:flex lg:flex-col
            lg:justify-between"
        >
          <div
            className="border-primary-foreground/10 absolute -start-24
              -top-24 size-80 rounded-full border"
          />

          <div
            className="border-primary-foreground/10 absolute -end-20
              -bottom-32 size-96 rounded-full border"
          />

          <div
            className="border-primary-foreground/10 absolute end-14
              top-28 size-32 rotate-12 rounded-[2rem] border"
          />

          {/* brand */}
          <Link
            to="/"
            className="relative z-10 flex w-fit items-center gap-3"
          >
            <div
              className="bg-primary-foreground/10 flex size-12
                items-center justify-center rounded-2xl"
            >
              <img
                src={logo}
                alt="Athar Logo"
                className="size-9 object-contain"
              />
            </div>

            <span className="font-display text-4xl font-bold">{t('app.name')}</span>
          </Link>

          {/* editorial content */}
          <div className="relative z-10 max-w-md">
            <div
              className="bg-primary-foreground/10 mb-5 flex size-11
                items-center justify-center rounded-2xl"
            >
              <Quote size={20} />
            </div>

            <h2
              className="font-display text-4xl leading-relaxed
                font-bold"
            >
              {t('validation.register_quote')}
            </h2>

            <p
              className="text-primary-foreground/70 mt-5 max-w-sm
                text-sm leading-7"
            >
              {t('validation.register_side_description')}
            </p>
          </div>

          {/* footer */}
          <div
            className="text-primary-foreground/60 relative z-10 flex
              items-center gap-3 text-sm"
          >
            <span>{t('validation.discover')}</span>

            <span className="bg-terracotta size-1 rounded-full" />

            <span>{t('validation.read')}</span>

            <span className="bg-terracotta size-1 rounded-full" />

            <span>{t('validation.collect')}</span>
          </div>
        </div>

        {/* form side */}
        <div
          className="flex items-center justify-center px-5 py-8
            sm:px-8 lg:px-12 lg:py-10"
        >
          <div className="w-full max-w-xl">
            {/* mobile brand */}
            <div className="mb-7 text-center lg:hidden">
              <Link
                to="/"
                className="mx-auto flex w-fit flex-col items-center
                  gap-2"
              >
                <div
                  className="bg-primary/10 flex size-12 items-center
                    justify-center rounded-2xl"
                >
                  <img
                    src={logo}
                    alt="Athar Logo"
                    className="size-9 object-contain"
                  />
                </div>

                <span
                  className="font-display text-primary text-3xl
                    font-bold"
                >
                  {t('app.name')}
                </span>
              </Link>
            </div>

            {/* heading */}
            <div className="mb-8">
              <span className="athar-kicker">{t('validation.join_athar')}</span>

              <h1
                className="font-display text-foreground mt-3 text-4xl
                  font-bold"
              >
                {t('validation.register')}
              </h1>

              <p
                className="text-muted-foreground mt-2 text-sm
                  leading-6"
              >
                {t('validation.register_description')}
              </p>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup className="gap-5">
                {/* name row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* full name */}
                  <Field>
                    <FieldLabel htmlFor="register-fullName">
                      {t('validation.fullName')}
                    </FieldLabel>

                    <Input
                      id="register-fullName"
                      type="text"
                      autoComplete="name"
                      placeholder={t('validation.fullName_placeholder')}
                      aria-invalid={Boolean(errors.fullName)}
                      className="h-11"
                      {...register('fullName')}
                    />

                    {errors.fullName && (
                      <FieldDescription className="text-destructive">
                        {errors.fullName.message}
                      </FieldDescription>
                    )}
                  </Field>

                  {/* username */}
                  <Field>
                    <FieldLabel htmlFor="register-userName">
                      {t('validation.username')}
                    </FieldLabel>

                    <Input
                      id="register-userName"
                      type="text"
                      autoComplete="username"
                      placeholder={t('validation.username_placeholder')}
                      aria-invalid={Boolean(errors.userName)}
                      className="h-11"
                      {...register('userName')}
                    />

                    {errors.userName && (
                      <FieldDescription className="text-destructive">
                        {errors.userName.message}
                      </FieldDescription>
                    )}
                  </Field>
                </div>

                {/* email */}
                <Field>
                  <FieldLabel htmlFor="register-email">
                    {t('validation.email')}
                  </FieldLabel>

                  <Input
                    id="register-email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="h-11"
                    {...register('email')}
                  />

                  {errors.email && (
                    <FieldDescription className="text-destructive">
                      {errors.email.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* phone */}
                <Field>
                  <FieldLabel htmlFor="register-phoneNumber">
                    {t('validation.phoneNumber')}
                  </FieldLabel>

                  <Input
                    id="register-phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    placeholder="0590000000"
                    aria-invalid={Boolean(errors.phoneNumber)}
                    className="h-11"
                    {...register('phoneNumber')}
                  />

                  {errors.phoneNumber && (
                    <FieldDescription className="text-destructive">
                      {errors.phoneNumber.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* password */}
                <Field>
                  <FieldLabel htmlFor="register-password">
                    {t('validation.password')}
                  </FieldLabel>

                  <Input
                    id="register-password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    aria-invalid={Boolean(errors.password)}
                    className="h-11"
                    {...register('password')}
                  />

                  {errors.password && (
                    <FieldDescription className="text-destructive">
                      {errors.password.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* server error */}
                {errors.root && (
                  <div
                    className="bg-destructive/10 text-destructive
                      rounded-xl px-3 py-2 text-center text-sm"
                  >
                    {errors.root.message}
                  </div>
                )}

                {/* submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 h-12 w-full rounded-xl text-base"
                >
                  {isSubmitting
                    ? t('validation.creating_account')
                    : t('validation.register')}
                </Button>
              </FieldGroup>
            </form>

            {/* login */}
            <div
              className="text-muted-foreground mt-5 flex items-center
                justify-center gap-1 text-sm"
            >
              <span>{t('validation.have_account')}</span>

              <Link
                to="/auth/login"
                className="text-primary hover:text-primary-hover
                  font-semibold transition-colors"
              >
                {t('validation.login')}
              </Link>
            </div>

            {/* settings */}
            <div
              className="border-border mt-7 flex items-center
                justify-center gap-1 border-t pt-5"
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="gap-2 rounded-full"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}

                <span>{theme === 'dark' ? t('navbar.light') : t('navbar.dark')}</span>
              </Button>

              <span className="bg-border h-4 w-px" />

              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="rounded-full"
              >
                {currentLanguage === 'ar' ? 'EN' : 'AR'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
