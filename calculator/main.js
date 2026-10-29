/* =============================================
   Digital ZN — Checklist + Profit Calculator
   main.js
   ============================================= */

/* ══════════════════
   DATA
══════════════════ */

const ALACARTE = [
  { name: 'Logo only',                    cat: 'Graphic Design',       price: 300 },
  { name: 'Website Landing Page',         cat: 'Developement',         price: 900 },
  { name: 'Website Full Web Site',        cat: 'Developement',         price: 2500 },
  { name: 'Video (30–60 sec)',            cat: 'Video Editing',        price: 300 },
  { name: 'Social media design',     cat: 'Graphic Design',       price: 100 },
  { name: 'another(print)',       cat: 'Graphic Design',       price: 800  },
  { name: 'Brand identity (full)',        cat: 'Graphic Design',       price: 2500 },
  { name: 'Videography session',          cat: 'Videography',          price: 800 },
  { name: 'Animated PowerPoint',          cat: 'Graphic Design',       price: 700  },
  { name: 'Reel / TikTok video',          cat: 'Video Editing',        price: 900  },
];

const PACKAGES = [
  { name: 'Brand Genesis — full brand launch',        cat: 'Package 1', price: 0 },
  { name: 'Digital Presence — online upgrade',        cat: 'Package 2', price: 0  },
  { name: 'Content Accelerator — monthly retainer',   cat: 'Package 3', price: 0, suffix: '/mo' },
];

/* ══════════════════
   STATE
══════════════════ */

let mode      = 'alacarte';
let splitMode = 'contribution';
let checked   = {};
let qtys      = {};
let customs   = [];

/* ══════════════════
   MODE SWITCH
══════════════════ */

function setMode(m) {
  mode    = m;
  checked = {};
  qtys    = {};

  document.getElementById('btn-alacarte').classList.toggle('active', m === 'alacarte');
  document.getElementById('btn-package').classList.toggle('active',  m === 'package');

  renderServices();
  recalc();
}

/* ══════════════════
   SPLIT SWITCH
══════════════════ */

function setSplit(s) {
  splitMode = s;
  document.getElementById('sb-contribution').classList.toggle('active', s === 'contribution');
  document.getElementById('sb-equal').classList.toggle('active',        s === 'equal');
  renderSplit(getNetProfit());
}

/* ══════════════════
   HELPERS
══════════════════ */

function getItems() {
  const base = mode === 'alacarte' ? ALACARTE : PACKAGES;
  return [...base, ...customs];
}

function getInvoice() {
  return getItems().reduce((sum, s, i) => {
    return sum + (checked[i] ? s.price * (qtys[i] || 1) : 0);
  }, 0);
}

function getCosts() {
  const tools = parseFloat(document.getElementById('cost-tools').value) || 0;
  const ops   = parseFloat(document.getElementById('cost-ops').value)   || 0;
  return tools + ops;
}

function getNetProfit() {
  return Math.max(0, getInvoice() - getCosts());
}

function fmt(n) {
  return Number(n).toLocaleString('fr-MA') + ' DH';
}

/* ══════════════════
   RENDER SERVICES
══════════════════ */
function renderServices() {
  const items = getItems();
  let html = `<div class="section-label">${mode === 'alacarte' ? 'À la carte services' : 'Service packages'}</div><div class="services-list">`;

  if (items.length === 0) {
    html += `<div class="empty-state">No services yet</div>`;
  } else {
    items.forEach((s, i) => {
      const isChecked  = !!checked[i];
      const qty        = qtys[i] || 1;
      const lineTotal  = isChecked ? s.price * qty : 0;

      html += `
        <div class="svc-row${isChecked ? ' checked' : ''}" id="row-${i}">
          <input type="checkbox" class="svc-cb" id="svc-${i}" onchange="toggle(${i})" ${isChecked ? 'checked' : ''}>
          <div class="svc-info">
            <div class="svc-name">${s.name}${s.suffix ? `<span class="svc-suffix"> ${s.suffix}</span>` : ''}</div>
            <div class="svc-cat">${s.cat}</div>
          </div>
          <input
            type="number"
            class="svc-qty"
            value="${qty}"
            min="1" max="99"
            title="Quantity"
            onchange="setQty(${i}, this.value)"
            ${isChecked ? '' : 'disabled'}
          >
          <div class="svc-base">${fmt(s.price)}</div>
          <div class="svc-total" id="line-${i}">${isChecked ? fmt(lineTotal) : '—'}</div>
        </div>`;
    });
  }

  html += `</div>`;
  document.getElementById('services-wrap').innerHTML = html;
}

