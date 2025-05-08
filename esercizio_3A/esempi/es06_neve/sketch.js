let fiocchi

function setup(){
	createCanvas(windowWidth, windowHeight)
	
	fiocchi = []
	
	for (let i=0; i<500; i++){ 
		fiocchi[i] = {
			px : random(0, width),
			py : random(-100, 200),
			dim : random(30,60),
			vel : random(1,5),
			col : random(255,255)
		}

	}

}	

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(100)
	textAlign(CENTER, CENTER)

	for(let i=0; i<fiocchi.lenght; i++){
		fill(fiocchi[i].col)

		fiocchi[i].px = fiocchi[i].px + random(-1.5, 1.5)
		fiocchi[i].py = fiocchi[i].py + fiocchi[i].vel

	 
	if(fiocchi[i].py > height) {
		fiocchi[i].py = 0
	}

		
		
		textSize(fiocchi[i].dim)
		text("*",fiocchi[i].px, fiocchi[i].py)
	}
	
	

}

