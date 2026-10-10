<template>
  <div class="home-page">
    <section class="linktree-directory" aria-labelledby="directory-title">
      <div class="linktree-profile">
        <div class="profile-avatar">K</div>
        <h1 id="directory-title">Kakobuy Spreadsheet</h1>
        <p class="profile-handle">@kakobuy.menswear.directory</p>
        <p class="profile-bio">Men’s clothing, fit notes, and spreadsheet research in one focused directory.</p>
        <div class="profile-badges"><span>Men’s clothing first</span><span>Independent directory</span></div>
      </div>
      <nav class="linktree-toc" aria-label="Spreadsheet directory">
        <p class="toc-label">Directory / tap to jump</p>
        <a href="/external-resource" class="linktree-row linktree-row-primary"><span class="toc-thumb toc-thumb-sheet">S</span><span><strong>Men’s Spreadsheet</strong><small>Browse the external resource</small></span><b>↗</b></a>
        <a href="#menswear-categories" class="linktree-row"><span class="toc-thumb">01</span><span><strong>Men’s clothing categories</strong><small>Shirts, knitwear, jackets, trousers</small></span><b>↓</b></a>
        <a href="#menswear-guides" class="linktree-row"><span class="toc-thumb">02</span><span><strong>Fit & materials guides</strong><small>Measurements, construction, care</small></span><b>↓</b></a>
        <a href="#menswear-ugc" class="linktree-row"><span class="toc-thumb">03</span><span><strong>Spreadsheet user view</strong><small>Phone, desktop, detail-check demos</small></span><b>↓</b></a>
        <a href="#menswear-feedback" class="linktree-row"><span class="toc-thumb">04</span><span><strong>Kakobuy purchase feedback</strong><small>What customers noticed after purchase</small></span><b>↓</b></a>
        <a href="#site-disclosure" class="linktree-row"><span class="toc-thumb">05</span><span><strong>About this directory</strong><small>Scope, source responsibility, notice</small></span><b>↓</b></a>
      </nav>
      <p class="linktree-disclaimer">External resources open only after the source notice. This site does not process payments or place orders.</p>
    </section>

    <section id="menswear-categories" class="trust-strip" aria-label="Directory facts">
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
          <p>Men’s clothing is the main focus. Start with the category that matches your question, then compare fit, fabric, construction, and source details.</p>
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
            <h3>Fit & materials</h3>
            <p>Use measurements and construction notes instead of labels alone.</p>
            <span class="card-link">Read the guide <b>↗</b></span>
          </a>
        </div>
      </div>
    </section>

    <section id="menswear-guides" class="guides-section content-section">
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

    <section id="menswear-ugc" class="visual-section content-section">
      <div class="section-shell">
        <div class="section-heading compact-heading">
          <div><p class="eyebrow">Visual reference</p><h2>See the context.<br /><em>Then check the source.</em></h2></div>
          <p>These editorial images help you understand the categories and research context. They are not customer reviews, authenticity proof, or purchase guarantees.</p>
        </div>
        <div class="visual-grid">
          <figure class="visual-card visual-card-large">
            <img src="/images/ugc-menswear-spreadsheet-phone.png" alt="UGC-style demo of a user browsing a menswear spreadsheet on a phone" loading="lazy" width="1664" height="2080">
            <figcaption><strong>01 / Men’s phone browse</strong><span>Scan men’s shirts, jackets, trousers, and fit fields from a user perspective.</span></figcaption>
          </figure>
          <figure class="visual-card">
            <img src="/images/ugc-menswear-spreadsheet-desktop.png" alt="UGC-style demo of a user comparing menswear spreadsheet rows on a laptop" loading="lazy" width="2304" height="1536">
            <figcaption><strong>02 / Men’s desktop compare</strong><span>Compare fit, materials, colors, sizes, and source notes in one view.</span></figcaption>
          </figure>
          <figure class="visual-card">
            <img src="/images/ugc-menswear-spreadsheet-detail.png" alt="UGC-style demo of a user checking menswear spreadsheet details and notes" loading="lazy" width="2304" height="1536">
            <figcaption><strong>03 / Men’s detail check</strong><span>Use chest, sleeve, fabric, color, and care notes before opening a source.</span></figcaption>
          </figure>
        </div>
        <div class="visual-integrity"><span>UGC-style demo only</span> These are illustrative user-perspective scenes, not customer testimonials, order counts, ratings, or “verified buyer” claims.</div>
      </div>
    </section>

    <section id="menswear-feedback" class="reviews-section content-section">
      <div class="section-shell">
        <div class="section-heading compact-heading">
          <div><p class="eyebrow">Men’s clothing feedback</p><h2>What shoppers<br /><em>actually noticed.</em></h2></div>
          <p>These are excerpts from customer feedback after purchases made through the Kakobuy platform. They reflect individual experiences and are not guarantees.</p>
        </div>
        <div class="review-grid">
          <article class="review-card review-card-featured">
            <span class="review-label">Positive excerpt</span>
            <blockquote>“The material is fabulous… He has big shoulders and long arms and it was perfect for his frame.”</blockquote>
            <p class="review-meta">Kakobuy purchase feedback excerpt · men’s long-sleeve textured shirt</p>
          </article>
          <article class="review-card">
            <span class="review-label">Fit note</span>
            <blockquote>“These are really nice men's shirts… medium fits him in this, so it runs a little big.”</blockquote>
            <p class="review-meta">Kakobuy purchase feedback excerpt · compare measurements before choosing a size</p>
          </article>
          <article class="review-card review-card-caution">
            <span class="review-label">Caution excerpt</span>
            <blockquote>“The color… is not what I was going for… the materials do not feel comfy to the skin.”</blockquote>
            <p class="review-meta">Kakobuy purchase feedback excerpt · color and fabric feel can vary by expectation</p>
          </article>
          <article class="review-card">
            <span class="review-label">Construction note</span>
            <blockquote>“The sleeves are a bit long… The material is not very thick or warm.”</blockquote>
            <p class="review-meta">Kakobuy purchase feedback excerpt · check sleeve length and seasonality</p>
          </article>
        </div>
        <p class="review-source">Source note: these excerpts were supplied as customer feedback after purchases through Kakobuy. They reflect individual experiences and should not be treated as a guarantee of fit, quality, authenticity, availability, delivery, or future results. This website is an independent information directory and does not process payments, place orders, or provide fulfillment services.</p>
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

    <section id="site-disclosure" class="disclosure-section">
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

