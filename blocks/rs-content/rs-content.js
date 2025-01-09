export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('rs-floater');
    }
    if (r === 1) {
      row.classList.add('rs-tabs');
      [...row.children].forEach((div) => {
        div.classList.add('rs-card');
        const rsCard = div.querySelectorAll('p');
        rsCard.forEach((p, i) => {
          if (i === 0) {
            p.classList.add('rs-card-per');
          }
          if (i === 1) {
            p.classList.add('rs-card-text');
          }
        });
      });
    }
    if (r === 2) {
      row.classList.add('rs-cta');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('rs-cta-text');
        }
        if (d === 1) {
          div.classList.add('rs-cta-link');
        }
      });
    }
    if (r === 3) {
      row.classList.add('rs-desc');
    }
  });
}
