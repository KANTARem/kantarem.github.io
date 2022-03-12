const big = document.querySelector('#big');
const gallery = document.querySelectorAll('.gallery img');

gallery.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) 
{
    big.src = e.target.src;
    big.classList.add('brightness'), 500;
    setTimeout(() => big.classList.remove('brightness'), 500);
}