const board = document.querySelector('#board')
const colors = ['#FA8072', '#DC143C', '#FF4500', '#FFD700	', '#4B0082	','#00FA9A','#20B2AA','#87CEEB','#000080' ]
const SQUARES_NUMBER = 500

for (let i=0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor(){
  return colors [Math.floor(Math.random() * colors.length)]
  
}

