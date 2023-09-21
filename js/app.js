// Efecto Scroll
const imagenCN = document.getElementById('imgParallax');
const Encabezado = document.querySelector('.Encabezado');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        Encabezado.classList.add('active')
    }else{
        Encabezado.classList.remove('active')
    }
    let ventanaScroll = window.scrollY;
    imagenCN.style.transform = `translateY(-${ventanaScroll/12}%)`
})
