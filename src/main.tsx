import './index.css';

import { routes } from 'wasp/client/router';
import { useMemo, useEffect } from 'react'
import { FontProvider } from './context/font-context';
import { ThemeProvider } from './context/theme-context';
import { Outlet, useLocation } from 'react-router-dom';
import { SearchProvider } from './context/search-context';
import { SidebarProvider } from './components/ui/sidebar';
import SkipToMain from './components/skip-to-main';
import { AppSidebar } from './components/layout/app-sidebar';
import { cn } from './lib/utils';

// Render the app
export default function Main() {
  const location = useLocation();
  const isAuthPage = useMemo(() => {
    const path = location.pathname;
    const authPaths = [
      routes.LoginRoute.to,
      routes.SignupRoute.to,
    ] as string[];
    return authPaths.includes(path);
  }, [location.pathname]);
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <FontProvider>
        <SearchProvider>
          <SidebarProvider defaultOpen={true}>
            <SkipToMain />
            {!isAuthPage && <AppSidebar />}
            <div
              id='content'
              className={cn(
                'ml-auto w-full max-w-full',
                'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
                'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
                'transition-[width] duration-200 ease-linear',
                'flex h-svh flex-col',
                'group-data-[scroll-locked=1]/body:h-full',
                'group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh'
              )}
            >
              <Outlet />
            </div>
          </SidebarProvider>
        </SearchProvider>
      </FontProvider>
    </ThemeProvider>
  );
}
