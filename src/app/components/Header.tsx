'use client';

import React from 'react';
import Link from 'next/link';
import { useNavigation } from '../hooks/use-navigation';
import { NAV_LINKS } from '@/app/constants';

const Header = () => {
  const { isOpen, toggle, close } = useNavigation();

  return (
    <header className="header-main" role="banner">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="header-logo" onClick={close}>
          CoffeePlace
        </Link>

        <nav className="hidden space-x-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="header-burger"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
        >
          <svg
            className="burger-icon"
            data-active={isOpen}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className="mobile-menu-overlay"
        data-menu-open={isOpen}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
      >
        <nav className="flex flex-col items-center space-y-8">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              tabIndex={isOpen ? 0 : -1}
              className="mobile-menu-link text-2xl"
              style={{ transitionDelay: isOpen ? `${idx * 75}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
