export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('quick-links');
    [...row.children].forEach((div, d) => {
        div.classList.add('ql-col-'+(d + 1));
    });
  });

    const qlCol1Div = document.querySelector('.ql-col-1');
    const pTag = qlCol1Div.querySelector('p');
    const ulTag = qlCol1Div.querySelector('ul');

    if (pTag && ulTag) {
      pTag.addEventListener('click', () => {
        // Toggle the visibility of the ul tag
        ulTag.style.display = ulTag.style.display === 'none' ? 'block' : 'none';
      });
    }
}