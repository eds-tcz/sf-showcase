function loadGTM() {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Load GTM script
  const gtmId = 'GTM-XXXX'; // Replace with your GTM ID
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.insertBefore(script, document.head.firstChild);

  // Add noscript iframe
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.insertBefore(noscript, document.body.firstChild);
}
