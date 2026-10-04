import { Toaster } from 'sonner';
import { useTheme } from '@/components/theme-provider';

export default function AppToaster() {
  const { theme } = useTheme();

  return (
    <Toaster
      theme={theme}
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        className: 'rounded-xl border border-border',
      }}
    />
  );
}
