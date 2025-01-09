export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('header-cont');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('header-logo');
      }
      if (d === 1) {
        div.classList.add('main-nav');
        const ultag = div.querySelector('ul');
        ultag.classList.add('header-nav-list');
      }
      if (d === 2) {
        div.classList.add('action-container');
        const ptag = div.querySelectorAll('p');
        ptag.forEach((p, i) => {
          if (i === 0) {
            p.classList.add('btn-login');
          }
          if (i === 1) {
            p.classList.add('search-icon');
          }
        });
      }
    });
  });
}