/* ══════════════════
   TOGGLE / QTY
══════════════════ */
function toggle(i) {
  checked[i] = !checked[i];
  if (!qtys[i]) qtys[i] = 1;

  const row = document.getElementById('row-' + i);
  if (row) row.classList.toggle('checked', !!checked[i]);

  recalc();
  renderServices();
}

function setQty(i, v) {
  qtys[i] = Math.max(1, parseInt(v) || 1);
  recalc();
}

/* ══════════════════
   CUSTOM SERVICE
══════════════════ */
function addCustom() {
  const nameEl  = document.getElementById('custom-name');
  const priceEl = document.getElementById('custom-price');
  const name    = nameEl.value.trim();
  const price   = parseFloat(priceEl.value) || 0;

  if (!name || !price) {
    nameEl.style.borderColor  = name  ? '' : 'rgba(200,60,60,0.6)';
    priceEl.style.borderColor = price ? '' : 'rgba(200,60,60,0.6)';
    return;
  }

  nameEl.style.borderColor  = '';
  priceEl.style.borderColor = '';

  customs.push({ name, cat: 'Custom', price });
  nameEl.value  = '';
  priceEl.value = '';

  renderServices();
  recalc();
}

/* ══════════════════
   CLEAR ALL
══════════════════ */
function clearAll() {
  checked = {};
  qtys    = {};
  customs = [];
  renderServices();
  recalc();
}

/* ══════════════════
   RECALCULATE
══════════════════ */
function recalc() {
  const invoice   = getInvoice();
  const costs     = getCosts();
  const net       = Math.max(0, invoice - costs);
  const margin    = Math.round(net * 0.40);
  const recommend = net + margin;

  document.getElementById('m-invoice').textContent   = fmt(invoice);
  document.getElementById('m-costs').textContent     = fmt(costs);
  document.getElementById('m-net').textContent       = fmt(net);
  document.getElementById('m-margin').textContent    = '+' + fmt(margin);
  document.getElementById('m-recommend').textContent = fmt(recommend);
  document.getElementById('m-profit-badge').textContent = 'Profit: ' + fmt(net > 0 ? net : 0);

  renderSplit(net);
}

/* ══════════════════
   RENDER SPLIT
══════════════════ */
function renderSplit(net) {
  let html = '';

  if (splitMode === 'equal') {
    const share = Math.round(net / 3);
    const members = [
      { name: 'Bader',     role: 'VIDEO MAKER'       },
      { name: 'Oussama', role: 'GRAPHIC DESGINER'  },
      { name: 'Zakaria', role: 'DEVELOPER'      },
    ];
    members.forEach(m => {
      html += `
        <div class="split-card">
          <div class="split-role">${m.role}</div>
          <div class="split-name">${m.name}</div>
          <div class="split-pct">33.33%</div>
          <div class="split-amount">${fmt(share)}</div>
        </div>`;
    });

  } else {
    const working     = Math.round(net * 0.50);
    const ceo         = Math.round(net * 0.30);
    const noncontrib  = Math.round(net * 0.20);

    html += `
      <div class="split-card active-worker">
        <div class="split-role">who do thee work</div>
        <div class="split-name">who do thee work</div>
        <div class="split-pct">50%</div>
        <div class="split-amount highlight">${fmt(working)}</div>
      </div>
      <div class="split-card">
        <div class="split-role">helper</div>
        <div class="split-name">helper</div>
        <div class="split-pct">30%</div>
        <div class="split-amount">${fmt(ceo)}</div>
      </div>
      <div class="split-card">
        <div class="split-role">do nothing</div>
        <div class="split-name">nothing</div>
        <div class="split-pct">20%</div>
        <div class="split-amount">${fmt(noncontrib)}</div>
      </div>`;
  }

  document.getElementById('split-grid').innerHTML = html;
}

/* ══════════════════
   KEYBOARD SHORTCUTS
══════════════════ */
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    addCustom();
  }
});

/* ══════════════════
   INIT
══════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  recalc();
});
/* ══════════════════
   date format
══════════════════ */

document.getElementById("project-date").value =
new Date().toISOString().split("T")[0];

/* ══════════════════
   read data from forme
══════════════════ */
document
    .getElementById("exportPdf")
    .addEventListener("click", exportPDF);