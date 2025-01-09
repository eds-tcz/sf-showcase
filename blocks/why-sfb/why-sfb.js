export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('sfb-card-list');
    [...row.children].forEach((div, d) => {
        div.classList.add('sfb-icon-card');
        const ptags = div.querySelectorAll('p');
        ptags.forEach((p , i) => {
            if (i === 0) {
                p.classList.add('sfb-card-img');
            }
            if (i === 1) {
              p.classList.add('sfb-card-num');
            }
            if (i === 2) {
              p.classList.add('sfb-card-text');
            }
        });
    });
  });
}
