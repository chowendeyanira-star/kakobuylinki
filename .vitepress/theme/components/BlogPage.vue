<template>
  <div class="blog-page">
    <div class="blog-container">
      <!-- Left: Article Cards (4/5) -->
      <main class="blog-main">
        <div class="blog-header">
          <h1 class="blog-title">Blog</h1>
          <p class="blog-desc">Guides, reviews, and insights to help you shop smarter on Kakobuy Spreadsheet.</p>
        </div>

        <div
          v-for="series in visibleArticleSeries"
          :key="series.name"
          class="series-section"
        >
          <h2 class="series-title">{{ series.name }}</h2>
          <div class="article-grid">
            <a
              v-for="article in series.articles"
              :key="article.link"
              :href="article.link"
              class="article-card"
            >
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <span class="article-read-more">Read more &rarr;</span>
            </a>
          </div>
        </div>
      </main>

      <!-- Right: Recommended Sidebar (1/5) -->
      <aside class="blog-sidebar">
        <h2 class="sidebar-title">Recommended</h2>
        <div
          v-for="series in visibleRecommendedSeries"
          :key="series.name"
          class="sidebar-group"
        >
          <h3 class="sidebar-group-title">{{ series.name }}</h3>
          <ul class="sidebar-links">
            <li v-for="article in series.articles" :key="article.link">
              <a :href="article.link">{{ article.title }}</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- Explore More -->
    <section class="explore-more">
      <div class="explore-container">
        <h2 class="explore-title">Explore More</h2>
        <div class="explore-grid">
          <a href="/" class="explore-card">
            <div class="explore-icon">&#127968;</div>
            <h3>Home</h3>
            <p>Return to the homepage for a full overview of our site.</p>
          </a>
          <a href="/blog/about" class="explore-card">
            <div class="explore-icon">&#8505;</div>
            <h3>About</h3>
            <p>Learn more about our mission and how we help you find the best products.</p>
          </a>
          <a href="/shoes" class="explore-card">
            <div class="explore-icon">&#128095;</div>
            <h3>Shoes</h3>
            <p>Discover the best sneakers, boots, and casual footwear.</p>
          </a>
          <a href="/clothes" class="explore-card">
            <div class="explore-icon">&#128085;</div>
            <h3>Clothes</h3>
            <p>Explore streetwear, hoodies, jackets, and more.</p>
          </a>
          <a href="/hats" class="explore-card">
            <div class="explore-icon">🧢</div>
            <h3>Hats</h3>
            <p>Find the perfect cap, beanie, or bucket hat.</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { indexableBlogPaths } from '../../indexing-policy.mjs'

const articleSeries = [
  { name: 'Core Guides', articles: [
    { title: 'Start Here', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-start-here/' },
    { title: 'Shoes Guide', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-shoes-guide/' },
    { title: 'Clothes Guide', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-clothes-guide/' },
    { title: 'Accessories Guide', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-accessories-guide/' },
    { title: 'Sizing and Materials', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-sizing-guide/' },
    { title: 'Source Review', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-source-review/' },
    { title: 'Pricing References', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-price-guide/' },
    { title: 'Style Index', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-style-guide/' },
    { title: 'Latest Updates', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/kakobuy-updates/' },
    { title: 'About This Directory', excerpt: 'Focused research guide for responsible product comparison and external navigation.', link: '/blog/about/' },
  ]},
]

const recommendedSeries = articleSeries

function isIndexableArticle(article) {
  if (!article.link.startsWith('/blog/')) return true
  return indexableBlogPaths.has(article.link.replace(/\/$/, ''))
}

function filterSeries(series) {
  return series
    .map((group) => ({ ...group, articles: group.articles.filter(isIndexableArticle) }))
    .filter((group) => group.articles.length > 0)
}

const visibleArticleSeries = computed(() => filterSeries(articleSeries))
const visibleRecommendedSeries = computed(() => filterSeries(recommendedSeries))
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: #fafafa;
  padding-top: 24px;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 32px;
  align-items: start;
}

/* ---- Main Content ---- */
.blog-main {
  min-width: 0;
}

.blog-header {
  margin-bottom: 40px;
}

.blog-title {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.blog-desc {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.6;
}

/* ---- Series Section ---- */
.series-section {
  margin-bottom: 48px;
}

.series-title {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #d4af37;
  display: inline-block;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

/* ---- Article Card ---- */
.article-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.article-card:hover {
  border-color: #d4af37;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.article-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.article-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 12px 0;
  flex-grow: 1;
}

.article-read-more {
  font-size: 13px;
  font-weight: 600;
  color: #d4af37;
  transition: color 0.2s ease;
}

.article-card:hover .article-read-more {
  color: #b8960c;
}

/* ---- Sidebar ---- */
.blog-sidebar {
  position: sticky;
  top: 80px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px 20px;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #d4af37;
}

.sidebar-group {
  margin-bottom: 20px;
}

.sidebar-group:last-child {
  margin-bottom: 0;
}

.sidebar-group-title {
  font-size: 13px;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px 0;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-links li {
  margin-bottom: 6px;
}

.sidebar-links a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.sidebar-links a:hover {
  color: #d4af37;
}

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .blog-container {
    grid-template-columns: 1fr;
  }

  .blog-sidebar {
    position: static;
    order: -1;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .blog-title {
    font-size: 28px;
  }

  .blog-container {
    padding: 0 16px;
  }

  .article-card {
    padding: 16px;
  }

  .explore-grid {
    grid-template-columns: 1fr;
  }
}

/* Explore More */
.explore-more {
  background: #f8f9fa;
  padding: 64px 0;
  margin-top: 48px;
}

.explore-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.explore-title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;
}

.explore-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.explore-card {
  display: block;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 20px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
}

.explore-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transform: translateY(-4px);
  border-color: #d4af37;
}

.explore-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.explore-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.explore-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}
</style>