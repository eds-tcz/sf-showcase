export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('sfb-title-heading');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('sfb-heading');
        const ptag = div.querySelectorAll('p');
        ptag.forEach((p, i) => {
            p.classList.add('head-para-'+(i + 1));
        });
      }
    });
  });
}