var slider;
var checkboxCarre;
var checkboxRond;
var checkboxTriangle;
var w;
var columns;
var rows;
var variable = 1;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.position(800, 50);
  //canvas.class("lemon");

  tailleGrille(40);
  columns = floor(width/w);
  rows = floor(height/w);

  
}


function draw() {

  background(0);

  stroke(255);

  for ( var i = 0; i < width; i+=w) {
    for (var j = 0; j < height ; j+=w){
      line(i, 0, i, height);
      line(0, j, width, j);
    }
  }
}


function carreCheckEvent() {
  if (this.checked()) {
    checkboxCarre = 1;
  } else {
    checkboxCarre = 0;
  }
}


function couleur(x){
  proba = random(0,100);
  if(proba < x){
    return 255;
  }
  else {
    return 0;
  }
}

function taille(x){
  return x;
}

function tailleGrille(x){
  w = x;
}

function markovTaille(x){
  p = random();

  if(p < x){
    return w/2;
  }
  else {
    return w;
  }
}

function markovFormes(k, posi, posj, x, probaTaille, tabProba){

  p = random();

  if(k == 1){
    if(p < tabProba[0]){
      variable = 1;
      a = markovTaille(probaTaille);
      if(a == w/2){
        posi = posi+w/4;
        posj = posj+w/4;
      }
      return rect(posi, posj, a, a);
    }

    if(tabProba[0] <= p && p < 1 - tabProba[2]){
      variable = 2;
      a = markovTaille(probaTaille);      
      return ellipse(posi+taille(x)/2, posj+taille(x)/2, a, a);
    }

    if(1 - tabProba[2] <= p){
      variable = 3;
      return polygon(posi+w/3, posj+taille(x)/2, markovTaille(probaTaille)*0.60, 3);
    }
  }
  if(k == 2){
    if(p < tabProba[3]){
      variable = 1;
      a = markovTaille(probaTaille);
      if(a == w/2){
        posi = posi+w/4;
        posj = posj+w/4;
      }
      return rect(posi, posj, a, a);
    }

    if(tabProba[3] <= p && p < 1 - tabProba[5]){
      variable = 2;
      a = markovTaille(probaTaille);      
      return ellipse(posi+taille(x)/2, posj+taille(x)/2, a, a);
    }

    if( 1 - tabProba[5] <= p){
      variable = 3;
      return polygon(posi+w/3, posj+taille(x)/2, markovTaille(probaTaille)*0.60, 3);
    }
  }
  if(k == 3){
    if(p < tabProba[6]){
      variable = 1;
      a = markovTaille(probaTaille);
      if(a == w/2){
        posi = posi+w/4;
        posj = posj+w/4;
      }
      return rect(posi, posj, a, a);
    }

    if(tabProba[6] <= p && p < 1 - tabProba[8]){
      variable = 2;
      a = markovTaille(probaTaille);      
      return ellipse(posi+taille(x)/2, posj+taille(x)/2, a, a);
    }

    if(1 - tabProba[8] <= p){
      variable = 3;
      return polygon(posi+w/3, posj+taille(x)/2, markovTaille(probaTaille)*0.60, 3);
    }
  }
}


function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}