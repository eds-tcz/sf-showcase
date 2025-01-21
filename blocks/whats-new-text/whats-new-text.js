// Function to dynamically add GTM script
function addGtmScript(gtmId) {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(noscript);
}

// Example usage
addGtmScript('GTM-MTFGGWH');