function setup() {
	createCanvas(600, 600)
}

function draw() {
	//background(120, 225, 125)

	if(mouseIsPressed) {
		fill(mouseX, mouseY, 100 - mouseY)
		ellipse(mouseX,mouseY,60)
		ellipse(width - mouseX, mouseY, 50)
	}

}

function keyPressed(){
	if(key == 's'){
		save ("immagine.png")
	} else if (key == 'x') {
		background(random(255), random(255), random(255))
	}
}

