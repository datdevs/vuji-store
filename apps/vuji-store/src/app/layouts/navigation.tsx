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
      <button
        className="lg:hidden text-black font-medium flex"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-rounded">menu</span>
      </button>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
      <nav
        className={`fixed w-80 top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:flex lg:space-x-6 lg:bg-transparent lg:shadow-none lg:h-auto lg:relative lg:w-auto text-black font-medium`}
      >
        {menuItems.map(({ href, label }) => (
          <Link key={href} href={href} className={getMenuItemClass(href, pathname)}>
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navigation;
