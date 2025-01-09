/* eslint-disable no-console */
// JSON object with href values
const links = {
  'card-row-1': [
    'https://ujjivansfb.in/personal/savings-account',
    'https://ujjivansfb.in/business/digital-current-account',
    'https://ujjivansfb.in/personal/personal-deposits',
    'https://ujjivansfb.in/personal/borrow/personal-home-loans',
  ],
  'card-row-2': [
    'https://ujjivansfb.in/personal/borrow/personal-vehicle-loans',
    'https://ujjivansfb.in/business/borrow/business-msme-loans',
    'https://ujjivansfb.in/video-banking',
    'https://ujjivansfb.in/personal/borrow/gold-loan-product',
    'https://ujjivansfb.in/personal/loans/agricultural-loans',
  ],
  'card-row-3': [
    'https://ujjivansfb.in/personal/micro-loans',
    'https://ujjivansfb.in/personal/third-party-product-insurance',
    'https://ujjivansfb.in/personal/forex',
    'https://ujjivansfb.in/personal/sampoorna-banking',
    'https://ujjivansfb.in/life-events-based-banking-services',
  ],
  'card-row-4': [
    'https://ujjivansfb.in/navratna',
    'https://ujjivansfb.in/personal/loans/vikas-loan',
    'https://ujjivansfb.in/feedback-form',
    'https://example.com/feat-card-4',
    'https://example.com/feat-card-5',
  ],
};
/* eslint-enable no-console */

// Function to wrap cards in <a> tags
function wrapCardsWithLinks() {
  Object.keys(links).forEach((rowClass) => {
    const row = document.querySelector(`.${rowClass}`);
    if (row) {
      const cards = row.querySelectorAll('.feat-row, .feat-card');
      cards.forEach((card, index) => {
        const href = links[rowClass][index];
        if (href) {
          const anchor = document.createElement('a');
          anchor.href = href;
          anchor.target = '_blank';
          card.parentNode.insertBefore(anchor, card);
          anchor.appendChild(card);
        }
      });
    }
  });
}

// Run the function
wrapCardsWithLinks();
