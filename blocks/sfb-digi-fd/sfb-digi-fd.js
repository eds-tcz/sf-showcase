export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('digi-fd-main');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('digi-main-img');
      }
      if (d === 1) {
        div.classList.add('digi-main-body');
        const pTag = div.querySelectorAll('p');
        pTag.forEach((p, i) => {
          if (i === 0) {
            p.classList.add('hash-earn');
          }
        });
      }
    });
  });
}
