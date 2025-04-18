'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const getMenuItemClass = (path: string, currentPath: string) => {
  const baseClass = 'flex items-center gap-1 lg:px-2 lg:py-2 px-5 py-4 border-b-gray-200 border-b lg:border-b-0';
  const activeClass = 'text-blue-500 font-bold';
  return `${baseClass} ${path === currentPath ? activeClass : ''}`;
};

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/about-us', label: 'About Us' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button className="flex font-medium text-black lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="material-symbols-rounded">menu</span>
      </button>
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={closeMenu}></div>}
      <nav
        className={`fixed left-0 top-0 z-50 h-full w-80 transform bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } font-medium text-black lg:relative lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:space-x-6 lg:bg-transparent lg:shadow-none`}
      >
        {menuItems.map(({ href, label }) => (
          <Link key={href} href={href} className={getMenuItemClass(href, pathname as string)}>
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navigation;
