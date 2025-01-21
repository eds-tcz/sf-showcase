// blocks/gtm/gtm.js
export default function decorate(block) {
  console.log('GTM block decoration started');
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Create and append GTM script
  const gtmScript = document.createElement('script');
  gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXX');`;
  
  document.head.appendChild(gtmScript);
  console.log('GTM script added to head');
  
  // Add noscript iframe
  const gtmNoScript = document.createElement('noscript');
  const gtmIframe = document.createElement('iframe');
  gtmIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-XXXX';
  gtmIframe.height = '0';
  gtmIframe.width = '0';
  gtmIframe.style = 'display:none;visibility:hidden';
  gtmNoScript.appendChild(gtmIframe);
  document.body.appendChild(gtmNoScript);
}
window.dataLayer.push({
  'event': 'testEvent',
  'testData': 'GTM Loaded Successfully'
});