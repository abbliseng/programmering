var w = 900
var h = 900
var sideLength = 10
var mice = []
var t1 = 0;
var t2 = 0;

class Mouse {
    constructor(position, speed) {
        this.position = position;
        this.food = 50;
        this.lastMoved = 0;
        this.speed = speed;
        this.generateMouse(this.position[0],this.position[1]); // Generates the image
    }
    generateMouse(a,b) {
        var x = w*a/sideLength
        var y = h*b/sideLength
        fill(180,180,180);
        stroke(190,190,190);
        ellipse(x+tileSize/2,y+tileSize/2,tileSize*0.8,tileSize*0.8);
    }
    move(dir) {
        // 0 => up, 1 => ner, 2 => höger, 3 => vänster
        if (dir == 0){
            this.position[1] -= 1;
        }else if (dir == 1){
            this.position[1] += 1;
        }else if (dir == 2){
            this.position[0] += 1;
        }else if (dir == 3){
            this.position[0] -= 1;
        }
    }
}

function setup() {
    createCanvas(w, h);
    mice.push(new Mouse([1,1],1000))
    // mouse1.generateMouse();
}

function mousePressed() {
}

var tileSize = 0;
var currentGameScene = [];

function generateGrid(gridSize) {
    for (let i = 1; i < gridSize; i++) {
        stroke(0,0,0);
        line(w*i/gridSize, 0, w*i/gridSize, h);
        line(0, h*i/gridSize, w, h*i/gridSize);
    }
    tileSize = w/gridSize;
    currentGameScene = new Array(gridSize**2).fill(0.0);
}

function generateMouse() {
    // facing, energy, smell
}

function draw() {
    background(51);
    generateGrid(sideLength);
    t1 = millis();
    mice.forEach( (mouse, index) => {
        if ((t1-mouse.lastMoved)>=mouse.speed){
            mouse.move(2);
            mouse.lastMoved = t1;
        }
        mouse.generateMouse(mouse.position[0],mouse.position[1]);
    })
}