function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
	background(0)
	
	rotateX(- mouseY * 0.01)
	rotateY(- mouseX * 0.01)

	//box(100) 

	let dimensione = 1000

	for (let i=0; i<100; i++) {
		
		let gl = random(10,150)
		let gx = random(-dimensione, dimensione)
		let gy = random(-dimensione, dimensione - gl)
		let gz = random(-dimensione, dimensione)
		
		
		stroke(255, 200)
		strokeWeight(random(1,3))
		line (gx, gy, gz,     gx, gx+gl, gz)
	}


	
}
