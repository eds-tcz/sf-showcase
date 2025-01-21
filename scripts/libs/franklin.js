// scripts/lib-franklin.js

function loadGTM() {
  // Early check if GTM is already loaded
  if (window.dataLayer) {
    return;
  }

  // Initialize dataLayer first
  window.dataLayer = window.dataLayer || [];

  // Load GTM as early as possible
  const gtmId = 'GTM-XXXX'; // Replace with your GTM ID
  
  // Create and configure script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  
  // Add error handling
  script.onerror = () => {
    console.error('Failed to load GTM script');
  };
  
  // Add the noscript fallback
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  
  // Insert the elements
  document.head.insertBefore(script, document.head.firstChild);
  document.body.insertBefore(noscript, document.body.firstChild);
}