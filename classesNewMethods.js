
var Vehicule = function(param1, param2){

    //Attributs
    this.couleur = param1 || "";
    this.marque = param2 || "";
    this.seDeplacer = function(){
        console.log("Je me déplace en roulant.");
    };
}

var P205 = new Vehicule('rouge', 'peugeot');

console.log(P205);
P205.seDeplacer();

// Classe selon l'ancienne méthode
var Moto = function(marque, modele, couleur){
    Vehicule.call(this, marque, modele);

    this.couleur = couleur || "";
}

console.log("moto1")

console.log(moto1);
//moto1.seDeplacer()
Vehicule.prototype.consomme = function(){

    console.log("Je consomme de l'essence pure");

}
//Ajoute une fonction au prototype de véhicule
Moto.prototype = Object.create(Vehicule.prototype);
var moto1;
moto1 = new Moto("Kawasaki", "R280", "rouge");

console.log(moto1)
moto1.consomme();

//Classes nouvelles méthodes


class SportDeCompetition {
    constructor(tennis1, sportDeRaquette, regionale) {

    }
    afficher(){
        console.log();
    }

}

var tennis = new SportDeCompetition("Tennis", "Sport de raquette", "Regionale");

class Sport{

    afficher2(){}

}

Sport.prototype.afficher2 = function(avecDetail)
{
    return function(separateur){
        if(avecDetail)
        {

        }
        else
        {

        }
    }
}
var tennis = new SportDeCompetition("Tennis", "Sport de raquette", "Regionale");
console.log("tennis.afficher");
tennis.afficher2();

/** A closure is the combination of a function and the lexical environment within which that function was declared.
 *
 * @type {function()}
 */
var librairieClosure = (function () {
    var librairie = {} // Create empty object

    librairie.enregistrer = function (target) {

        switch (target.toLowerCase()) {
            case 'memory' :
                return function(data) //Return a function !
                {

                }
                break;
            case 'localStorage' :

                break;

        }

    }

    return librairie;
});




