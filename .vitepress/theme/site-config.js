// ============================================================
// Kakobuy Spreadsheet Site Configuration
// Kakobuylinki.com - Fashion Finds Resource & Buying Guide
// ============================================================

export const siteConfig = {

  // ---- Brand ----
  brand: {
    name: 'Kakobuy Spreadsheet',
    tagline: 'Independent Product Directory & Resource Guide',
    description: 'Independent product directory that organizes product information, category guides, and links to external spreadsheet resources.',
    primaryColor: '#8B0000',
    accentColor: '#d4af37',
    logoText: 'Kakobuy Spreadsheet',
  },

  // ---- Navigation ----
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Categories', link: '/shoes' },
    { text: 'Latest Updates', link: '/blog' },
    { text: 'About', link: '/blog/about' },
    { text: 'Privacy', link: '/privacy-policy' },
  ],

  // ---- Main Categories ----
  categories: [
    {
      id: 'shoes',
      name: 'Shoes',
      icon: '',
      description: 'Sneakers, boots, casual footwear and more. Find the perfect pair to match your style.',
      blogLink: '/blog/kakobuy-shoes-guide/',
    },
    {
      id: 'clothes',
      name: 'Clothes',
      icon: '',
      description: 'Streetwear, hoodies, jackets, pants and more. Build your wardrobe from the ground up.',
      blogLink: '/blog/kakobuy-clothes-guide/',
    },
    {
      id: 'hats',
      name: 'Hats',
      icon: '',
      description: 'Snapbacks, beanies, bucket hats and fitted caps. The finishing touch to any look.',
      blogLink: '/blog/kakobuy-accessories-guide/',
    },
  ],

  // ---- Featured Categories (Trending) ----
  featuredCategories: [
    { name: 'Sneakers', slug: 'sneakers', image: '/images/hero-sneakers.webp' },
    { name: 'Hoodies', slug: 'hoodies', image: '/images/hero-hoodies.webp' },
    { name: 'T-Shirts', slug: 't-shirts', image: '/images/hero-tshirts.webp' },
    { name: 'Jackets', slug: 'jackets', image: '/images/hero-jackets.webp' },
    { name: 'Pants', slug: 'pants', image: '/images/hero-pants.webp' },
    { name: 'Shirts', slug: 'shirts', image: '/images/hero-shirts.webp' },
    { name: 'Bags', slug: 'bags', image: '/images/hero-bags.webp' },
    { name: 'Watches', slug: 'watches', image: '/images/hero-watches.webp' },
    { name: 'Accessories', slug: 'accessories', image: '/images/hero-accessories.webp' },
    { name: 'Streetwear', slug: 'streetwear', image: '/images/hero-streetwear.webp' },
    { name: 'Casual Wear', slug: 'casual-wear', image: '/images/hero-casual.webp' },
    { name: 'New Arrivals', slug: 'new-arrivals', image: '/images/hero-new-arrivals.webp' },
  ],

  // ---- External Links ----
  links: {
    spreadsheet: '/external-resource',
    contact: 'mailto:hello@kakobuylinki.com',
  },

  // ---- SEO Defaults ----
  seo: {
    hostname: 'https://kakobuylinki.com',
    title: 'Kakobuy Spreadsheet | Independent Product Directory',
    description: 'An independent product directory with organized categories, research notes, and clearly disclosed external spreadsheet resources.',
    keywords: ['kakobuy spreadsheet', 'product directory', 'product information', 'category guide', 'external resource'],
    ga4: 'G-N9BCQ2XS4W',
  },

  // ---- Announcement Bar ----
  announcement: 'Independent product directory. Browse categories and review external resource details before leaving this site.',
}
