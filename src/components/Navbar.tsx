"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import TopBar from "./TopBar";
import { RiCloseFill, RiMenu2Line } from '@remixicon/react';
import { usePathname } from 'next/navigation';
import { ROUTES_META } from '@/constants/routeMeta';
import Image from 'next/image';
// import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);
  const path = usePathname();
  const routeMeta = ROUTES_META[path];
  if (routeMeta && !routeMeta.showFooter) {
    return null;
  }

  return (
    <header>
      <TopBar />
      <nav className="relative flex flex-col md:flex-row md:justify-between md:items-center py-1 px-4 md:px-24">
        <div className="flex justify-between items-center w-full">
          <div className="md:text-3xl text-2xl">
            <Image src="/logo.png" alt="logo" width={1386} height={571} quality={100} className='-z-20 w-40 h-16'/>
          </div>
          {/* <div className="md:text-3xl text-2xl">Mentor Connect</div> */}
          <button
            className="md:hidden z-50"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? <RiCloseFill size={24} /> : <RiMenu2Line size={24} />}
          </button>
        </div>
        <div className={`fixed top-0 right-0 z-40 h-full w-full bg-white  transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0 menu-drawer-bg' : 'translate-x-full'} md:relative md:transform-none md:flex md:w-auto md:bg-transparent md:transition-none`}>
          <ul className="flex flex-col md:flex-row justify-center items-center h-full md:h-auto">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="my-6 md:my-0 md:mx-5 text-2xl md:text-base opacity-70 font-bold cursor-pointer hover:scale-110"
              >
                <Link href={item.href} onClick={() => setIsDrawerOpen(false)}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;