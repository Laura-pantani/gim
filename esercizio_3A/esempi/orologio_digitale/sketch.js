function setup() {
	createCanvas(800, 600)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight) 

}

function draw() {
	let s = second()
	let m = minute()
	let h = hour()

	if(h<10) {
		h = "0" + h
	}

	if(m<10) {
		m = "0" + m 
	}

	if(s<10) {
		s = "0" +  s
	}

	let ora = h + ":" +  m +":" + s 

background(200)

textAlign(CENTER, CENTER)
textSize(50)
text(ora, width/2, height/2)

}