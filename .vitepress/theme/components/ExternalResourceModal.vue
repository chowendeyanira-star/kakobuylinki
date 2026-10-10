<template>
  <div
    v-if="open"
    class="external-modal-overlay"
    role="presentation"
    @click.self="close"
  >
    <section
      ref="dialog"
      class="external-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="external-modal-title"
      aria-describedby="external-modal-description"
    >
      <button
        class="external-modal-close"
        type="button"
        aria-label="Close external resource notice"
        @click="close"
      >
        ×
      </button>

      <p class="external-modal-eyebrow">External resource notice</p>
      <h2 id="external-modal-title">You are leaving Kakobuy Spreadsheet</h2>
      <p id="external-modal-description">
        You selected an external spreadsheet resource. Please review the destination before continuing.
      </p>

      <div class="external-modal-destination">
        <p><strong>Website:</strong> Google Sheets</p>
        <p><strong>Domain:</strong> <code>docs.google.com</code></p>
        <p><strong>Resource:</strong> Public spreadsheet directory</p>
      </div>

      <p class="external-modal-disclosure">
        Kakobuy Spreadsheet is an independent information directory. We organize product information and link to external resources, but we do not operate Google Sheets, control its content, process payments, manage orders, provide shipping, or verify products listed there. The external website may have its own information, pricing, availability, payment, delivery, and service policies.
      </p>

      <div class="external-modal-legal">
        <p>©kakobuylinki.com operates solely as an informational platform and does not sell, offer, or facilitate the sale of any products, either directly or indirectly. Our purpose is to provide users with a resource to browse, compare, and assess items available on various third-party marketplaces.</p>
        <p>We do not have control over the authenticity, legality, safety, or quality of the products listed by these external sellers, and all such responsibility rests entirely with the sellers and the marketplaces themselves. Users are strongly encouraged to conduct their own due diligence, carefully review product details, and exercise caution when making purchases.</p>
        <p>This website cannot be held liable for any counterfeit, misrepresented, defective, or otherwise unsatisfactory items obtained through these third-party channels, and any transactions or disputes are strictly between the buyer and the seller or platform.</p>
      </div>

      <div class="external-modal-actions">
        <button class="external-modal-primary" type="button" @click="continueToExternal">
          Continue to Google Sheets
        </button>
        <button class="external-modal-secondary" type="button" @click="close">
          Return to Resource Directory
        </button>
      </div>

      <p class="external-modal-note">
        No automatic redirect or download occurs. Continue only if you recognize and accept the destination above.
      </p>
    </section>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const EXTERNAL_URL = 'https://docs.google.com/spreadsheets/d/10e9euL3y7Bw7GvWUhX2FruG8mJWXz8C7eNwTo69XoQA/edit?gid=1903531254#gid=1903531254'
const open = ref(false)
const dialog = ref(null)
let previousFocus = null

function openNotice(event) {
  const link = event.target?.closest?.('a[href]')
  if (!link) return
  const href = link.getAttribute('href') || ''
  if (href !== '/external-resource' && !href.startsWith('/external-resource#')) return

  event.preventDefault()
  event.stopPropagation()
  previousFocus = document.activeElement
  open.value = true
}

function close() {
  open.value = false
  nextTick(() => previousFocus?.focus?.())
}

function onKeydown(event) {
  if (event.key === 'Escape' && open.value) close()
}

function continueToExternal() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'confirm_external_visit', {
      event_category: 'external_resource',
      event_label: 'google_sheets',
    })
  }
  window.open(EXTERNAL_URL, '_blank', 'noopener,noreferrer')
  close()
}

watch(open, async (visible) => {
  document.body.classList.toggle('external-modal-open', visible)
  if (visible) {
    await nextTick()
    dialog.value?.querySelector('button')?.focus()
  }
})

onMounted(() => {
  document.addEventListener('click', openNotice, true)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', openNotice, true)
  document.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('external-modal-open')
})
</script>

<style scoped>
:global(body.external-modal-open) { overflow: hidden; }

.external-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(15, 23, 42, 0.58);
  backdrop-filter: blur(6px);
}

.external-modal {
  position: relative;
  width: min(680px, 100%);
  max-height: min(760px, calc(100vh - 40px));
  overflow: auto;
  border: 1px solid rgba(139, 0, 0, 0.14);
  border-radius: 18px;
  padding: clamp(24px, 5vw, 44px);
  background: #fff;
  color: #27303b;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
}

.external-modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50%;
  background: #f3f4f6;
  color: #394150;
  cursor: pointer;
  font-size: 26px;
  line-height: 1;
}

.external-modal-close:hover,
.external-modal-close:focus-visible { background: #e5e7eb; }

.external-modal-eyebrow {
  margin: 0 0 8px;
  color: #8b0000;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.external-modal h2 {
  margin: 0 42px 12px 0;
  color: #252b35;
  font-size: clamp(24px, 4vw, 34px);
  line-height: 1.15;
}

.external-modal p { line-height: 1.65; }

.external-modal-destination {
  margin: 24px 0;
  padding: 18px 20px;
  border-left: 4px solid #d4af37;
  border-radius: 8px;
  background: #faf8ef;
}

.external-modal-destination p { margin: 4px 0; }
.external-modal-destination code { color: #8b0000; font-weight: 700; }
.external-modal-disclosure { color: #4b5563; }

.external-modal-legal {
  margin: 22px 0 0;
  padding: 18px 20px;
  border: 1px solid #e7e2d7;
  border-radius: 10px;
  background: #fbfaf7;
  color: #5b5d62;
  font-size: 13px;
}

.external-modal-legal p { margin: 0 0 10px; line-height: 1.65; }
.external-modal-legal p:last-child { margin-bottom: 0; }

.external-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.external-modal-actions button {
  min-height: 46px;
  border-radius: 8px;
  padding: 12px 18px;
  cursor: pointer;
  font: inherit;
  font-weight: 800;
}

.external-modal-primary { border: 1px solid #8b0000; background: #8b0000; color: #fff; }
.external-modal-secondary { border: 1px solid #d4af37; background: #fff; color: #8b0000; }
.external-modal-primary:hover,
.external-modal-primary:focus-visible { background: #6f0000; }
.external-modal-secondary:hover,
.external-modal-secondary:focus-visible { background: #faf8ef; }

.external-modal-note { margin: 16px 0 0; color: #6b7280; font-size: 13px; }
.external-modal button:focus-visible { outline: 3px solid #0f3460; outline-offset: 3px; }

@media (max-width: 560px) {
  .external-modal-actions { flex-direction: column; }
  .external-modal-actions button { width: 100%; }
}
</style>
