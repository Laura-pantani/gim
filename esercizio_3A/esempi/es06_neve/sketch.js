let fiocchi

function setup(){
	createCanvas(windowWidth, windowHeight)
	
	fiocchi = []


	
	for (let i=0; i<400; i++){ 
		fiocchi[i] = {
			px : random(0,width),
			py : random(-100,200),
			dim : random(30,60),
			vel : random(1,3),
			col : random(100,255),
		}

	}

}	



function draw() {
	background(100)
	

	for(let i=0; i<fiocchi.length; i++) {
		fiocchi[i].px = fiocchi[i].px + random(-1.5, 1.5)
		fiocchi[i].py = fiocchi[i].py + fiocchi[i].vel
		
		if(fiocchi[i].py > height + 100) {
			fiocchi[i].py = 0
		}
		
		fill(fiocchi[i].col)
		
		
		//textSize(fiocchi[i].dim)
		text("*",fiocchi[i].px, fiocchi[i].py)
	}
	
	

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}