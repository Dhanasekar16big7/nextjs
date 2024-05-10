'use client';

import {
  Home,
  User,
  CreditCard
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
// import { SidebarItems } from '@/types';
import { SidebarItems } from '../src/app/types';
import { SidebarButton } from './sidebar-button';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    {
      href: '/users',
      icon: User,
      label: 'User',
    },
    {
        href: '/bussiness-card',
        icon: CreditCard,
        label: 'Card',
      },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      {/* <SidebarButton className='w-full'>
        More
      </SidebarButton> */}
      {/* <SidebarButton
        className='w-full justify-center text-white'
        variant='default'
      >
        Tweet
      </SidebarButton> */}
    </div>
  ),
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}