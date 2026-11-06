import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://json-diff.guidehollow.com',output:'static',trailingSlash:'always',integrations:[sitemap({filter:url=>new URL(url).pathname==='/'})]});
