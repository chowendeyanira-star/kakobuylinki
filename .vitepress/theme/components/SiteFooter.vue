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

@media (max-width: 480px) {
  .site-footer-line {
    font-size: 12px;
  }

}
</style>
