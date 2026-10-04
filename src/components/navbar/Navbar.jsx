import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import useAuthStore from '../../store/useAuthStore';
import { Menu, Moon, Search, ShoppingCart, Sun, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/theme-provider';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const logout = useAuthStore((state) => state.logout);
  const token = useAuthStore((state) => state.token);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const currentLanguage = i18n.resolvedLanguage;

  const toggleLanguage = () => {
    const language = currentLanguage === 'ar' ? 'en' : 'ar';

    i18n.changeLanguage(language);
  };

  const navLinks = [
    {
      name: t('navbar.home'),
      to: '/',
    },
    {
      name: t('navbar.books'),
      to: '/books',
    },
    {
      name: t('navbar.categories'),
      to: '/categories',
    },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div
        className="bg-card mt-3 flex w-full flex-wrap items-center
          justify-between gap-x-2 gap-y-2 rounded-4xl px-3 py-2
          lg:flex-nowrap lg:gap-4 lg:py-1"
      >
        {/* logo side */}
        <Link
          to="/"
          className="order-1 flex shrink-0 items-center gap-1"
        >
          <img
            src={logo}
            alt="Athar Logo"
            className="athar-logo w-9 contain-content sm:w-11 lg:w-14"
          />

          <span
            className="text-primary text-xl font-bold sm:text-2xl
              lg:text-3xl"
          >
            {t('app.name')}
          </span>
        </Link>

        {/* desktop search side */}
        <div
          className="focus-within:border-primary
            focus-within:ring-primary/20 order-2 hidden min-w-0 flex-1
            items-center rounded-4xl border px-3 transition-colors
            focus-within:ring-2 md:flex md:max-w-80 xl:max-w-96"
        >
          <Search size={18} className="text-muted-foreground shrink-0" />

          <Input
            type="search"
            placeholder={t('navbar.search_placeholder')}
            className="min-w-0 border-0 bg-transparent px-2
              shadow-none focus-visible:ring-0
              focus-visible:ring-offset-0 dark:bg-transparent"
          />
        </div>

        {/* Links side */}
        <div
          className="order-2 flex min-w-0 flex-1 items-center
            justify-center gap-2 sm:gap-3 lg:order-3 lg:flex-none
            lg:gap-4"
        >
          {navLinks.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className="text-muted-foreground hover:text-primary
                text-xs font-semibold whitespace-nowrap
                transition-colors sm:text-sm md:text-base lg:text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* desktop icon side */}
        <div
          className="order-4 hidden shrink-0 items-center gap-1
            lg:flex"
        >
          {/* cart button */}
          <Link
            to="/cart"
            className="hover:bg-accent hover:text-accent-foreground
              inline-flex size-9 items-center justify-center
              rounded-full transition-colors"
          >
            <ShoppingCart size={18} />
          </Link>

          {/* theme button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent hover:text-accent-foreground
              rounded-full transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* language button */}
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="hover:bg-accent hover:text-accent-foreground
              rounded-full transition-colors"
          >
            {currentLanguage === 'ar' ? 'EN' : 'AR'}
          </Button>

          {/* account nav */}

          {/* not logged in */}
          {!token && (
            <>
              <Link
                to="/auth/login"
                className="hover:bg-accent
                  hover:text-accent-foreground inline-flex h-9
                  items-center justify-center rounded-full px-3
                  text-sm font-medium transition-colors"
              >
                {t('navbar.login')}
              </Link>

              <Link
                to="/auth/register"
                className="bg-primary text-primary-foreground
                  hover:bg-primary-hover inline-flex h-9 items-center
                  justify-center rounded-full px-3 text-sm font-medium
                  transition-colors"
              >
                {t('navbar.register')}
              </Link>
            </>
          )}

          {/* logged in */}
          {token && (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-accent
                      hover:text-accent-foreground rounded-full
                      transition-colors"
                  />
                }
              >
                <User size={18} />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem render={<Link to="/profile" />}>
                  {t('navbar.profile')}
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive focus:text-destructive
                    cursor-pointer"
                >
                  {t('navbar.logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* mobile menu */}
        <div className="order-3 shrink-0 lg:hidden">
          <Sheet>
            <SheetTrigger
              className="hover:bg-accent hover:text-accent-foreground
                inline-flex size-9 items-center justify-center
                rounded-full transition-colors"
            >
              <Menu size={20} />
            </SheetTrigger>

            <SheetContent
              side={currentLanguage === 'ar' ? 'right' : 'left'}
              className="w-72"
            >
              <SheetHeader>
                <SheetTitle
                  className="text-primary text-center text-2xl
                    font-bold"
                >
                  {t('app.name')}
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {/* cart */}
                <Link
                  to="/cart"
                  className="hover:bg-accent flex items-center
                    justify-center gap-2 rounded-xl px-3 py-2"
                >
                  <ShoppingCart size={18} />
                  {t('navbar.cart')}
                </Link>

                {/* theme */}
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className="justify-center gap-2 rounded-xl"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}

                  {theme === 'dark' ? t('navbar.light') : t('navbar.dark')}
                </Button>

                {/* language */}
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="justify-center gap-2 rounded-xl"
                >
                  <span>{currentLanguage === 'ar' ? 'EN' : 'AR'}</span>
                  <span>{currentLanguage === 'ar' ? 'English' : 'العربية'}</span>
                </Button>

                <div className="my-2 border-t" />

                {/* not logged in */}
                {!token && (
                  <>
                    <Link
                      to="/auth/login"
                      className="hover:bg-accent rounded-xl px-3 py-2
                        text-center"
                    >
                      {t('navbar.login')}
                    </Link>

                    <Link
                      to="/auth/register"
                      className="bg-primary text-primary-foreground
                        hover:bg-primary-hover rounded-xl px-3 py-2
                        text-center"
                    >
                      {t('navbar.register')}
                    </Link>
                  </>
                )}

                {/* logged in */}
                {token && (
                  <>
                    <Link
                      to="/profile"
                      className="hover:bg-accent flex items-center
                        justify-center gap-2 rounded-xl px-3 py-2"
                    >
                      <User size={18} />
                      {t('navbar.profile')}
                    </Link>

                    <Button
                      variant="ghost"
                      onClick={handleLogout}
                      className="text-destructive
                        hover:text-destructive justify-center
                        rounded-xl"
                    >
                      {t('navbar.logout')}
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* mobile search side */}
        <div
          className="focus-within:border-primary
            focus-within:ring-primary/20 order-4 flex w-full
            items-center rounded-4xl border px-3 transition-colors
            focus-within:ring-2 md:hidden"
        >
          <Search size={18} className="text-muted-foreground shrink-0" />

          <Input
            type="search"
            placeholder={t('navbar.search_placeholder')}
            className="border-0 bg-transparent px-2 shadow-none
              focus-visible:ring-0 focus-visible:ring-offset-0
              dark:bg-transparent"
          />
        </div>
      </div>
    </>
  );
}
