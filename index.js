const colors = ['Red', 'Yellow', 'Green', 'Blue', 'Orange', 'Purple', 'Violet', 'Indigo','Tomato','black']; 


const selectedColor = document.querySelector('#selectedColor');

const container = document.querySelector('section');

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

for(let color of colors){
    const box = document.createElement('div');
    box.classList.add('box');
    
    container.appendChild(box);
    box.style.backgroundColor = color;

    box.addEventListener('click',function(){
        selectedColor.style.backgroundColor = color;
        selectedColor.innerText = color;
        h1.style.color = color;
        h2.innerText = `You have selected: `;
    })
}

