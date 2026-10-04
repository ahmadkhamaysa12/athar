import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { KeyRound, LockKeyhole, Mail, Moon, ShieldCheck, Sun } from 'lucide-react';

import logo from '../../assets/logo.png';
import axiosInstance from '../../api/axiosInstance';
import { ResetPasswordSchema } from '../../validations/ResetPasswordSchema';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function ForgotPassword() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();

  const [isSendingCode, setIsSendingCode] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

  const currentLanguage = i18n.resolvedLanguage || i18n.language;

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
    getValues,
    trigger,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ResetPasswordSchema(t)),
    mode: 'onBlur',
  });

  const sendCode = async () => {
    const isEmailValid = await trigger('email');

    if (!isEmailValid) {
      return;
    }

    const email = getValues('email');

    try {
      setIsSendingCode(true);
      setCodeSent(false);
      clearErrors('root');

      await axiosInstance.post('/auth/Account/SendCode', {
        email,
      });

      setCodeSent(true);
    } catch (error) {
      setError('root', {
        type: 'server',
        message: error.response?.data?.message || t('validation.send_code_failed'),
      });
    } finally {
      setIsSendingCode(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      clearErrors('root');

      await axiosInstance.patch('/auth/Account/ResetPassword', {
        email: data.email,
        code: data.code,
        newPassword: data.newPassword,
      });

      navigate('/auth/login');
    } catch (error) {
      setError('root', {
        type: 'server',
        message: error.response?.data?.message || t('validation.reset_password_failed'),
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
          max-w-5xl overflow-hidden rounded-3xl border lg:grid
          lg:min-h-[650px] lg:grid-cols-[0.85fr_1.15fr]"
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

          {/* logo */}
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

          {/* recovery information */}
          <div className="relative z-10">
            <div
              className="bg-primary-foreground/10 mb-5 flex size-12
                items-center justify-center rounded-2xl"
            >
              <KeyRound size={22} />
            </div>

            <h2
              className="font-display text-4xl leading-relaxed
                font-bold"
            >
              {t('validation.reset_password_title')}
            </h2>

            <p
              className="text-primary-foreground/70 mt-3 max-w-sm
                text-sm leading-7"
            >
              {t('validation.reset_password_description')}
            </p>

            {/* steps */}
            <div className="mt-9 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="bg-primary-foreground/10 flex size-9
                    items-center justify-center rounded-full"
                >
                  <Mail size={17} />
                </div>

                <span className="text-sm">{t('validation.email')}</span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="bg-primary-foreground/10 flex size-9
                    items-center justify-center rounded-full"
                >
                  <ShieldCheck size={17} />
                </div>

                <span className="text-sm">{t('validation.verification_code')}</span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="bg-primary-foreground/10 flex size-9
                    items-center justify-center rounded-full"
                >
                  <LockKeyhole size={17} />
                </div>

                <span className="text-sm">{t('validation.new_password')}</span>
              </div>
            </div>
          </div>

          <p
            className="text-primary-foreground/60 relative z-10
              text-sm"
          >
            {t('validation.reset_security_text')}
          </p>
        </div>

        {/* form side */}
        <div
          className="flex items-center justify-center px-5 py-8
            sm:px-8 lg:px-12"
        >
          <div className="w-full max-w-lg">
            {/* mobile logo */}
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
              <span className="athar-kicker">{t('validation.restore_access')}</span>

              <h1
                className="font-display text-foreground mt-3 text-4xl
                  font-bold"
              >
                {t('validation.reset_password_title')}
              </h1>

              <p
                className="text-muted-foreground mt-2 text-sm
                  leading-6"
              >
                {t('validation.reset_password_description')}
              </p>
            </div>

            {/* reset password form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup className="gap-5">
                {/* email */}
                <Field>
                  <FieldLabel htmlFor="reset-email">{t('validation.email')}</FieldLabel>

                  <div className="flex gap-2">
                    <Input
                      id="reset-email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className="h-11 min-w-0 flex-1"
                      {...register('email')}
                    />

                    <Button
                      type="button"
                      onClick={sendCode}
                      disabled={isSendingCode}
                      className="h-11 shrink-0"
                    >
                      {isSendingCode
                        ? t('validation.sending_code')
                        : t('validation.send_code')}
                    </Button>
                  </div>

                  {errors.email && (
                    <FieldDescription className="text-destructive">
                      {errors.email.message}
                    </FieldDescription>
                  )}

                  {codeSent && (
                    <FieldDescription className="text-success">
                      {t('validation.code_sent')}
                    </FieldDescription>
                  )}
                </Field>

                {/* verification code */}
                <Field>
                  <FieldLabel htmlFor="reset-code">
                    {t('validation.verification_code')}
                  </FieldLabel>

                  <Input
                    id="reset-code"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    placeholder="0000"
                    maxLength={4}
                    aria-invalid={Boolean(errors.code)}
                    className="h-11"
                    {...register('code')}
                  />

                  {errors.code && (
                    <FieldDescription className="text-destructive">
                      {errors.code.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* new password */}
                <Field>
                  <FieldLabel htmlFor="reset-password">
                    {t('validation.new_password')}
                  </FieldLabel>

                  <Input
                    id="reset-password"
                    type="password"
                    autoComplete="new-password"
                    placeholder={t('validation.new_password_placeholder')}
                    aria-invalid={Boolean(errors.newPassword)}
                    className="h-11"
                    {...register('newPassword')}
                  />

                  {errors.newPassword && (
                    <FieldDescription className="text-destructive">
                      {errors.newPassword.message}
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

                {/* reset button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 h-12 w-full rounded-xl text-base"
                >
                  {isSubmitting
                    ? t('validation.resetting_password')
                    : t('validation.reset_password_button')}
                </Button>
              </FieldGroup>
            </form>

            {/* login */}
            <div
              className="text-muted-foreground mt-5 flex items-center
                justify-center gap-1 text-sm"
            >
              <span>{t('validation.remember_password')}</span>

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
              {/* theme */}
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

              {/* language */}
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
