const field = document.getElementById('field');
let yAxis;
let xAxis;
let currentPosition;

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
  const isMoveKey = !event.key.indexOf('Arrow');
  if(isMoveKey) move(event.key);
});

window.onload = initPosition;
document.getElementById('reset').onclick = (function() {
  initPosition();
});
