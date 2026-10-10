<template>
  <div class="home-page">
    <section class="directory-hero">
      <div class="hero-shell">
        <div class="hero-copy">
          <p class="eyebrow">Independent product directory</p>
          <h1>Kakobuy<br /><span>Spreadsheet</span></h1>
          <p class="hero-lede">
            A focused starting point for category research, sizing notes, and clearly disclosed external spreadsheet resources.
          </p>
          <div class="hero-actions">
            <a href="/external-resource" class="primary-action cta-spreadsheet">Review Spreadsheet Resource</a>
            <a href="/blog/kakobuy-start-here/" class="secondary-action">Start with the directory</a>
          </div>
          <p class="hero-note">No store, payment service, warehouse, inspection service, or delivery operation.</p>
        </div>

        <div class="hero-panel" aria-label="Directory overview">
          <div class="panel-window-bar"><span></span><span></span><span></span><strong>DIRECTORY / 01</strong></div>
          <div class="panel-content">
            <p class="panel-kicker">Browse by purpose</p>
            <h2>Find a useful starting point.</h2>
            <div class="panel-list">
              <a href="/shoes/" class="panel-row"><span class="panel-index">01</span><span>Shoes and footwear</span><span>→</span></a>
              <a href="/clothes/" class="panel-row"><span class="panel-index">02</span><span>Clothes and fit</span><span>→</span></a>
              <a href="/hats/" class="panel-row"><span class="panel-index">03</span><span>Accessories and style</span><span>→</span></a>
              <a href="/blog/kakobuy-source-review/" class="panel-row"><span class="panel-index">04</span><span>Source review</span><span>→</span></a>
            </div>
            <div class="panel-footer"><span class="status-dot"></span> Read the source before you continue</div>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip" aria-label="Directory facts">
      <div class="trust-shell">
        <div class="trust-item"><strong>10</strong><span>core guides</span></div>
        <div class="trust-item"><strong>01</strong><span>clear external notice</span></div>
        <div class="trust-item"><strong>100%</strong><span>independent scope</span></div>
        <div class="trust-item trust-item-wide"><strong>→</strong><span>Compare information, then verify at the original source.</span></div>
      </div>
    </section>

    <section class="categories-section content-section">
      <div class="section-shell">
        <div class="section-heading">
          <div><p class="eyebrow">Browse the directory</p><h2>Shop by category.<br /><em>Research by detail.</em></h2></div>
          <p>Start with the category that matches your question. Each path keeps the comparison fields and external responsibility clear.</p>
        </div>
        <div class="category-grid">
          <a v-for="(cat, index) in categories" :key="cat.id" :href="`/${cat.id}/`" class="category-card">
            <span class="card-number">0{{ index + 1 }}</span>
            <div class="card-mark">{{ cat.name.slice(0, 1) }}</div>
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
            <span class="card-link">Explore category <b>↗</b></span>
          </a>
          <a href="/blog/kakobuy-sizing-guide/" class="category-card category-card-featured">
            <span class="card-number">04</span>
            <div class="card-mark">S</div>
            <h3>Sizing & materials</h3>
            <p>Use measurements and construction notes instead of labels alone.</p>
            <span class="card-link">Read the guide <b>↗</b></span>
          </a>
        </div>
      </div>
    </section>

    <section class="guides-section content-section">
      <div class="section-shell">
        <div class="section-heading compact-heading">
          <div><p class="eyebrow">The core library</p><h2>Ten useful chapters.<br /><em>No content maze.</em></h2></div>
          <a href="/blog/" class="text-link">View all guides <span>↗</span></a>
        </div>
        <div class="guide-grid">
          <template v-for="group in visibleGuideGroups" :key="group.title">
            <a v-for="(article, index) in group.articles" :key="article.link" :href="article.link" class="guide-card">
              <span class="guide-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="guide-title">{{ article.title }}</span>
              <span class="guide-arrow">↗</span>
            </a>
          </template>
        </div>
      </div>
    </section>

    <section class="visual-section content-section">
      <div class="section-shell">
        <div class="section-heading compact-heading">
          <div><p class="eyebrow">Visual reference</p><h2>See the context.<br /><em>Then check the source.</em></h2></div>
          <p>These editorial images help you understand the categories and research context. They are not customer reviews, authenticity proof, or purchase guarantees.</p>
        </div>
        <div class="visual-grid">
          <figure class="visual-card visual-card-large">
            <img src="/images/sneakers-lifestyle-collection-us-01.webp" alt="Editorial footwear category reference" loading="lazy" width="800" height="560">
            <figcaption><strong>01 / Footwear context</strong><span>Use category, material, fit, and source details together.</span></figcaption>
          </figure>
          <figure class="visual-card">
            <img src="/images/clothing-wardrobe-organized-au-04.webp" alt="Editorial clothing organization reference" loading="lazy" width="800" height="560">
            <figcaption><strong>02 / Clothing context</strong><span>Compare measurements and construction rather than labels alone.</span></figcaption>
          </figure>
          <figure class="visual-card">
            <img src="/images/accessories-daily-carry-us-05.webp" alt="Editorial accessories category reference" loading="lazy" width="800" height="560">
            <figcaption><strong>03 / Accessories context</strong><span>Check dimensions, compatibility, materials, and care notes.</span></figcaption>
          </figure>
        </div>
        <div class="visual-integrity"><span>Editorial reference only</span> No fabricated testimonials, order counts, ratings, or “verified buyer” claims are used on this page.</div>
      </div>
    </section>

    <section class="process-section content-section">
      <div class="section-shell process-layout">
        <div class="section-heading process-heading">
          <div><p class="eyebrow">A transparent path</p><h2>Simple steps.<br /><em>Clear boundaries.</em></h2></div>
          <p>The directory helps you organize research. The original destination remains responsible for its own content and terms.</p>
        </div>
        <div class="process-list">
          <div class="process-row"><span>01</span><div><h3>Choose a category</h3><p>Begin with shoes, clothes, accessories, or sizing and materials.</p></div></div>
          <div class="process-row"><span>02</span><div><h3>Compare the stated details</h3><p>Record measurements, materials, dates, and what is still unknown.</p></div></div>
          <div class="process-row"><span>03</span><div><h3>Review the source notice</h3><p>Open the disclosed third-party resource only after checking its domain and policies.</p></div></div>
        </div>
      </div>
    </section>

    <section class="disclosure-section">
      <div class="section-shell disclosure-shell">
        <div><p class="eyebrow">Before you continue</p><h2>This is a directory,<br />not a checkout.</h2></div>
        <div class="disclosure-copy">
          <p>Kakobuy Spreadsheet organizes product information and links to external resources. It does not process payments, place orders, operate a warehouse, inspect products, arrange delivery, or guarantee authenticity, availability, pricing, or returns.</p>
          <a href="/external-resource" class="disclosure-link">Read the external resource notice <span>→</span></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { siteConfig } from '../site-config.js'
