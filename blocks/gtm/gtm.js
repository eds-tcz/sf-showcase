export default function decorate(block) {
  // Initialize dataLayer 
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  // Add GTM script if not already present
  if (!document.querySelector('script[src*="googletagmanager"]')) {
    const gtmScript = document.createElement('script');
    gtmScript.setAttribute('async', 'true');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXX');
    `;
    document.head.appendChild(gtmScript);

    // Add noscript iframe
    const gtmNoScript = document.createElement('noscript');
    const gtmIframe = document.createElement('iframe');
    gtmIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-XXXX';
    gtmIframe.height = '0';
    gtmIframe.width = '0';
    gtmIframe.style = 'display:none;visibility:hidden';
    gtmNoScript.appendChild(gtmIframe);
    document.body.appendChild(gtmNoScript);

    // Add test event to verify
    window.dataLayer.push({
      'event': 'gtm.init_consent',
      'test': 'GTM Initialized'
    });

    console.log('GTM initialized. Check dataLayer:', window.dataLayer);
  }
}