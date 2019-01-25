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
  canvas.position(750, 50);
  //canvas.class("lemon");

  //FORMES
  checkboxCarre = createCheckbox('Carré', false);
  checkboxCarre.position(20, 130);
  checkboxCarre.changed(carreCheckEvent);

  checkboxRond = createCheckbox('Rond', false);
  checkboxRond.position(120, 130);
  //checkboxRond.changed(myCheckedEvent);

  checkboxTriangle = createCheckbox('Triangle', false);
  checkboxTriangle.position(210, 130);
  //checkboxTriangle.changed(myCheckedEvent);

  //MARKOV REPARTITION
  let textMarkovRepartition = createDiv('REPARTITION MARKOVIENNE DES FORMES :');
  textMarkovRepartition.position(20,170);

  	//CARRE
  let textMarkovCarre = createDiv('Carré : ');
  textMarkovCarre.position(20,230);

  let textProbaCarre1 = createDiv('Carré');
  textProbaCarre1.position(130,205);

  let textProbaRond1 = createDiv('Rond');
  textProbaRond1.position(290,205);

  let textProbaTriangle1 = createDiv('Triangle');
  textProbaTriangle1.position(430, 205);

  sliderMarkovRepartitionCarre = createSlider(0, 100, 50, 10);
  sliderMarkovRepartitionCarre.position(90, 230);
  sliderMarkovRepartitionCarre.style('width', '100px');

  sliderMarkovRepartitionCarre2 = createSlider(00, 100, 50, 10);
  sliderMarkovRepartitionCarre2.position(250, 230);
  sliderMarkovRepartitionCarre2.style('width', '100px');
  
  sliderMarkovRepartitionCarre3 = createSlider(00, 100, 50, 10);
  sliderMarkovRepartitionCarre3.position(400, 230);
  sliderMarkovRepartitionCarre3.style('width', '100px');

  	//ROND
  let textMarkovRond = createDiv('Rond : ');
  textMarkovRond.position(20,280);

  sliderMarkovRepartitionRond = createSlider(0, 100, 50, 10);
  sliderMarkovRepartitionRond.position(90, 280);
  sliderMarkovRepartitionRond.style('width', '100px');

  sliderMarkovRepartitionRond2 = createSlider(00, 100, 50, 10);
  sliderMarkovRepartitionRond2.position(250, 280);
  sliderMarkovRepartitionRond2.style('width', '100px');

  sliderMarkovRepartitionRond3 = createSlider(00, 100, 50, 10);
  sliderMarkovRepartitionRond3.position(400, 280);
  sliderMarkovRepartitionRond3.style('width', '100px');

  	//TRIANGLE
  let textMarkovTriangle = createDiv('Triangle : ');
  textMarkovTriangle.position(20,330);

  sliderMarkovRepartitionTriangle = createSlider(0, 100, 50, 10);
  sliderMarkovRepartitionTriangle.position(90, 330);
  sliderMarkovRepartitionTriangle.style('width', '100px');

  sliderMarkovRepartitionTriangle2 = createSlider(00, 100, 50, 10);
  sliderMarkovRepartitionTriangle2.position(250, 330);
  sliderMarkovRepartitionTriangle2.style('width', '100px');

  sliderMarkovRepartitionTriangle3 = createSlider(00, 100, 50, 10);
  sliderMarkovRepartitionTriangle3.position(400, 330);
  sliderMarkovRepartitionTriangle3.style('width', '100px');

  //GRILLE
  let textGrille = createDiv('TAILLE DE LA GRILLE : ');
  textGrille.position(20, 400);

  sliderGrille = createSlider(20, 120, 60, 20);
  sliderGrille.position(180, 400);
  sliderGrille.style('width', '100px');

  //TAILLE DES FORMES
  let textTaille = createDiv('TAILLE DES FORMES : ');
  textTaille.position(20, 450);

  sliderTaille = createSlider(0, 1, 0.5, 0);
  sliderTaille.position(180, 450);
  sliderTaille.style('width', '100px');

  //BACKGROUND
  let textBackground = createDiv('BACKGROUND :');
  textBackground.position(20, 500);

  sliderBackground = createSlider(0, 255, 255, 255);
  sliderBackground.position(135, 500);
  sliderBackground.style('width', '100px');

  //BORDURE
  let textBordure = createDiv('BORDURE :');
  textBordure.position(20, 550);

  sliderBordure = createSlider(0, 255, 0, 0);
  sliderBordure.position(100, 550);
  sliderBordure.style('width', '100px');

  //DENSITE
  let textCouleur = createDiv('DENSITE :');
  textCouleur.position(20, 600);

  sliderCouleur = createSlider(0, 100, 50, 0);
  sliderCouleur.position(100, 600);
  sliderCouleur.style('width', '100px');

  //VITESSE
  let textVitesse = createDiv('VITESSE :');
  textVitesse.position(20, 650);

  sliderVitesse = createSlider(0.1, 3, 1.5, 0);
  sliderVitesse.position(100, 650);
  sliderVitesse.style('width', '100px');
  
}


function draw() {

  var vitesse = sliderVitesse.value();

  frameRate(vitesse);

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

  var taille = sliderTaille.value();

  var bordure = sliderBordure.value();

  var test = sliderBackground.value();

  var val = sliderGrille.value();
  tailleGrille(val);

  var slidercouleur = sliderCouleur.value();

  background(test);
  stroke(bordure);

  for ( var i = 0; i < width; i+=w) {
		for (var j = 0; j < height ; j+=w){
			//line(i, 0, i, height);
			//line(0, j, width, j);
			fill(couleur(slidercouleur));
			markovFormes(variable, i, j, w, taille, total);
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

	if(p > x){
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