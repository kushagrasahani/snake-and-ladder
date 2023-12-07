const numberOfCells = 42; 
    const centerX = 228;
    const centerY = 233;
    const radius = 200;
    const cellWidth = 15; 

    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'circle-cell';

 
      const angle = (2 * Math.PI / numberOfCells) * i;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      cell.style.left = `${x - cellWidth / 2}px`; 
      cell.style.top = `${y - cellWidth / 2}px`; 

      const rotation = angle * (180 / Math.PI) ; 
      cell.style.transform = `rotate(${rotation}deg)`;
      if(i==0||i%7==0){
        cell.style.backgroundColor="white";

        cell.style.marginTop="2px" ;
        cell.style.zIndex="10000";
        cell.classList.add("white");
      }
      if(i==1||i==8|| i==15|| i==22|| i==29||i==36){
        cell.style.backgroundColor="yellow";
      }
      if(i==2||i==9|| i==16|| i==23|| i==30||i==37){
        cell.style.backgroundColor="blue";
      }
      if(i==3||i==10|| i==17|| i==24|| i==31||i==38){
        cell.style.backgroundColor="red";
      }
      if(i==4||i==11|| i==18|| i==25|| i==32||i==39){
        cell.style.backgroundColor="orange";
      }
      if(i==5||i==12|| i==19|| i==26|| i==33||i==40){
        cell.style.backgroundColor="pink";
      }
      document.querySelector('.btwen').appendChild(cell);
    }
    let t=document.querySelector('.centercell');
    console.log(t.getBoundingClientRect().left);
    let bd=document.querySelector('body');
    console.log(bd.getBoundingClientRect(),"body");
    let c=document.querySelector('.white');
    console.log(c.getBoundingClientRect().left);
 
let row1=document.querySelector('.row1');
for(let j=0;j<5;j++){
    const cell = document.createElement('div');
    cell.className = 'row-cell1';
    row1.appendChild(cell);
}
let row2=document.querySelector('.row2');
for(let j=0;j<5;j++){
    const cell = document.createElement('div');
    cell.className = 'row-cell2';
 
    cell.style.transform=`translate(-32px, 11px);`;
    row2.appendChild(cell);
}
    
let row3=document.querySelector('.row3');
for(let j=0;j<5;j++){
    const cell = document.createElement('div');
    cell.className = 'row-cell3';
   
    // cell.style.transform=`translate(${-111-j}px,-121px)`;
    row3.appendChild(cell);
}
let row4=document.querySelector('.row4');
for(let j=0;j<5;j++){
    const cell = document.createElement('div');
    cell.className = 'row-cell4';
   
    // cell.style.transform=`translate(${-111-j}px,-121px)`;
    row4.appendChild(cell);
}
let row5=document.querySelector('.row5');
for(let j=0;j<5;j++){
    const cell = document.createElement('div');
    cell.className = 'row-cell5';
   
    // cell.style.transform=`translate(${-111-j}px,-121px)`;
    row5.appendChild(cell);
}
let row6=document.querySelector('.row6');
for(let j=0;j<5;j++){
    const cell = document.createElement('div');
    cell.className = 'row-cell6';
   
    // cell.style.transform=`translate(${-111-j}px,-121px)`;
    row6.appendChild(cell);
}
let start=document.querySelector('.white');


let po=document.querySelector('.moving-pointer');
start.appendChild(po);
const startCellIndex = 1; 
const rowLength = 7;

  // Variables to track game state
  let currentCellIndex = startCellIndex;
  let isNextNumberDisabled = false;
  let isFirstSixGenerated = false;

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }


  function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function nextNumber() {
    if (!isNextNumberDisabled) {
      const randomNumber = generateRandomNumber();
      document.querySelector('.shownumber').innerText = `Number: ${randomNumber}`;
      isNextNumberDisabled = true;
      document.querySelector('.btn').disabled = true;
      document.querySelector('.btn1').disabled = false;
    }
  }

  // Function to handle the "Move" button click
  function move() {
    if (isNextNumberDisabled) {
      const randomNumber = parseInt(document.querySelector('.shownumber').innerText.split(' ')[1]);
      movePawn(randomNumber);
      isNextNumberDisabled = false;
      document.querySelector('.btn').disabled = false;
      document.querySelector('.btn1').disabled = true;
    }
  }

  // Function to handle the movement of the pawn
  function movePawn(steps) {
    const cells = document.querySelectorAll('.circle-cell');
  

    for (let i = 1; i <= steps; i++) {
      setTimeout(() => {
        // Move to the next cell
        currentCellIndex = (currentCellIndex + 1) % numberOfCells;
        const cell = cells[currentCellIndex];
        const cellColor = cell.style.backgroundColor;

        // Move the pawn to the new cell
        cells[currentCellIndex].append(document.querySelector('.moving-pointer'));
      }, i * 500);
    }
    if(currentCellIndex==17 ||currentCellIndex==37){
        currentCellIndex = currentCellIndex+4;
        cells[currentCellIndex].append(document.querySelector('.moving-pointer'));
    }
  }