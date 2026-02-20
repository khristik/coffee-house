import Image from 'next/image';
import Link from 'next/link';
import { MENU_ITEMS } from '@/app/constants';

export default function CompactBentoMenu() {
  // Обмежуємо кількість елементів для Bento-сітки (перші 5)
  const displayItems = MENU_ITEMS.slice(0, 5);

  return (
    <section id="menu" className="section-space bg-gray-light">
      <div className="container-custom">
        <div className="mb-8">
          <p className="overline-text text-brand-500">
            We have more than just coffee!
          </p>
          <h2 className="section-title mt-2 mb-4">Our Menu & Beans</h2>
          <div className="divider"></div>
        </div>

        <div className="menu-grid">
          {displayItems.map((item, idx) => {
            const isFeatured = idx === 0;

            return (
              <Link
                key={item.name}
                href={item.link}
                className={`img-box group ${
                  isFeatured ? 'menu-item-featured' : 'menu-item-standard'
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  priority={isFeatured}
                  className="img-zoom"
                  sizes={isFeatured ? '50vw' : '25vw'}
                />

                <div className="img-overlay flex items-end p-5">
                  <div>
                    {isFeatured && (
                      <span className="menu-badge">New Arrival</span>
                    )}
                    <h4 className="menu-item-title">{item.name}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
