const field = document.getElementById('field');
let yAxis;
let xAxis;
let currentPosition;
let complete = false;

function isClear() {
  const grids = Array.from(document.querySelectorAll('td'));
  const notPaintedGrids = grids.filter(grid => !grid.classList.contains('painted'));
  return !notPaintedGrids.length;
}

function clear() {
  const clearText = document.getElementById('clear');
  clearText.classList.remove('hide');
  complete = true;
}

function unClear() {
  const clearText = document.getElementById('clear');
  clearText.classList.add('hide');
  complete = false;
}

function initPosition() {
  document.querySelectorAll('.painted').forEach(function(painted) {
    painted.removeAttribute('class');
  });
  const defaultY = 8;
  const defaultX = 4;
  yAxis = defaultY;
  xAxis = defaultX;
  setPosition(yAxis, xAxis);
}

function setPosition(yAxis, xAxis) {
  if(currentPosition) document.getElementById('currentPosition').removeAttribute('id');
  currentPosition = field.children[yAxis].children[xAxis];
  currentPosition.id = 'currentPosition';
  currentPosition.className = 'painted';
  if(isClear()) clear();
}

function move(key) {
  if (key === 'ArrowUp') yAxis--;
  if (key === 'ArrowDown') yAxis++;
  if (key === 'ArrowLeft') xAxis--;
  if (key === 'ArrowRight') xAxis++;
  if(yAxis < 0) yAxis++;
  if(xAxis < 0) xAxis++;
  if(yAxis > 9) yAxis--;
  if(xAxis > 9) xAxis--;
  setPosition(yAxis, xAxis);
}

document.body.addEventListener('keydown', function(event) {
  if(complete) return;
  const isMoveKey = !event.key.indexOf('Arrow');
  if(isMoveKey) move(event.key);
  if(event.key === 'Escape') initPosition();
});

window.onload = initPosition;
document.getElementById('reset').onclick = initPosition;
document.getElementById('retry').onclick = function() {
  unClear();
  initPosition();
}