import { indexableBlogPaths } from '../../indexing-policy.mjs'

const categories = siteConfig.categories
const guideGroups = [
  { title: 'Core Guides', articles: [
    { title: 'Start Here', link: '/blog/kakobuy-start-here/' },
    { title: 'Shoes Guide', link: '/blog/kakobuy-shoes-guide/' },
    { title: 'Clothes Guide', link: '/blog/kakobuy-clothes-guide/' },
    { title: 'Accessories Guide', link: '/blog/kakobuy-accessories-guide/' },
    { title: 'Sizing and Materials', link: '/blog/kakobuy-sizing-guide/' },
    { title: 'Source Review', link: '/blog/kakobuy-source-review/' },
    { title: 'Pricing References', link: '/blog/kakobuy-price-guide/' },
    { title: 'Style Index', link: '/blog/kakobuy-style-guide/' },
    { title: 'Latest Updates', link: '/blog/kakobuy-updates/' },
    { title: 'About This Directory', link: '/blog/about/' },
  ]},
]

function isIndexableGuide(article) {
  if (!article.link.startsWith('/blog/')) return true
  return indexableBlogPaths.has(article.link.replace(/\/$/, ''))
}

const visibleGuideGroups = computed(() => guideGroups
  .map((group) => ({ ...group, articles: group.articles.filter(isIndexableGuide) }))
  .filter((group) => group.articles.length > 0))
</script>

