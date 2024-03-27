"use client"
import React, { useEffect, useState } from 'react'
import { Nav } from './ui/nav'
import {
  ChevronRight,
    LayoutDashboard,
    User,
    CreditCard,
  } from "lucide-react"
import { Button } from './ui/button';

  type Props = {};

const SideNavbar = ({} : Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  // State variable to hold window width
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width
  // const updateWindowWidth = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // Effect to update window width on mount and resize
  // useEffect(() => {
  //   window.addEventListener('resize', updateWindowWidth);
  //   return () => {
  //     window.removeEventListener('resize', updateWindowWidth);
  //   };
  // }, []);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='bg-white z-50 relative min-w-[80px] min-h-screen border-r px-3 pb-10 pt-20 md:pr-7 lg:pr-5'>
      <div className='md:block hidden'>
          <div className="absolute right-[-20px] top-3">
            <Button
              onClick={toggleSidebar}
              variant="secondary"
              className=" rounded-full p-2"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      <Nav
            // isCollapsed={windowWidth < 768 ? true : isCollapsed}
            isCollapsed={false}
            links={[
              {
                title: "Dashboard",
                href: "/",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Users",
                href: "/users",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Card",
                href: "/bussiness-card",
                icon: CreditCard,
                variant: "ghost",
              },
            ]}
          />
    </div>
  )
}

export default SideNavbar
