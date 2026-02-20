import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative flex h-screen items-center">
      <Image
        src="/coffee-3.jpg"
        alt="Barista preparing coffee at Coffee House"
        fill
        priority
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-left">
          <h1 className="hero-title">
            Welcome to <br /> Our Coffee Shop
          </h1>

          <p className="font-pt-sans mb-8 text-lg text-white">
            Freshly brewed coffee. Moments worth savoring, one cup at a time —
            your daily coffee ritual, elevated in your neighborhood coffee
            haven.
          </p>

          <Link href="/#menu" className="btn btn-primary">
            Explore Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
