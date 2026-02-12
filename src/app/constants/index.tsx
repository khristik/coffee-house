import React from 'react';
import {
  CoffeeIcon,
  WifiIcon,
  PastryIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from '../components/Icons';

/*** --- NAVIGATION ---***/
export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#beans', label: 'Our Beans' },
  { href: '#specials', label: 'Specials' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
];

/*** --- ABOUT ---***/
export const ABOUT_FEATURES = [
  {
    title: 'Freshly brewed coffee',
    desc: 'From carefully selected beans, roasted to perfection.',
    icon: <CoffeeIcon />,
  },
  {
    title: 'Free Wi-Fi',
    desc: 'Stay connected while enjoying your coffee.',
    icon: <WifiIcon />,
  },
  {
    title: 'Delicious pastries',
    desc: 'Perfectly paired with your drink.',
    icon: <PastryIcon />,
  },
];

export const BEANS_PHOTOS = [
  { src: '/coffee-cup.jpg', alt: 'Preparing coffee', priority: true },
  { src: '/chocolate.png', alt: 'Chocolate cacao beans', priority: false },
];

/*** --- MENU ---***/
export const MENU_ITEMS = [
  {
    name: 'Coffee for Home & Office',
    img: '/coffee-bags.jpg',
    link: '/coffee-home-office',
  },
  { name: 'Coffee', img: '/hotcofee.jpg', link: '/coffee' },
  { name: 'Tea', img: '/Black-Tea.jpg', link: '/tea' },
  { name: 'Desserts', img: '/cupcakes.png', link: '/desserts' },
  { name: 'Drinks', img: '/drinks.png', link: '/drinks' },
];

/*** --- SEASONAL SPECIALS ---***/
export const SEASONAL_DATA = [
  {
    title: 'Evening Pastry Special',
    desc: 'Light and affordable dessert option available after 18:00 — perfect for a sweet treat without overspending',
    img: '/cakes.png',
  },
  {
    title: 'Weekend Sweet Cup',
    desc: 'A special weekend drink at weekday pricing. Order on Saturday or Sunday and enjoy a complimentary house-made mini treat.',
    img: '/cupcake-with-topping.png',
  },
  {
    title: 'Pumpkin Spice Latte',
    desc: 'A creamy autumn drink with pumpkin and aromatic spices. Limited time fall favorite',
    img: '/pumpkin-latte.jpg',
  },
];

/*** --- FOOTER  ---***/
export const CONTACT_INFO = [
  {
    label: 'Address',
    icon: <MapPinIcon />,
    content: '4671 Sugar Camp Road, Owatonna, Minnesota, 55060',
  },
  {
    label: 'Phone',
    content: '507-475-6094',
    icon: <PhoneIcon />,
    href: 'tel:5074756094',
  },
  {
    label: 'Email',
    content: 'hello@coffeeplace.com',
    icon: <MailIcon />,
    href: 'mailto:hello@coffeeplace.com',
  },
];

export const SOCIAL_LINKS = [
  {
    ariaLabel: 'Facebook',
    href: 'https://facebook.com/coffeeplace',
    path: 'M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691V11.29h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.318h3.587l-.467 3.416h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z',
  },
  {
    ariaLabel: 'Instagram',
    href: 'https://instagram.com/coffeeplace',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.059 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324C8.416 2.175 8.796 2.163 12 2.163zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0zM12 7.838a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324z',
  },
  {
    ariaLabel: 'Telegram',
    href: 'https://t.me/coffeeplace',
    path: 'M9.999 15.174L9.997 19.5c.5 0 .719-.216.979-.474l2.351-2.269 4.873 3.557c.893.494 1.527.235 1.752-.828L23.93 5.718c.281-1.266-.457-1.758-1.304-1.43L1.49 11.125c-1.254.494-1.235 1.197-.213 1.518l5.664 1.769 13.127-8.312-10.07 8.074z',
  },
];
