'use client';

import { SidebarButton } from './sidebar-button';
import { SidebarItems } from '../src/app/types';
import Link from 'next/link';
import { Separator } from './ui/separator';
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { LogOut, MoreHorizontal, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const pathname = usePathname();

  return (
    <aside className='w-[240px] max-w-xs h-full fixed left-0 top-0 z-40 border-r'>
      <div className='h-full px-3 py-4'>
        <div className='mt-1'>
          <div className='flex flex-col gap-1 w-full'>
            {props.sidebarItems.links.map((link : any, index : number) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  variant={pathname === link.href ? 'secondary' : 'ghost'}
                  icon={link.icon}
                  className='w-full'
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {props.sidebarItems.extras}
          </div>
        </div>
      </div>
    </aside>
  );
}