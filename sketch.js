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
  canvas.class("lemon");

  //FORMES
  checkboxCarre = createCheckbox('CARRE', false);
  checkboxCarre.position(19, 150);
  checkboxCarre.changed(carreCheckEvent);

  checkboxRond = createCheckbox('ROND', false);
  checkboxRond.position(120, 150);
  //checkboxRond.changed(myCheckedEvent);

  checkboxTriangle = createCheckbox('TRIANGLE', false);
  checkboxTriangle.position(210, 150);
  //checkboxTriangle.changed(myCheckedEvent);

  //MARKOV REPARTITION
  let textMarkovRepartition = createDiv('Répartition Markovienne des formes');
  textMarkovRepartition.position(50,200);

  	//CARRE
  let textMarkovCarre = createDiv('CARRE');
  textMarkovCarre.position(0,300);

  let textProbaCarre1 = createDiv('Carre');
  textProbaCarre1.position(70,230);

  let textProbaRond1 = createDiv('Rond');
  textProbaRond1.position(70,280);

  let textProbaTriangle1 = createDiv('Triangle');
  textProbaTriangle1.position(70,330);

  sliderMarkovRepartitionCarre = createSlider(0, 100, 65, 10);
  sliderMarkovRepartitionCarre.position(50, 250);
  sliderMarkovRepartitionCarre.style('width', '100px');

  sliderMarkovRepartitionCarre2 = createSlider(00, 100, 30, 10);
  sliderMarkovRepartitionCarre2.position(50, 300);
  sliderMarkovRepartitionCarre2.style('width', '100px');
  
  sliderMarkovRepartitionCarre3 = createSlider(00, 100, 30, 10);
  sliderMarkovRepartitionCarre3.position(50, 350);
  sliderMarkovRepartitionCarre3.style('width', '100px');

  	//ROND
  let textMarkovRond = createDiv('ROND');
  textMarkovRond.position(200,300);

  let textProbaCarre2 = createDiv('Carre');
  textProbaCarre2.position(250,230);

  let textProbaRond2 = createDiv('Rond');
  textProbaRond2.position(250,280);

  let textProbaTriangle2 = createDiv('Triangle');
  textProbaTriangle2.position(250,330);

  sliderMarkovRepartitionRond = createSlider(0, 100, 30, 10);
  sliderMarkovRepartitionRond.position(250, 250);
  sliderMarkovRepartitionRond.style('width', '100px');

  sliderMarkovRepartitionRond2 = createSlider(00, 100, 30, 10);
  sliderMarkovRepartitionRond2.position(250, 300);
  sliderMarkovRepartitionRond2.style('width', '100px');

  sliderMarkovRepartitionRond3 = createSlider(00, 100, 30, 10);
  sliderMarkovRepartitionRond3.position(250, 350);
  sliderMarkovRepartitionRond3.style('width', '100px');

  	//TRIANGLE
  let textMarkovTriangle = createDiv('TRIANGLE');
  textMarkovTriangle.position(400,300);

  let textProbaCarre3 = createDiv('Carre');
  textProbaCarre3.position(500,230);

  let textProbaRond3 = createDiv('Rond');
  textProbaRond3.position(500,280);

  let textProbaTriangle3 = createDiv('Triangle');
  textProbaTriangle3.position(500,330);

  sliderMarkovRepartitionTriangle = createSlider(0, 100, 30, 10);
  sliderMarkovRepartitionTriangle.position(500, 250);
  sliderMarkovRepartitionTriangle.style('width', '100px');

  sliderMarkovRepartitionTriangle2 = createSlider(00, 100, 30, 10);
  sliderMarkovRepartitionTriangle2.position(500, 300);
  sliderMarkovRepartitionTriangle2.style('width', '100px');

  sliderMarkovRepartitionTriangle3 = createSlider(00, 100, 30, 10);
  sliderMarkovRepartitionTriangle3.position(500, 350);
  sliderMarkovRepartitionTriangle3.style('width', '100px');
  

  //GRILLE
  let textGrille = createDiv('Taille de la Grille');
  textGrille.position(50,600);

  sliderGrille = createSlider(20, 120, 60, 20);
  sliderGrille.position(50, 620);
  sliderGrille.style('width', '80px');

  //COULEUR
  let textCouleur = createDiv('Densité');
  textCouleur.position(50,650);

  sliderCouleur = createSlider(0, 100, 50, 0);
  sliderCouleur.position(50, 670);
  sliderCouleur.style('width', '80px');

    /*for ( var i = 0; i < width; i+=w) {
		for (var j = 0; j < height ; j+=w){
			fill(255);
			markovFormes(variable, i, j, w, 0);
		}
  }*/

  frameRate(0.7);
  
}


function draw() {

  var probaCarre1 = sliderMarkovRepartitionCarre.value();
  var probaCarre2 = sliderMarkovRepartitionCarre2.value();
  var probaCarre3 = sliderMarkovRepartitionCarre3.value();

  var proba1 = probaCarre1/(probaCarre1 + probaCarre2 + probaCarre3);
  var proba2 = probaCarre2/(probaCarre1 + probaCarre2 + probaCarre3);
  var proba3 = probaCarre3/(probaCarre1 + probaCarre2 + probaCarre3);


  var probaRond1 = sliderMarkovRepartitionRond.value();
  var probaRond2 = sliderMarkovRepartitionRond2.value();
  var probaRond3 = sliderMarkovRepartitionRond3.value();

  var proba4 = probaRond1/(probaRond1 + probaRond2 + probaRond3);
  var proba5 = probaRond2/(probaRond1 + probaRond2 + probaRond3);
  var proba6 = probaRond3/(probaRond1 + probaRond2 + probaRond3);


  var probaTriangle1 = sliderMarkovRepartitionTriangle.value();
  var probaTriangle2 = sliderMarkovRepartitionTriangle2.value();
  var probaTriangle3 = sliderMarkovRepartitionTriangle3.value();

  var proba7 = probaTriangle1/(probaTriangle1 + probaTriangle2 + probaTriangle3);
  var proba8 = probaTriangle2/(probaTriangle1 + probaTriangle2 + probaTriangle3);
  var proba9 = probaTriangle3/(probaTriangle1 + probaTriangle2 + probaTriangle3);

  var total = [proba1, proba2, proba3, proba4, proba5, proba6, proba7, proba8, proba9];

  var val = sliderGrille.value();
  tailleGrille(val);

  var slidercouleur = sliderCouleur.value();

  background(255);
  stroke(255);

  for ( var i = 0; i < width; i+=w) {
		for (var j = 0; j < height ; j+=w){
			//line(i, 0, i, height);
			//line(0, j, width, j);
			fill(couleur(slidercouleur));
			markovFormes(variable, i, j, w, 0, total);
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