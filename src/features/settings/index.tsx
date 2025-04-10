import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { IconBrowserCheck, IconNotification, IconPalette, IconTool, IconUser } from '@tabler/icons-react';
import { Separator } from '../../components/ui/separator';
import { Header } from '../../components/layout/header';
import { Main } from '../../components/layout/main';
import { ProfileDropdown } from '../../components/profile-dropdown';
import { Search } from '../../components/search';
import { ThemeSwitch } from '../../components/theme-switch';
import SidebarNav from './components/sidebar-nav';
import SettingsProfile from './profile';
import SettingsAccount from './account';
import SettingsAppearance from './appearance';
import SettingsNotifications from './notifications';
import SettingsDisplay from './display';

export default function Settings() {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to profile page by default when accessing /settings
  useEffect(() => {
    if (location.pathname === '/settings') {
      navigate('profile');
    }
  }, [location.pathname, navigate]);
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fixed>
        <div className='space-y-0.5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>Settings</h1>
          <p className='text-muted-foreground'>Manage your account settings and set e-mail preferences.</p>
        </div>
        <Separator className='my-4 lg:my-6' />
        <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='top-0 lg:sticky lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex w-full overflow-y-hidden p-1 pr-4'>
            <Routes>
              <Route path='/profile' element={<SettingsProfile />} />
              <Route path='/account' element={<SettingsAccount />} />
              <Route path='/appearance' element={<SettingsAppearance />} />
              <Route path='/notifications' element={<SettingsNotifications />} />
              <Route path='/display' element={<SettingsDisplay />} />
            </Routes>
          </div>
        </div>
      </Main>
    </>
  );
}

const sidebarNavItems = [
  {
    title: 'Profile',
    icon: <IconUser size={18} />,
    href: 'profile',
  },
  {
    title: 'Account',
    icon: <IconTool size={18} />,
    href: 'account',
  },
  {
    title: 'Appearance',
    icon: <IconPalette size={18} />,
    href: 'appearance',
  },
  {
    title: 'Notifications',
    icon: <IconNotification size={18} />,
    href: 'notifications',
  },
  {
    title: 'Display',
    icon: <IconBrowserCheck size={18} />,
    href: 'display',
  },
];
