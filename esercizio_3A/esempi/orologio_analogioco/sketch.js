function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCAnvas(windowWidth, windowHeight)

}

function draw() {
	background(200)
	translate(width/2, height/2);
	
	
	noStroke()
	ellipse(0,0,420)
	

	fill(0)
	for(let i=0; i<60; i++) {
		push()
		rotate (i / 60 * TWO_PI)

		if(i % 5 == 0) {
			ellipse(0,-180,15)
		}else{
			ellipse(0,-180, 5)

		}
		pop()

	}
	
	let s = second()
	let m = minute ()
	let h = hour ()

	rotate(map (h,0,12,0,TWO_PI));
	fill(0)
	rect(-10,20,20,-140)

	//minuti
	rotate(map (m,0,60,0,TWO_PI));
	fill(0)
	rect(-6,20,12,-180)

	//secondi
	rotate(map (s,0,60,0,TWO_PI));
	

	fill(255,0,0)
	rect(-3, 20, 6, -200) 

	ellipse(0,-180,30)

	//centrino
	fill(255)
	ellipse(0,0,5)


}