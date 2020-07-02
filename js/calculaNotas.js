
function calculaA1() {
    const wrapper = document.querySelector('#A1');
    const [inputA1, inputObj] = wrapper.querySelectorAll('input');
    const paragraph = wrapper.querySelector('p');
    if(inputA1.value && inputObj.value) {
        const A2 = ((parseFloat(inputObj.value) - (parseFloat(inputA1.value) * 0.4))/0.6);
        const text = `É necessário tirar ${A2.toFixed(2)} na A2 para ficar com a média de ${inputObj.value} .`;

        paragraph.innerText = text;
    }
}

function calculaA1A2() {
    const wrapper = document.querySelector('#A1A2');
    const [inputA1, inputA2] = wrapper.querySelectorAll('input');
    const paragraph = wrapper.querySelector('p');

    if(inputA1.value && inputA2.value) {
        let text;
        const average = ((parseFloat(inputA1.value) * 0.4) + (parseFloat(inputA2.value) * 0.6));
        if(average >= 5) {
            text = `Parabéns você foi aprovado com a média ${average.toFixed(2)} .`;
        } else {
            const a1sub = ((5 - (parseFloat(inputA2.value) * 0.6))/0.4);
            const a2sub = ((5 - (parseFloat(inputA1.value) * 0.4))/0.6);
            const a3 = Math.max(...[a1sub, a2sub]);
            text = `É necessário fazer a A3 e tirar ${a3.toFixed(2)} para ficar com a média de 5 .`; 
        }

        paragraph.innerText = text;
    }
}

function calculaA3() {
    const wrapper = document.querySelector('#A3');
    const [inputA1, inputA2, inputA3] = wrapper.querySelectorAll('input');
    const paragraph = wrapper.querySelector('p');

    if(inputA1.value && inputA2.value && inputA3.value) {
        let text;
        const averageA1 = ((parseFloat(inputA1.value) * 0.4) + (parseFloat(inputA3.value) * 0.6));
        const averageA2 = ((parseFloat(inputA2.value) * 0.6) + (parseFloat(inputA3.value) * 0.4));
        const average = Math.max(...[averageA1, averageA2]);
        if(average >= 5) {
            text = `Parabéns você foi aprovado com a média ${average.toFixed(2)} .`;
        } else {
            text = 'Você esta reprovado.'
        }

        paragraph.innerText = text;
    }
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