 
import fs from 'fs'; 
import { Sitemap } from 'sitemap';

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

const sitemap = new Sitemap({ pages });
const xml = sitemap.toXML();

fs.writeFile('./public/sitemap.xml', xml, (err) => {
  if (err) throw err;
  console.log('Sitemap generated successfully!');
});
