// components/WhoWeAre.tsx
import Image from 'next/image';
import Link from 'next/link';
import { BEANS_PHOTOS } from '@/app/constants';

const OurOfferings = () => {
  return (
    <section id="beans" className="section-space bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
          {/* Контейнер для фото */}
          <div className="mx-auto flex w-full max-w-[340px] items-stretch gap-4 sm:max-w-none md:gap-6 lg:w-1/2">
            {BEANS_PHOTOS.map((photo, index) => (
              /* Додаємо адаптивну висоту самому beans-photo-strip,
                 щоб фон і тінь стискалися разом із картинкою */
              <div
                key={index}
                className="beans-photo-strip h-[220px] flex-1 sm:h-[400px] md:h-[520px]"
              >
                {/* h-full змушує обгортку картинки займати рівно стільки місця, скільки дає батько */}
                <div className="relative h-full w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 20vw"
                    priority={photo.priority}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Блок з текстом */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="section-title mb-4">The Beans</h2>
            <p className="overline-text mb-6 text-gray-600">
              Quality cacao from around the globe
            </p>
            <div className="divider mx-auto lg:mx-0"></div>
            <p className="section-desc">
              From small-lot farms to your morning ritual, we source only the
              world's finest beans. Roasted with precision and crafted with
              passion, every cup delivers a symphony of warmth and depth.
              Discover the artistry behind our roast and the dedicated hands
              that bring your coffee to life.
            </p>
            <div className="mt-8">
              <Link href="/#menu" className="btn btn-primary">
                Explore the Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
