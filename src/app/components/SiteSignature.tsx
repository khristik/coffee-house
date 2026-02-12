import Link from 'next/link';
import { SOCIAL_LINKS } from '@/app/constants';

export default function SiteSignature() {
  return (
    <footer>
      <div className="mx-auto flex flex-col items-center justify-between gap-6 px-6 pt-20 md:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{' '}
          <span className="font-heading font-bold tracking-wider text-white uppercase">
            Coffee Place
          </span>
          . All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          {SOCIAL_LINKS.map((social) => (
            <SocialIcon
              key={social.ariaLabel}
              href={social.href}
              ariaLabel={social.ariaLabel}
              path={social.path}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

// Допоміжний компонент для іконок
function SocialIcon({
  href,
  ariaLabel,
  path,
}: {
  href: string;
  ariaLabel: string;
  path: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-brand-500 transform text-gray-400 transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </Link>
  );
}