<style scoped>
.home-page { min-height: 100vh; background: #f4f1eb; color: #171717; }
.section-shell, .hero-shell, .trust-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
.eyebrow { margin: 0 0 14px; color: #8b0000; font-size: 11px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }

.directory-hero { padding: 74px 0 62px; background: #f4f1eb; }
.hero-shell { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr); gap: 72px; align-items: center; }
.hero-copy h1 { margin: 0; font-size: clamp(52px, 7vw, 98px); letter-spacing: -.07em; line-height: .9; font-weight: 850; }
.hero-copy h1 span { color: #8b0000; }
.hero-lede { max-width: 550px; margin: 28px 0 28px; color: #4b4b4b; font-size: 19px; line-height: 1.55; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
.hero-actions a { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; padding: 12px 18px; border-radius: 5px; font-size: 14px; font-weight: 800; text-decoration: none; }
.primary-action { background: #8b0000; color: #fff !important; box-shadow: 0 8px 20px rgba(139,0,0,.18); }
.primary-action:hover { background: #690000; transform: translateY(-2px); }
.secondary-action { border: 1px solid #b6b0a7; color: #292929 !important; background: transparent; }
.secondary-action:hover { border-color: #8b0000; color: #8b0000 !important; }
.hero-note { margin: 18px 0 0; color: #77716b; font-size: 12px; }

.hero-panel { min-height: 390px; border: 1px solid #292929; background: #1d1d1d; color: #fff; box-shadow: 18px 18px 0 #d4af37; transform: rotate(1deg); }
.panel-window-bar { display: flex; align-items: center; gap: 7px; height: 42px; padding: 0 18px; border-bottom: 1px solid #484848; color: #aaa; font-size: 10px; letter-spacing: .12em; }
.panel-window-bar span { width: 8px; height: 8px; border-radius: 50%; background: #8b0000; }
.panel-window-bar span:nth-child(2) { background: #d4af37; }.panel-window-bar span:nth-child(3) { background: #76806e; }.panel-window-bar strong { margin-left: auto; font-weight: 700; }
.panel-content { padding: 35px 32px; }.panel-kicker { margin: 0 0 10px; color: #d4af37; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }.panel-content h2 { max-width: 280px; margin: 0 0 28px; font-size: 32px; line-height: 1.05; letter-spacing: -.04em; }
.panel-list { border-top: 1px solid #4b4b4b; }.panel-row { display: grid; grid-template-columns: 36px 1fr 20px; gap: 8px; align-items: center; padding: 15px 0; border-bottom: 1px solid #4b4b4b; color: #fff !important; font-size: 14px; text-decoration: none; }.panel-row:hover { color: #d4af37 !important; }.panel-index { color: #9c9c9c; font-size: 11px; }.panel-footer { margin-top: 25px; color: #b4b4b4; font-size: 11px; }.status-dot { display: inline-block; width: 7px; height: 7px; margin-right: 7px; border-radius: 50%; background: #7ca36c; }

.trust-strip { background: #8b0000; color: #fff; }.trust-shell { display: grid; grid-template-columns: repeat(3, 1fr) 1.7fr; }.trust-item { display: flex; min-height: 96px; flex-direction: column; justify-content: center; padding: 18px 24px; border-right: 1px solid rgba(255,255,255,.22); }.trust-item strong { font-size: 27px; letter-spacing: -.04em; }.trust-item span { margin-top: 3px; color: #f1d9d9; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }.trust-item-wide { border-right: 0; flex-direction: row; align-items: center; gap: 14px; }.trust-item-wide strong { color: #d4af37; }

.content-section { padding: 104px 0; }.categories-section { background: #fff; }.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 40px; margin-bottom: 44px; }.section-heading h2 { margin: 0; font-size: clamp(34px, 4vw, 54px); line-height: .98; letter-spacing: -.055em; }.section-heading h2 em { color: #8b0000; font-style: normal; }.section-heading > p { max-width: 360px; margin: 0 0 4px; color: #6c6a66; font-size: 14px; line-height: 1.65; }
.category-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }.category-card { position: relative; min-height: 280px; display: flex; flex-direction: column; padding: 24px; border: 1px solid #ddd8cf; background: #f8f6f2; color: #171717 !important; text-decoration: none; transition: transform .2s ease, background .2s ease, border-color .2s ease; }.category-card:hover { transform: translateY(-5px); border-color: #8b0000; background: #fff; }.category-card-featured { background: #1d1d1d; color: #fff !important; border-color: #1d1d1d; }.card-number { color: #8b0000; font-size: 11px; font-weight: 800; letter-spacing: .12em; }.category-card-featured .card-number { color: #d4af37; }.card-mark { width: 54px; height: 54px; display: grid; place-items: center; margin: 34px 0 22px; border: 1px solid currentColor; border-radius: 50%; font-size: 22px; font-weight: 850; }.category-card h3 { margin: 0 0 12px; font-size: 21px; letter-spacing: -.04em; }.category-card p { margin: 0; color: #6d6a65; font-size: 13px; line-height: 1.55; }.category-card-featured p { color: #c5c2bd; }.card-link { display: flex; justify-content: space-between; margin-top: auto; padding-top: 22px; color: #8b0000; font-size: 12px; font-weight: 800; }.category-card-featured .card-link { color: #d4af37; }

.guides-section { background: #f4f1eb; }.compact-heading { margin-bottom: 30px; }.text-link { color: #8b0000; font-size: 13px; font-weight: 800; text-decoration: none; }.text-link span { margin-left: 8px; }.guide-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid #cfc9c0; }.guide-card { display: grid; grid-template-columns: 52px 1fr 24px; align-items: center; gap: 8px; min-height: 72px; border-bottom: 1px solid #cfc9c0; color: #262626 !important; text-decoration: none; }.guide-card:nth-child(odd) { border-right: 1px solid #cfc9c0; padding-right: 30px; }.guide-card:nth-child(even) { padding-left: 30px; }.guide-card:hover { color: #8b0000 !important; }.guide-index { color: #938e86; font-size: 11px; }.guide-title { font-size: 15px; font-weight: 750; }.guide-arrow { color: #8b0000; font-size: 18px; }

.visual-section { background: #fff; }.visual-grid { display: grid; grid-template-columns: 1.35fr 1fr 1fr; gap: 14px; }.visual-card { margin: 0; overflow: hidden; border: 1px solid #ddd8cf; background: #f8f6f2; }.visual-card img { display: block; width: 100%; aspect-ratio: 1.35; object-fit: cover; filter: saturate(.82); }.visual-card-large img { aspect-ratio: 1.6; }.visual-card figcaption { display: grid; gap: 7px; padding: 16px 17px 18px; }.visual-card figcaption strong { color: #8b0000; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }.visual-card figcaption span { color: #5e5b56; font-size: 13px; line-height: 1.5; }.visual-integrity { margin-top: 18px; color: #716d67; font-size: 12px; }.visual-integrity span { margin-right: 10px; color: #8b0000; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }

.process-section { background: #fff; }.process-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 100px; }.process-heading { display: block; margin: 0; }.process-heading > p { margin-top: 28px; }.process-list { border-top: 1px solid #d5d0c8; }.process-row { display: grid; grid-template-columns: 58px 1fr; gap: 20px; padding: 24px 0; border-bottom: 1px solid #d5d0c8; }.process-row > span { color: #8b0000; font-size: 12px; font-weight: 800; }.process-row h3 { margin: 0 0 6px; font-size: 18px; }.process-row p { margin: 0; color: #706d68; font-size: 13px; line-height: 1.55; }

.disclosure-section { padding: 76px 0; background: #d4af37; }.disclosure-shell { display: grid; grid-template-columns: .8fr 1.2fr; gap: 100px; align-items: center; }.disclosure-shell h2 { margin: 0; color: #1d1d1d; font-size: clamp(34px, 4vw, 54px); line-height: .98; letter-spacing: -.055em; }.disclosure-copy p { max-width: 560px; margin: 0 0 22px; color: #39362d; font-size: 15px; line-height: 1.7; }.disclosure-link { color: #8b0000 !important; font-size: 13px; font-weight: 850; text-decoration: none; }.disclosure-link span { margin-left: 12px; }

@media (max-width: 900px) { .hero-shell, .process-layout, .disclosure-shell { grid-template-columns: 1fr; gap: 54px; }.hero-panel { max-width: 620px; width: 100%; justify-self: center; }.category-grid { grid-template-columns: repeat(2, 1fr); }.trust-shell { grid-template-columns: repeat(3, 1fr); }.trust-item-wide { grid-column: 1 / -1; border-top: 1px solid rgba(255,255,255,.22); border-right: 0; } }
@media (max-width: 620px) { .section-shell, .hero-shell, .trust-shell { width: min(100% - 32px, 1180px); }.directory-hero { padding: 48px 0 46px; }.hero-copy h1 { font-size: 60px; }.hero-lede { font-size: 16px; }.hero-actions { align-items: stretch; flex-direction: column; }.hero-actions a { width: 100%; }.hero-panel { box-shadow: 9px 9px 0 #d4af37; }.panel-content { padding: 28px 22px; }.trust-shell { grid-template-columns: repeat(3, 1fr); }.trust-item { min-height: 88px; padding: 14px 10px; }.trust-item strong { font-size: 21px; }.trust-item span { font-size: 9px; letter-spacing: .03em; }.content-section { padding: 72px 0; }.section-heading { display: block; margin-bottom: 30px; }.section-heading > p { margin-top: 22px; }.category-grid { grid-template-columns: 1fr 1fr; gap: 9px; }.category-card { min-height: 250px; padding: 17px; }.card-mark { margin: 24px 0 16px; }.category-card h3 { font-size: 17px; }.category-card p { font-size: 12px; }.visual-grid { grid-template-columns: 1fr; gap: 12px; }.visual-card-large img, .visual-card img { aspect-ratio: 1.5; }.guide-grid { grid-template-columns: 1fr; }.guide-card:nth-child(odd) { border-right: 0; padding-right: 0; }.guide-card:nth-child(even) { padding-left: 0; }.process-layout, .disclosure-shell { gap: 34px; }.disclosure-section { padding: 58px 0; } }
</style>
