import Image from 'next/image';
import Form from './Form';
import { CONTACT_INFO } from '@/app/constants';
import SiteSignature from '@/app/components/SiteSignature';

export default function Footer() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden py-10 text-white"
    >
      <Image
        src="/bg5-1.jpg"
        alt="Coffee background"
        fill
        priority
        className="-z-20 scale-105 object-cover"
      />

      <div className="section-overlay" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="order-1 w-full lg:order-2 lg:w-1/2">
            <div className="mb-8">
              <h3 className="font-pt-sans text-lg tracking-wider uppercase">
                Send Message
              </h3>
            </div>
            <div className="mx-auto max-w-xl lg:mx-0">
              <Form />
            </div>
          </div>

          <div className="order-2 w-full space-y-10 lg:order-1 lg:w-1/2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="section-title text-white">Visit Us</h2>
              <div className="divider mt-4 bg-white" />
            </div>

            <div className="mx-auto max-w-md space-y-8 lg:mx-0">
              {CONTACT_INFO.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start space-x-5 text-left"
                >
                  <div className="contact-item-icon text-brand-light shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="contact-label-small mb-1 text-gray-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-item-value hover:text-brand-light block text-lg transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="contact-item-value text-lg">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SiteSignature />
      </div>
    </section>
  );
}