.linktree-directory { width: min(680px, calc(100% - 32px)); margin: 0 auto; padding: 52px 0 38px; text-align: center; }
.linktree-profile { display: flex; align-items: center; flex-direction: column; }
.profile-avatar { width: 72px; height: 72px; display: grid; place-items: center; border: 4px solid #fff; border-radius: 50%; background: #8b0000; color: #fff; box-shadow: 0 4px 14px rgba(0,0,0,.14); font-size: 30px; font-weight: 900; }
.linktree-profile h1 { margin: 14px 0 3px; color: #1d1d1d; font-size: 25px; letter-spacing: -.04em; }.profile-handle { margin: 0; color: #77716b; font-size: 13px; }.profile-bio { max-width: 430px; margin: 15px 0 12px; color: #4e4b47; font-size: 14px; line-height: 1.55; }.profile-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; }.profile-badges span { padding: 5px 9px; border: 1px solid #d7d1c8; border-radius: 99px; color: #716d67; font-size: 10px; font-weight: 750; text-transform: uppercase; letter-spacing: .06em; }
.linktree-toc { margin-top: 26px; }.toc-label { margin: 0 0 10px; color: #8b0000; font-size: 10px; font-weight: 850; letter-spacing: .14em; text-transform: uppercase; }.linktree-row { position: relative; display: grid; grid-template-columns: 48px 1fr 32px; gap: 13px; align-items: center; min-height: 66px; margin: 10px 0; padding: 9px 15px 9px 9px; border: 1px solid #ded9d1; border-radius: 9px; background: rgba(255,255,255,.88); color: #282624 !important; text-align: left; text-decoration: none; box-shadow: 0 2px 0 rgba(0,0,0,.03); transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease; }.linktree-row:hover { transform: translateY(-2px); border-color: #8b0000; box-shadow: 0 7px 18px rgba(56,40,25,.09); }.linktree-row-primary { border-color: #8b0000; background: #8b0000; color: #fff !important; }.linktree-row-primary:hover { background: #720000; }.linktree-row > span:nth-child(2) { display: grid; gap: 3px; }.linktree-row strong { font-size: 14px; }.linktree-row small { color: #77716b; font-size: 11px; line-height: 1.35; }.linktree-row-primary small { color: #f1d9d9; }.linktree-row b { color: #8b0000; font-size: 19px; text-align: center; }.linktree-row-primary b { color: #d4af37; }.toc-thumb { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 6px; background: #ece8e0; color: #8b0000; font-size: 12px; font-weight: 850; }.toc-thumb-sheet { background: #d4af37; color: #1d1d1d; font-size: 23px; }.linktree-disclaimer { margin: 18px auto 0; color: #8a857d; font-size: 11px; line-height: 1.5; }

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

.reviews-section { background: #f4f1eb; }.review-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }.review-card { min-height: 220px; display: flex; flex-direction: column; padding: 24px; border: 1px solid #d8d2c9; background: #fff; }.review-card-featured { border-top: 4px solid #8b0000; }.review-card-caution { background: #fbfaf7; }.review-label { color: #8b0000; font-size: 10px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }.review-card blockquote { margin: 25px 0 18px; color: #262626; font-size: 18px; font-weight: 650; line-height: 1.35; letter-spacing: -.025em; }.review-meta { margin: auto 0 0; color: #77716b; font-size: 11px; line-height: 1.5; }.review-source { max-width: 800px; margin: 24px 0 0; color: #77716b; font-size: 12px; line-height: 1.65; }

.process-section { background: #fff; }.process-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 100px; }.process-heading { display: block; margin: 0; }.process-heading > p { margin-top: 28px; }.process-list { border-top: 1px solid #d5d0c8; }.process-row { display: grid; grid-template-columns: 58px 1fr; gap: 20px; padding: 24px 0; border-bottom: 1px solid #d5d0c8; }.process-row > span { color: #8b0000; font-size: 12px; font-weight: 800; }.process-row h3 { margin: 0 0 6px; font-size: 18px; }.process-row p { margin: 0; color: #706d68; font-size: 13px; line-height: 1.55; }

.disclosure-section { padding: 76px 0; background: #d4af37; }.disclosure-shell { display: grid; grid-template-columns: .8fr 1.2fr; gap: 100px; align-items: center; }.disclosure-shell h2 { margin: 0; color: #1d1d1d; font-size: clamp(34px, 4vw, 54px); line-height: .98; letter-spacing: -.055em; }.disclosure-copy p { max-width: 560px; margin: 0 0 22px; color: #39362d; font-size: 15px; line-height: 1.7; }.disclosure-link { color: #8b0000 !important; font-size: 13px; font-weight: 850; text-decoration: none; }.disclosure-link span { margin-left: 12px; }

@media (max-width: 900px) { .hero-shell, .process-layout, .disclosure-shell { grid-template-columns: 1fr; gap: 54px; }.hero-panel { max-width: 620px; width: 100%; justify-self: center; }.category-grid { grid-template-columns: repeat(2, 1fr); }.trust-shell { grid-template-columns: repeat(3, 1fr); }.trust-item-wide { grid-column: 1 / -1; border-top: 1px solid rgba(255,255,255,.22); border-right: 0; } }
@media (max-width: 620px) { .section-shell, .hero-shell, .trust-shell { width: min(100% - 32px, 1180px); }.linktree-directory { padding-top: 34px; }.linktree-row { grid-template-columns: 42px 1fr 24px; gap: 10px; min-height: 62px; padding-right: 9px; }.toc-thumb { width: 42px; height: 42px; }.linktree-row strong { font-size: 13px; }.linktree-row small { font-size: 10px; }.directory-hero { padding: 48px 0 46px; }.hero-copy h1 { font-size: 60px; }.hero-lede { font-size: 16px; }.hero-actions { align-items: stretch; flex-direction: column; }.hero-actions a { width: 100%; }.hero-panel { box-shadow: 9px 9px 0 #d4af37; }.panel-content { padding: 28px 22px; }.trust-shell { grid-template-columns: repeat(3, 1fr); }.trust-item { min-height: 88px; padding: 14px 10px; }.trust-item strong { font-size: 21px; }.trust-item span { font-size: 9px; letter-spacing: .03em; }.content-section { padding: 72px 0; }.section-heading { display: block; margin-bottom: 30px; }.section-heading > p { margin-top: 22px; }.category-grid { grid-template-columns: 1fr 1fr; gap: 9px; }.category-card { min-height: 250px; padding: 17px; }.card-mark { margin: 24px 0 16px; }.category-card h3 { font-size: 17px; }.category-card p { font-size: 12px; }.visual-grid, .review-grid { grid-template-columns: 1fr; gap: 12px; }.visual-card-large img, .visual-card img { aspect-ratio: 1.5; }.guide-grid { grid-template-columns: 1fr; }.guide-card:nth-child(odd) { border-right: 0; padding-right: 0; }.guide-card:nth-child(even) { padding-left: 0; }.process-layout, .disclosure-shell { gap: 34px; }.disclosure-section { padding: 58px 0; } }
</style>
