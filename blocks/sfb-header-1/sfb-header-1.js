export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('header-container');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('blank-space');
      }
      if (d === 1) {
        div.classList.add('nav-links');
      }
      if (d === 2) {
        div.classList.add('contact-info');
        const ptag = div.querySelectorAll('p');
        ptag.forEach((p) => {
          p.classList.add('contact-link');
        });
      }
    });
  });
}
