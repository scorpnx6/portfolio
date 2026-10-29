/* =============================================
   Digital ZN — PDF Export
   pdf.js  (jsPDF + html2canvas)
   Depends on main.js being loaded first.
   ============================================= */

/* Convert a local image path to a base64 data-URL so html2canvas
   can render it without cross-origin issues.                        */
async function imageToBase64(src) {
  try {
    const resp = await fetch(src);
    const blob = await resp.blob();
    return await new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload  = function () { resolve(reader.result); };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.warn("Logo load failed, using text fallback:", e);
    return null;
  }
}

async function exportPDF() {

  /* ── 0. Load logo ─────────────────────────── */
  /* Adjust the path to match where suite.html lives relative to assets */
  const logoBase64 = await imageToBase64("../assets/logo.png");

  const logoHTML = logoBase64
    ? '<img src="' + logoBase64 + '" style="max-height:60px;max-width:220px;display:block;" alt="Logo" />'
    : '<div style="font-size:28px;font-weight:bold;color:#5B4FE8;letter-spacing:2px;">DIGITAL ZN</div>';

  /* ── 1. Read form values ──────────────────── */
  const client   = document.getElementById("client-name").value.trim()  || "Unknown Client";
  const project  = document.getElementById("project-name").value.trim() || "Untitled Project";
  const date     = document.getElementById("project-date").value        || "-";

  const invoice   = getInvoice();
  const costs     = getCosts();
  const net       = getNetProfit();
  const recommend = net + Math.round(net * 0.40);

  /* ── 2. Build services rows ───────────────── */
  const services = getSelectedServices();
  let serviceRows = "";

  if (services.length === 0) {
    serviceRows =
      '<tr><td colspan="4" style="padding:12px;text-align:center;color:#999;font-style:italic;">' +
      'No services selected.</td></tr>';
  } else {
    services.forEach(function (s) {
      serviceRows +=
        '<tr>' +
          '<td style="padding:9px 12px;border-bottom:1px solid #eee;">'                                             + s.name           + '</td>' +
          '<td style="padding:9px 12px;border-bottom:1px solid #eee;text-align:center;">'                           + s.qty             + '</td>' +
          '<td style="padding:9px 12px;border-bottom:1px solid #eee;text-align:right;">'                            + fmt(s.price)      + '</td>' +
          '<td style="padding:9px 12px;border-bottom:1px solid #eee;text-align:right;font-weight:bold;">'           + fmt(s.total)      + '</td>' +
        '</tr>';
    });
  }

  /* ── 3. Create off-screen element ────────────
   *
   *  We give it position:fixed so the browser fully
   *  paints it. The onclone callback (step 5) switches
   *  it to position:relative inside the html2canvas
   *  clone — that is what gets rendered to the canvas.
   *  Fixed elements are NOT captured reliably by
   *  html2canvas; relative elements are.
   * ─────────────────────────────────────────── */
  const el = document.createElement("div");
  el.id = "__pdf_export__";
  el.style.cssText =
    "position:fixed;top:0;left:0;width:794px;min-height:10px;" +
    "background:#fff;color:#222;font-family:Arial,Helvetica,sans-serif;" +
    "font-size:14px;line-height:1.6;padding:50px 55px;" +
    "box-sizing:border-box;z-index:2147483647;";

  el.innerHTML =

    /* HEADER */
    '<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px;border-bottom:3px solid #5B4FE8;padding-bottom:16px;">' +
      '<tr>' +
        '<td style="vertical-align:middle;">' +
          logoHTML +
        '</td>' +
        '<td align="right" style="vertical-align:middle;">' +
          '<div style="font-size:20px;font-weight:bold;color:#333;">QUOTATION</div>' +
        '</td>' +
      '</tr>' +
    '</table>' +

    /* CLIENT / PROJECT / DATE */
    '<table width="100%" cellpadding="14" cellspacing="0" style="border-collapse:collapse;margin-bottom:22px;background:#f7f7f7;">' +
      '<tr>' +
        '<td width="33%"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:3px;">Client</div><div style="font-size:15px;font-weight:bold;color:#111;">' + client + '</div></td>' +
        '<td width="33%"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:3px;">Project</div><div style="font-size:15px;font-weight:bold;color:#111;">' + project + '</div></td>' +
        '<td width="33%"><div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:3px;">Date</div><div style="font-size:15px;font-weight:bold;color:#111;">' + date + '</div></td>' +
      '</tr>' +
    '</table>' +

    /* SERVICES */
    '<div style="font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#666;margin-bottom:8px;">Services</div>' +
    '<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px;">' +
      '<thead>' +
        '<tr style="background:#5B4FE8;color:#fff;">' +
          '<th align="left"   style="padding:10px 12px;">Service</th>' +
          '<th align="center" style="padding:10px 12px;">Qty</th>' +
          '<th align="right"  style="padding:10px 12px;">Unit Price</th>' +
          '<th align="right"  style="padding:10px 12px;">Total</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' + serviceRows + '</tbody>' +
    '</table>' +

    /* SUMMARY */
    '<div style="font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#666;margin-bottom:8px;">Summary</div>' +
    '<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">' +
      '<tr><td style="padding:9px 0;border-bottom:1px solid #eee;color:#555;">Project Total</td><td align="right" style="padding:9px 0;border-bottom:1px solid #eee;font-weight:bold;">'                   + fmt(invoice)   + '</td></tr>' +
      '<tr><td style="padding:9px 0;border-bottom:1px solid #eee;color:#555;">Business Costs</td><td align="right" style="padding:9px 0;border-bottom:1px solid #eee;font-weight:bold;color:#BA7517;">'    + fmt(costs)     + '</td></tr>' +
      '<tr><td style="padding:9px 0;border-bottom:1px solid #eee;color:#555;">Net Profit</td><td align="right" style="padding:9px 0;border-bottom:1px solid #eee;font-weight:bold;color:#1D9E75;">'         + fmt(net)       + '</td></tr>' +
      '<tr>' +
        '<td style="padding:12px 10px;background:#5B4FE8;color:#fff;font-weight:bold;font-size:15px;">Recommended Price <span style="font-size:11px;font-weight:normal;opacity:0.8;">(base + 40% margin)</span></td>' +
        '<td align="right" style="padding:12px 10px;background:#5B4FE8;color:#fff;font-weight:bold;font-size:17px;">' + fmt(recommend) + '</td>' +
      '</tr>' +
    '</table>' +

    /* FOOTER */
    '<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:36px;border-top:1px solid #eee;">' +
      '<tr><td align="center" style="font-size:12px;color:#aaa;padding-top:14px;">' +
        '<strong style="color:#5B4FE8;">Digital ZN</strong>' +
        '&nbsp;&mdash;&nbsp;contact@digital-zn.com&nbsp;&mdash;&nbsp;www.digital-zn.com' +
      '</td></tr>' +
    '</table>';

  document.body.appendChild(el);

  /* ── 4. Button loading state ──────────────── */
  const btn = document.getElementById("exportPdf");
  if (btn) { btn.disabled = true; btn.textContent = "Generating PDF…"; }

  /* ── 5. Let the browser paint the element ─── */
  await new Promise(function (r) { setTimeout(r, 300); });

  try {

    /* ── 6. html2canvas → canvas ─────────────── */
    const canvas = await html2canvas(el, {
      scale:       2,
      useCORS:     true,
      allowTaint:  true,
      logging:     false,
      windowWidth: 900,
      /*
       * Switch position:fixed → position:relative in the
       * cloned document so html2canvas can fully measure
       * and render the element. This is the fix for blank PDFs.
       */
      onclone: function (clonedDoc) {
        const c = clonedDoc.getElementById("__pdf_export__");
        if (c) {
          c.style.position = "relative";
          c.style.top      = "0";
          c.style.left     = "0";
          c.style.zIndex   = "auto";
        }
      }
    });

    /* ── 7. jsPDF — multi-page support ─────────── */
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });

    const margin  = 10;                                       // mm
    const pageW   = pdf.internal.pageSize.getWidth();        // 210 mm
    const pageH   = pdf.internal.pageSize.getHeight();       // 297 mm
    const printW  = pageW - margin * 2;                      // usable width
    const printH  = pageH - margin * 2;                      // usable height per page
    const pxPerMm = canvas.width / printW;                   // px-to-mm ratio

    /* Total image height in mm */
    const totalH  = (canvas.height / canvas.width) * printW;

    let srcYmm = 0;  // where we are in the image (mm)

    while (srcYmm < totalH) {
      const sliceHmm = Math.min(printH, totalH - srcYmm);

      /* Crop a horizontal slice from the canvas */
      const sliceCanvas = document.createElement("canvas");
      sliceCanvas.width  = canvas.width;
      sliceCanvas.height = Math.round(sliceHmm * pxPerMm);

      sliceCanvas.getContext("2d").drawImage(
        canvas,
        0, Math.round(srcYmm * pxPerMm),   // source x, y
        canvas.width, sliceCanvas.height,   // source w, h
        0, 0,                               // dest x, y
        sliceCanvas.width, sliceCanvas.height
      );

      pdf.addImage(
        sliceCanvas.toDataURL("image/jpeg", 0.98),
        "JPEG",
        margin, margin,
        printW, sliceHmm
      );

      srcYmm += sliceHmm;
      if (srcYmm < totalH) { pdf.addPage(); }
    }

    /* ── 8. Download ──────────────────────────── */
    pdf.save("DigitalZN-" + client.replace(/\s+/g, "-") + ".pdf");

  } catch (err) {
    console.error("PDF export error:", err);
    alert("PDF export failed:\n" + err.message);
  } finally {
    el.remove();
    if (btn) {
      btn.disabled  = false;
      btn.innerHTML =
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
        'style="vertical-align:middle;margin-right:8px;">' +
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
        '<polyline points="14 2 14 8 20 8"/>' +
        '<line x1="12" y1="18" x2="12" y2="12"/>' +
        '<line x1="9" y1="15" x2="15" y2="15"/>' +
        '</svg>Export Professional PDF';
    }
  }
}
