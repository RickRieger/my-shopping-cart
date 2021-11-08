import { v4 as uuidv4 } from 'uuid';

const productList = [
  {
    id: uuidv4(),
    title: 'GTRACING Gaming Chair ',
    description:
      'Gaming Chair Racing Office Computer Game Chair Ergonomic Backrest and Seat Height Adjustment Recliner Swivel Rocker with Headrest and Lumbar Pillow E-Sports Chair Red',
    brand: 'GTRACING',
    price: 9999,
    image: 'https://m.media-amazon.com/images/I/61NiToaqulS._AC_UL320_.jpg',
  },
  {
    id: uuidv4(),
    title: 'AutoFull Gaming Chair',
    description:
      'Gaming Chair Office Chair Desk Chair with Ergonomic Lumbar Support, Racing Style PU Leather PC High Back Adjustable Swivel Task Chair with Footrest，Brown.',
    brand: 'AutoFull',
    price: 23999,
    image: 'https://m.media-amazon.com/images/I/61Yi7cIervS._AC_UL320_.jpg',
  },
  {
    id: uuidv4(),
    title: 'LG 34WN80C-B UltraWide Monitor',
    description:
      '34” 21:9 Curved WQHD (3440 x 1440) IPS Display, USB Type-C (60W PD) , sRGB 99% Color Gamut, 3-Side Virtually Borderless Design, Tilt/Height Adjustable Stand - Black.',
    brand: 'LG',
    price: 54999,
    image: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY218_.jpg',
  },
  {
    id: uuidv4(),
    title: 'Logitech MX Master 3 Advanced Wireless Mouse',
    description:
      'Ultrafast Scrolling, Ergonomic, 4000 DPI, Customization, USB-C, Bluetooth, USB, Apple Mac, Microsoft PC Windows, Linux, iPad - Graphite.',
    brand: 'Logitech',
    price: 9999,
    image: 'https://m.media-amazon.com/images/I/614w3LuZTYL._AC_UY218_.jpg',
  },
  {
    id: uuidv4(),
    title: 'Logitech G19',
    description: 'Programmable Gaming Keyboard with Color Display.',
    brand: 'Logitech',
    price: 78100,
    image: 'https://m.media-amazon.com/images/I/8188Pzvcn0L._AC_UY218_.jpg',
  },
  {
    id: uuidv4(),
    title: 'Stand Up Desk',
    description:
      'Stand Up Desk Store Solid Wood Top Electric Adjustable Height Standing Desk with Programmable Memory (White Frame/Natural Birch Top, 60" Wide).',
    brand: 'S Standup',
    price: 89900,
    image: 'https://m.media-amazon.com/images/I/51hVgv45sOS._AC_UL320_.jpg',
  },
];

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(productList);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
