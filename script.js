let faseConcluida = false;

function moveLeft() {
  const square = document.getElementById('square');
  const circle = document.getElementById('circle');
  const left = parseInt(square.style.left) || 0;
  square.style.left = Math.max(0, left - 10) + 'px';
  checkCollision(square, circle);
}

function moveRight() {
  const square = document.getElementById('square');
  const circle = document.getElementById('circle');
  const left = parseInt(square.style.left) || 0;
  square.style.left = Math.min(350, left + 10) + 'px';
  checkCollision(square, circle);
}

function checkCollision(square, circle) {
  const squareRect = square.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();

  const buffer = 1;

  if (!faseConcluida && squareRect.right - buffer >= circleRect.left && squareRect.left + buffer <= circleRect.right &&
      squareRect.bottom - buffer >= circleRect.top && squareRect.top + buffer <= circleRect.bottom) {
    faseConcluida = true;
    setTimeout(function() {
      alert('Fase Concluída!');
      setTimeout(function() {
        square.style.left = '0px';
        faseConcluida = false;
      }, 500); 
    }, 500); 
  }
}
