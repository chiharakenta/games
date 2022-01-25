const slotList = [
	0, 0, 0, 0, 0,
	0, 0, 0, 0, 0,
	0, 0, 99, 0, 0,
	0, 0, 0, 0, 0,
	0, 0, 0, 0, 99
];

let drag = 0;
let currentSlot = 0;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(30);
	if(drag === 1) fillCurrentSlot();
	renderSlot();
	if(isClear()) stageClear();
}

function fillCurrentSlot() {
	for(let i = 0; i <=24; i++) {
		let _x = (i % 5) * 50 + 170;
		let _y = int(i / 5) * 50 + 70;
		if(mouseX > _x && mouseX < _x + 50 && mouseY > _y && mouseY < _y + 50) {
			if(currentSlot === i) {
				
			} else if(slotList[i] === 0) {
				slotList[i] = 1;
				currentSlot = i;
			} else {
				if(slotList[i] === 1) resetSlotList();
			}
		}
	}
}

function renderSlot() {
	for(let i = 0; i <=24; i++) {
		let _x = (i % 5) * 50 + 170;
		let _y = int(i / 5) * 50 + 70;
		fill(255);
		if(slotList[i] === 1) fill(0, 200, 200);
		if(slotList[i] === 99) fill(100);
		rect(_x, _y, 50, 50);
	}
}


function mousePressed() {
	drag = 1;
}
function mouseReleased() {
	drag = 0;
}

function keyPressed() {
	resetSlotList();
}

function isClear() {
	const notFilledSlot = slotList.filter(slot => slot === 0);
	return notFilledSlot.length === 0;
}

function stageClear() {
	textSize(64);
	fill(255);
	textAlign(CENTER, CENTER);
	text('CLEAR', width/2, height/2);
}

function resetSlotList() {
	for(let i in slotList) {
		if(slotList[i] === 1) slotList[i] = 0;
	}
}