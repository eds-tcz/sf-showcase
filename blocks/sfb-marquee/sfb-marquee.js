export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('static-title');
      [...row.children].forEach((div) => {
        const ptag = div.querySelectorAll('p');
        ptag.forEach((p, i) => {
          if (i === 0) {
            p.classList.add('marquee-img');
          }
          if (i === 1) {
            p.classList.add('marquee-text');
          }
        });
      });

    }
    if (r === 1) {
      row.classList.add('marquee-content');
    }
    // [...row.children].forEach((div, d) => {
    //   if (d === 0) {
    //     div.classList.add('class-name');
    //   }
    // });
  });
}