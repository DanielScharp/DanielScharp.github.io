function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 90 * i);
    });
}


const titulo = document.querySelector('.titulo');
setInterval(() => { typeWriter(titulo)}, 5000);