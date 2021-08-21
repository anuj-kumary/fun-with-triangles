const lengthOfSideA = document.querySelector('#a');
const lengthOfSideB = document.querySelector('#b');
const calHypotenuseBtn = document.querySelector('#cal-hypotenuse-btn');
const output = document.querySelector('#output');


function calculateHypotenuse(){
    let lengthOfA = Math.pow(Number( lengthOfSideA.value),2);
    let lengthOfB = Math.pow(Number( lengthOfSideB.value),2);
    let sumOfLength = lengthOfA + lengthOfB
    let sqrt = Math.sqrt(sumOfLength);
    output.innerText = `The length of the hypotenuse ${sqrt}`
}


calHypotenuseBtn.addEventListener('click', calculateHypotenuse)