// ============================================================
// Kakobuy Spreadsheet Site Configuration
// Kakobuylinki.com - Fashion Finds Resource & Buying Guide
// ============================================================

export const siteConfig = {

  // ---- Brand ----
  brand: {
    name: 'Kakobuy Spreadsheet',
    tagline: 'Independent Men’s Clothing Directory & Resource Guide',
    description: 'Independent men’s clothing directory that organizes product information, fit notes, category guides, and links to external spreadsheet resources.',
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
      name: 'Men’s Clothing',
      icon: '',
      description: 'Men’s shirts, hoodies, jackets, pants and everyday layers. Compare fit, fabric, construction, and care notes.',
      blogLink: '/blog/kakobuy-clothes-guide/',
    },
    {
      id: 'hats',
      name: 'Accessories',
      icon: '',
      description: 'Bags, hats, watches, and daily accessories. Check dimensions, materials, compatibility, and care.',
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
    title: 'Kakobuy Spreadsheet | Independent Men’s Clothing Directory',
    description: 'An independent men’s clothing directory with fit notes, material comparisons, research guides, and clearly disclosed external spreadsheet resources.',
    keywords: ['kakobuy spreadsheet', 'men’s clothing directory', 'menswear fit guide', 'product information', 'external resource'],
    ga4: 'G-N9BCQ2XS4W',
  },

  // ---- Announcement Bar ----
  announcement: 'Independent product directory. Browse categories and review external resource details before leaving this site.',
}
