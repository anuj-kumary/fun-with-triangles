const base = document.querySelector('#base');
const height = document.querySelector('#height');
const calAreaBtn = document.querySelector('#cal-area-btn')
const output = document.querySelector('#output')
function calculateArea(){
    let baseValue = Number(base.value);
    let heightValue = Number(height.value);
    let area = baseValue * heightValue / 2;
    console.log(area)
    output.innerText = `The area of the triangle is ${area} cm²`
}


calAreaBtn.addEventListener('click',calculateArea)