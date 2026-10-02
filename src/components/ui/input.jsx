import { Input as InputPrimitive } from '@base-ui/react/input';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        `border-border bg-background text-foreground
        placeholder:text-muted-foreground focus-visible:border-primary
        focus-visible:ring-primary/20 disabled:bg-muted
        aria-invalid:border-destructive
        aria-invalid:ring-destructive/20 dark:border-border
        dark:bg-card dark:text-foreground
        dark:placeholder:text-muted-foreground
        dark:focus-visible:border-primary
        dark:focus-visible:ring-primary/20 h-10 w-full min-w-0
        rounded-xl border px-3 py-2 text-base shadow-none
        transition-colors outline-none focus-visible:ring-2
        disabled:pointer-events-none disabled:cursor-not-allowed
        disabled:opacity-50 aria-invalid:ring-2 md:text-sm`,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
