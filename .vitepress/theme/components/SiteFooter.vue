<template>
  <footer class="site-footer">
    <p class="site-footer-line">
      Kakobuy Spreadsheet - Independent Product Directory |
      <a href="/privacy-policy/">Privacy Policy</a> |
      <a href="/blog/about/">About</a> |
      <a href="mailto:hello@kakobuylinki.com">Contact</a>
    </p>
    <p class="site-footer-line">
      Copyright &copy; 2026 Kakobuy Spreadsheet |
      <a href="/">Home</a> |
      <a href="/blog/">Latest Updates</a> |
      <a href="/external-resource">External Resource Notice</a>
    </p>
    <p class="site-footer-disclaimer">
      ©kakobuylinki.com operates solely as an informational platform and does not sell, offer, or facilitate the sale of any products, either directly or indirectly. Our purpose is to provide users with a resource to browse, compare, and assess items available on various third-party marketplaces. We do not have control over the authenticity, legality, safety, or quality of the products listed by these external sellers, and all such responsibility rests entirely with the sellers and the marketplaces themselves. Users are strongly encouraged to conduct their own due diligence, carefully review product details, and exercise caution when making purchases. This website cannot be held liable for any counterfeit, misrepresented, defective, or otherwise unsatisfactory items obtained through these third-party channels, and any transactions or disputes are strictly between the buyer and the seller or platform.
    </p>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background: #1a1a2e;
  padding: 20px 16px;
  text-align: center;
}

.site-footer-line {
  margin: 0;
  padding: 3px 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.site-footer-line a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
  transition: color 0.3s ease;
}

.site-footer-line a:hover {
  color: #d4af37;
}

.site-footer-disclaimer {
  max-width: 980px;
  margin: 18px auto 0;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.62);
  font-size: 12px;
  line-height: 1.75;
  text-align: left;
}

@media (max-width: 480px) {
  .site-footer-line {
    font-size: 12px;
  }

  .site-footer-disclaimer {
    font-size: 11px;
    line-height: 1.65;
    text-align: left;
  }
}
</style>
