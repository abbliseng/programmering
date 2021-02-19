var w = 900
var h = 900

function setup() {
    createCanvas(w, h);
    background(51);
    // line(0, 0, width, height);
}

function mousePressed() {
    // var x = map(mouseX, 0, width, 0, 1);
    // var y = map(mouseY, 0, height, 1, 0);
    // var point = createVector(x, y);
    // data.push(point);
    // // console.clear();
    // console.log("X:"+x+" Y:"+y);
    // console.log(ymean);
    // console.log(data);
}

var tileSize = 0;

function generateGrid(gridSize) {
    for (let i = 1; i < gridSize; i++) {
        stroke(0,0,0);
        line(w*i/gridSize, 0, w*i/gridSize, h);
        line(0, h*i/gridSize, w, h*i/gridSize);
    }
    tileSize = w/gridSize;
    // fill(245,118,26);
    // stroke(245,118,26);
    // ellipse(tileSize/2,tileSize/2,tileSize-tileSize*0.2,tileSize-tileSize*0.2);
}


function draw() {
    generateGrid(10);

    //Rita ut varje datapunkt
    // for (let i = 0; i < data.length; i++) {
    //   var x = map(data[i].x, 0, 1, 0, width);
    //   var y = map(data[i].y, 0, 1, height, 0);
    //   fill(255);
    //   stroke(255);
    //   ellipse(x, y, 8, 8)

    // }
    //Om vi har mer än 1 punkt räkna ut och rita ut sträcket.
    // if (data.length > 1) {
    //   linearRegression();
    //   drawLine();
    // }

}