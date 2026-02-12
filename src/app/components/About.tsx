import React from 'react';
import { ABOUT_FEATURES } from '@/app/constants';

export default function About() {
  return (
    <section id="about" className="section-space bg-gray-light">
      <div className="container-custom">
        {/* Заголовок секції */}
        <div className="mb-4 flex flex-col items-center text-center">
          <p className="font-pt-sans text-lg text-gray-700">
            At{' '}
            <span className="font-heading text-brand-500 font-semibold uppercase">
              Coffee Place
            </span>
            , we create moments. Every cup is crafted with care.
          </p>
          <div className="divider mt-4"></div>
        </div>

        {/* Адаптивна сітка */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-3">
          {ABOUT_FEATURES.map((feature, i) => (
            <article
              key={i}
              /* max-w-[320px] — щоб на мобільних текст не розтікався і блок міг відцентруватися.
                mx-auto — центрує весь блок на мобільних.
                md:mx-0 md:max-w-none — на десктопі прибираємо обмеження, щоб блок зайняв усю колонку.
              */
              className="mx-auto flex w-full max-w-[320px] items-start gap-4 md:mx-0 md:max-w-none"
            >
              {/* Іконка */}
              <div className="text-brand-500 pt-1">{feature.icon}</div>

              {/* Текст */}
              <div className="flex flex-col">
                <h3 className="feature-card-title leading-tight">
                  {feature.title}
                </h3>
                <p className="font-pt-sans mt-2 text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
