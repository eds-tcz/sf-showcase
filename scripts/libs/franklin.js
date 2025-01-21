// scripts/lib-franklin.js

// Add this function
function loadGTM() {
  // Create script element
  const script = document.createElement('script');
  script.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXX');`; // Replace GTM-XXXX with your ID
  document.head.prepend(script);

  // Add noscript iframe
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX" 
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.prepend(noscript);
}