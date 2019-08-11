const container = document.querySelector('#container');
container.style.cssText = `display: flex; flex-wrap: wrap; align-content: flex-start;
  width: 720px; height: 720px; border: 1px solid; margin: 25px auto;`;

const clear = document.querySelector('button');
clear.style.cssText = `margin: auto;`; 
clear.addEventListener('click', resetGrid);

function generateGrid(x) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++){
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.cssText = `width: ${720/x}px; height: ${720/x}px;`;
//      box.textContent = `${i*x+j}`;

      box.addEventListener('mouseenter', function(e) { e.target.style.background = 'blue';});      

      container.appendChild(box);
    }
  }

}

function resetGrid() {
  const num = prompt('How many boxes across?');
  
  let boxes = document.querySelectorAll('.box');
  for (let box of boxes) {
    box.remove();
  } 

  generateGrid(num);

/*  const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.style.background = 'white';});*/
}

generateGrid(16);
