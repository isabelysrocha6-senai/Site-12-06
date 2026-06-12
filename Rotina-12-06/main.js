// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#meuBtn') || document.querySelector('button');
  if (!btn) return;

  const IMAGES = [
    'https://www.belasfrasesdeamor.com.br/wp-content/uploads/2013/08/nosso-amor-400x400.png',
    'https://www.frasesdobem.com.br/wp-content/uploads/2023/03/inesperado-mais-esperado.png',
    'https://imagens.ne10.uol.com.br/veiculos/_midias/png/2022/06/06/dia_dos_namorados_ne10_2022_5-21164216.png',
    'https://noivou.com.br/wp-content/uploads/2024/08/dia-dos-namorados-para-casado01.jpg'
  ];

  IMAGES.forEach(src => { const p = new Image(); p.src = src; });

  let current = 0;

  btn.addEventListener('click', () => {
    btn.classList.remove('romantico');
    void btn.offsetWidth;
    btn.classList.add('romantico');

    mostrarImg(current);

    current = (current + 1) % IMAGES.length;

    setTimeout(() => btn.classList.remove('romantico'), 1300);
  });

  window.mostrarImg = function (index = 0, marginTop = 40) {
    const img = document.getElementById('img');
    if (!img) return;
    const src = IMAGES[index % IMAGES.length];
    img.src = src;
    img.style.display = 'block';
    requestAnimationFrame(() => img.classList && img.classList.add('show'));

    const value = typeof marginTop === 'number' ? `${marginTop}px` : marginTop;
    btn.style.marginTop = value;
  };
});