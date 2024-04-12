let marginZleva = 0;
let marginZhora = 0;
const auticko = document.querySelector('img');

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    auticko.style.transform = 'scaleX(1)';
    marginZleva += 5;
    auticko.style.marginLeft = `${marginZleva}px`;
  }
  if (e.key === 'ArrowLeft') {
    auticko.style.transform = 'scaleX(-1)';
    if (marginZleva > 0) {
      marginZleva -= 5;
      auticko.style.marginLeft = `${marginZleva}px`;
    }
  }
  if (e.key === 'ArrowDown') {
    auticko.style.transform = 'rotate(90deg)';
    marginZhora += 5;
    auticko.style.marginTop = `${marginZhora}px`;
  }
  if (e.key === 'ArrowUp') {
    auticko.style.transform = 'rotate(-90deg)';
    if (marginZhora > 0) {
      marginZhora -= 5;
      auticko.style.marginTop = `${marginZhora}px`;
    }
  }
});
