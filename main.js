function tocaSom (seletorAudio) {
        const elemento = document.querySelector(seletorAudio);
    
        if (elemento && elemento.localName === 'audio') {
            elemento.play();
        } else {
            console.log('elemento nao e tipo audio ou seletor invalido');
        }
    }

const listaDeTeclas = document.querySelectorAll('.tecla');

for (i=0; i < listaDeTeclas.length; i++) {
    const instrumento = listaDeTeclas[i].classList[1];
    const idElementoAudio = `#som_${instrumento}`;
    const tecla = listaDeTeclas[i];

    tecla.onclick = function (){
        tocaSom(idElementoAudio);

        tecla.onkeydown = function (evento) {
        
            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }
        
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    } 
}
