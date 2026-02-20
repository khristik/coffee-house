// components/SeasonSpecials.tsx
import Image from 'next/image';
import { SEASONAL_DATA } from '@/app/constants';

export default function SeasonSpecials() {
  const [mainImg, secondaryImg] = SEASONAL_DATA;

  return (
    <section id="specials" className="section-space overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* RIGHT (Image Composition) */}
          <div className="relative order-1 hidden h-[550px] w-full lg:order-2 lg:flex lg:basis-1/2">
            {/* Big Image */}
            <div className="img-box specials-big group shadow-lg">
              <Image
                src={mainImg.img}
                alt={mainImg.title}
                fill
                className="img-zoom"
                sizes="40vw"
                priority
              />
              <div className="img-overlay opacity-30 group-hover:opacity-40" />
            </div>

            {/* Small Overlapping Image */}
            <div className="img-box specials-small group shadow-2xl">
              <Image
                src={secondaryImg.img}
                alt={secondaryImg.title}
                fill
                className="img-zoom"
                sizes="20vw"
              />
              <div className="img-overlay opacity-20 group-hover:opacity-30" />
            </div>
          </div>

          {/* LEFT - Text Content */}
          <div className="w-full lg:basis-1/2">
            <div>
              <p className="overline-text text-brand-500">
                Limited-time offers
              </p>
              <h2 className="section-title mt-2 mb-4">Seasonal Specials</h2>
              <div className="divider mx-auto lg:mx-0"></div>

              <div className="mt-10 space-y-8">
                {SEASONAL_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="group mx-auto flex max-w-[500px] items-start gap-4 text-left lg:mx-0"
                  >
                    <div className="mt-2 shrink-0">
                      <span className="dot" />
                    </div>
                    <div>
                      <h4 className="text-md font-heading font-bold tracking-wide text-gray-900 uppercase">
                        {item.title}
                      </h4>
                      <p className="section-desc mt-2 text-sm leading-relaxed text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
