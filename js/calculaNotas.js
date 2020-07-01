
function calculaA1() {
    const a1wrapper = document.querySelector('#A1');
    const [inputA1, inputObj] = a1wrapper.querySelectorAll('input');
    const paragraph = a1wrapper.querySelector('p');
    if(inputA1.value && inputObj.value) {
        const A2 = ((parseFloat(inputObj.value) - (parseFloat(inputA1.value) *0.4))/0.6).toFixed(2);
        const text = `É necessário tirar ${A2} na A2 para ficar com a média de ${inputObj.value}.`;
        paragraph.innerText = text;
    }
}

function calculaA1A2() {
    console.log('clicou in a1 a2');
}

function calculaA3() {
    console.log('clicou in a3');
}

function buttonsEvent(event) {
    const buttonsFunc = {
        'calc_A1': calculaA1,
        'calc_A1A2': calculaA1A2,
        'calc_A3': calculaA3,
    }
    buttonsFunc[event.target.id]();
}

function calculaNotas() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => button.addEventListener('click', buttonsEvent));
}

export default calculaNotas;