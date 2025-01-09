export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('card-row', 'card-row-' + (r + 1));
    if (r === 0) {
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('card-text');
        } else {
          div.classList.add('feat-row');
          const ptag = div.querySelectorAll('p');
          ptag.forEach((para, p) => {
            if (p === 0) {
              para.classList.add('card-img');
            }
            if (p === 1) {
              para.classList.add('card-para');
            }
          });
        }
      });
    }
    if (r !== 0) {
      [...row.children].forEach((div) => {
        div.classList.add('feat-card');
        const ptag = div.querySelectorAll('p');
        ptag.forEach((para, p) => {
          if (p === 0) {
            para.classList.add('card-img');
          }
          if (p === 1) {
            para.classList.add('card-para');
          }
        });
      });
    }
  });
  document.querySelectorAll('.feat-card, .feat-row').forEach((row) => {
    row.addEventListener('mouseover', () => {
      row.querySelectorAll('.card-img').forEach((cardImg) => {
        const coloredImage = cardImg.querySelector('picture:nth-of-type(1)');
        const whiteImage = cardImg.querySelector('picture:nth-of-type(2)');
        if (coloredImage) coloredImage.style.display = 'none';
        if (whiteImage) whiteImage.style.display = 'block';
      });
    });

    row.addEventListener('mouseout', () => {
      row.querySelectorAll('.card-img').forEach((cardImg) => {
        const coloredImage = cardImg.querySelector('picture:nth-of-type(1)');
        const whiteImage = cardImg.querySelector('picture:nth-of-type(2)');
        if (coloredImage) coloredImage.style.display = 'block';
        if (whiteImage) whiteImage.style.display = 'none';
      });
    });
  });
}
