// gtm.js

// GTM initialization function
function initGTM(gtmId) {
    try {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];

        // Load the GTM script
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',gtmId);

        // Add noscript iframe
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';
        noscript.appendChild(iframe);

        // Insert noscript at the beginning of body
        if (document.body) {
            document.body.insertBefore(noscript, document.body.firstChild);
        } else {
            // If body isn't ready, wait for DOMContentLoaded
            document.addEventListener('DOMContentLoaded', () => {
                document.body.insertBefore(noscript, document.body.firstChild);
            });
        }

        return true;
    } catch (error) {
        console.error('Error initializing GTM:', error);
        return false;
    }
}

// Function to push data to dataLayer
function pushToDataLayer(data) {
    try {
        if (window.dataLayer) {
            window.dataLayer.push(data);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error pushing to dataLayer:', error);
        return false;
    }
}

// Export functions
export { initGTM, pushToDataLayer };
