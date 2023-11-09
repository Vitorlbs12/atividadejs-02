let nome = document.querySelector('#nome');

let peso = document.querySelector('#peso');

let altura = document.querySelector('#altura');

let resultado = document.querySelector('#resultado');

let calculoImc = () => {

    if (peso.value !== '' && altura.value !=='') {
       let imc = (peso.value / (altura.value * altura.value)).toFixed(2);
       let classifi = ''

       if (imc < 16.9) {
        classifi = 'Muito abaixo do peso';
       } else if (imc == 17 && imc <= 18.4) {
        classifi = 'Abaixo do peso'
       } else if (imc == 18.5 && imc <= 24.9) {
        classifi = 'Peso normal';
       } else if (imc == 25 && imc <=29.9) {
        classifi = 'Acima do peso';
       } else if (imc == 30 && imc <= 34.9) {
        classifi = 'Obesidade grau 1'
       } else if (imc == 35 && imc <= 40) {
        classifi = 'Obesidade grau 2'
       } else if (imc > 40) {
        classifi = 'Obesidade grau 3'
       }
    
       resultado.innerHTML = `seu IMC é: ${imc} (${classifi})`
    } else {
    resultado.innerHTML = `Por favor prencher os campos `;
    }
}