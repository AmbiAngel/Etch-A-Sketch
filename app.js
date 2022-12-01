let gridContainer = document.querySelector('.grid-container')
let resizeButtons = Array.from(document.querySelectorAll('.resize'))
let resetButton = document.querySelector('.reset')


resizeButtons.forEach(button =>{
    button.addEventListener('click', handleResizeButton)
})

resetButton.addEventListener('click',removeCells)

function handleResizeButton(e){
    if(e.target.textContent === '16x16'){
        removeGridSize()
        removeCells()
        setGridSize(16)
        loopNumOfTimes([16*16], ()=>{createDivCell()})
    } 
    else if(e.target.textContent === '32x32'){
        removeGridSize()
        removeCells()
        setGridSize(32)
        loopNumOfTimes([32*32], ()=>{createDivCell()})
    }
    else if(e.target.textContent === '64x64'){
        removeGridSize()
        removeCells()
        setGridSize(64)
        loopNumOfTimes([64*64], ()=>{createDivCell()})
    }
}

function removeCells(){
    let cells = document.querySelectorAll(`.cell`)
    cells.forEach(cell=>{
        gridContainer.removeChild(cell)
    })
}

function removeGridSize(){
    gridContainer.classList.remove('grid16x')
    gridContainer.classList.remove('grid32x')
    gridContainer.classList.remove('grid64x')
}

function setGridSize(num){
    gridContainer.classList.add(`grid${num}x`)
}


function loopNumOfTimes(num, callback){
    for(i=0;i<num; i++){
        callback()
    }
}

function createDivCell(){
    let newDiv = document.createElement('div')
    newDiv.classList.add('cell')
    gridContainer.appendChild(newDiv)
}