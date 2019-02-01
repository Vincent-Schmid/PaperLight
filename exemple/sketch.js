var w = 40; //Size of the grid
var variable = 1; //id of the shape


function setup() {
  //CREATION OF THE CANVAS
  let canvas = createCanvas(600, 600);

  //ARRAY WITH THE MARKOV PROBABILITIES
  //probaShapes[0] = probability to have a rectangle after a rectangle
  //probaShapes[1] = probability to have a cercle after a rectangle
  //probaShapes[2] = probability to have a triangle after a rectangle
  //probaShapes[3] = probability to have a rectangle after a cercle
  //probaShapes[4] = probability to have a cercle after a cercle
  //probaShapes[5] = probability to have a triangle after a cercle
  //probaShapes[6] = probability to have a rectangle after a triangle
  //probaShapes[7] = probability to have a cercle after a triangle
  //probaShapes[8] = probability to have a triangle after a triangle

  //probaShapes[0] + probaShapes[1] + probaShapes[2] = 1
  //probaShapes[3] + probaShapes[4] + probaShapes[5] = 1
  //probaShapes[6] + probaShapes[7] + probaShapes[8] = 1

  var probaShapes = [0.3, 0.2, 0.5, 0.1, 0.6, 0.3, 0.4, 0.3, 0.3];

  //BLACK BACKGROUND
  background(0);

  //WHITE STROKE
  //stroke(255);

  //GRID DISTRIBUTION
  for ( var i = 0; i < width; i+=w) {
    for (var j = 0; j < height ; j+=w){

      //GRID
      //line(i, 0, i, height);
      //line(0, j, width, j);

      //FILLING OF THE SHAPES
      fill(couleur(0.6));

      //RPARTITION OF THE SHAPES WITH MARKOV
      markovFormes(variable, i, j, w, 1, probaShapes);
    }
  }
}


function draw() {

}

//REPARTITION OF THE COLOR (WHITE/BLACK)
function couleur(x){
  //proba is a random number between 0 and 1
	proba = random();
  //if the number entered in the function is bigger than proba
  //the shape will be white
	if(proba < x){
		return 255;
	}
  //if the number entered in the function is smaller than proba
  //the shape will be white
	else {
		return 0;
	}
}

//SIZE OF THE SHAPES
function taille(x){
	return x;
}

//MARKOVIAN REPARTITION OF THE SIZE
//if x = 1 : only big shapes
//if x = 0 : only small shapes
function markovTaille(x){
  //p is a random number between 0 and 1
	p = random();

  //if p is bigger than the the number entered in the function
  //the shape will be small
	if(p > x){
		return w/2;
	}
  //if p is smaller than the the number entered in the function
  //the shape will be big
	else {
		return w;
	}
}

//MARKOVIAN REPARTITION OF THE SHAPES
//k : id of the previous shape
//posi : vertical position
//posj : horizontal position
//x : size of the grid
//probaTaille : probability to have a big shape
//tabProba : array with the markovian probabilities
function markovFormes(k, posi, posj, x, probaTaille, tabProba){

  //p is a random number between 0 and 1
	p = random();

  //PREVIOUS SHAPE WAS A RECTANGLE
	if(k == 1){
		if(p < tabProba[0]){
      //reset of the shape ID
			variable = 1;

      //Markovian size
			a = markovTaille(probaTaille);

      //centering the shape on the grid box
			if(a == w/2){
				posi = posi+w/4;
				posj = posj+w/4;
			}

      //drawing of the next shape
			return rect(posi, posj, a, a);
		}

		if(tabProba[0] <= p && p < 1 - tabProba[2]){
      //reset of the shape ID
			variable = 2;

      //Markovian size
			a = markovTaille(probaTaille);

      //drawing of the next shape			
			return ellipse(posi+taille(x)/2, posj+taille(x)/2, a, a);
		}

		if(1 - tabProba[2] <= p){
      //reset of the shape ID
			variable = 3;

      //drawing of the next shape
			return polygon(posi+w/3, posj+taille(x)/2, markovTaille(probaTaille)*0.60, 3);
		}
	}

  //PREVIOUS SHAPE WAS A CIRCLE
	if(k == 2){
		if(p < tabProba[3]){
      //reset of the shape ID
			variable = 1;

      //Markovian size
			a = markovTaille(probaTaille);

      //centering the shape on the grid box
			if(a == w/2){
				posi = posi+w/4;
				posj = posj+w/4;
			}

      //drawing of the next shape
			return rect(posi, posj, a, a);
		}

		if(tabProba[3] <= p && p < 1 - tabProba[5]){
      //reset of the shape ID
			variable = 2;

      //Markovian size
			a = markovTaille(probaTaille);

      //drawing of the next shape		
			return ellipse(posi+taille(x)/2, posj+taille(x)/2, a, a);
		}

		if( 1 - tabProba[5] <= p){
      //reset of the shape ID
			variable = 3;

      //drawing of the next shape
			return polygon(posi+w/3, posj+taille(x)/2, markovTaille(probaTaille)*0.60, 3);
		}
	}

  //PREVIOUS SHAPE WAS A TRIANGLE
	if(k == 3){
		if(p < tabProba[6]){
      //reset of the shape ID
			variable = 1;

      //Markovian size
			a = markovTaille(probaTaille);

      //centering the shape on the grid box
			if(a == w/2){
				posi = posi+w/4;
				posj = posj+w/4;
			}

      //drawing of the next shape
			return rect(posi, posj, a, a);
		}

		if(tabProba[6] <= p && p < 1 - tabProba[8]){
      //reset of the shape ID
			variable = 2;

      //Markovian size
			a = markovTaille(probaTaille);	

      //drawing of the next shape		
			return ellipse(posi+taille(x)/2, posj+taille(x)/2, a, a);
		}

		if(1 - tabProba[8] <= p){
      //reset of the shape ID
      variable = 3;

      //drawing of the next shape
			return polygon(posi+w/3, posj+taille(x)/2, markovTaille(probaTaille)*0.60, 3);
		}
	}
}

//FUNCTION USE TO DRAW TRIANGLES
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