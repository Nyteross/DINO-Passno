import Dino from './Dino';
import Generation from './Generation';

export default class DinoEnFormation extends Dino {

  static generation = new Generation();

  // Fonction de crossover : mélange les chromosomes de deux parents pour créer deux enfants
  crossover(parentA, parentB) {
    console.log("Crossover entre deux dinosaures en formation");

    // Récupérer les chromosomes des parents
    let chromosome1 = parentA.getChromosome();
    let chromosome2 = parentB.getChromosome();
    console.log("Chromosome parent A :", chromosome1);
    console.log("Chromosome parent B :", chromosome2);

    // Choisir un point de coupure au hasard
    let crossOverPoint = Math.floor(Math.random() * chromosome1.length);
    console.log("Point de crossover choisi :", crossOverPoint);

    // Échanger les gènes entre les deux parents à partir du point de coupure
    for (let i = crossOverPoint; i < chromosome1.length; i++) {
      let temp = chromosome1[i];
      chromosome1[i] = chromosome2[i];
      chromosome2[i] = temp;
    }

    // Créer deux nouveaux enfants avec les chromosomes modifiés
    let enfant1 = new DinoEnFormation();
    enfant1.setChromosome(chromosome1);

    let enfant2 = new DinoEnFormation();
    enfant2.setChromosome(chromosome2);

    console.log("Chromosome enfant 1 :", chromosome1);
    console.log("Chromosome enfant 2 :", chromosome2);

    return [enfant1, enfant2];
  }

  // Fonction de mutation : change un gène du chromosome de manière aléatoire
  mutation() {
    console.log("Mutation d’un dinosaure en formation");

    // Récupérer le chromosome du dino
    let chromosome = this.getChromosome();
    console.log("Chromosome avant mutation :", chromosome);

    // Choisir un gène au hasard à modifier
    const mutationPoint = Math.floor(Math.random() * chromosome.length);
    chromosome[mutationPoint] = Math.random(); // nouvelle valeur aléatoire

    console.log("Mutation appliquée sur le gène n°" + mutationPoint);
    console.log("Chromosome après mutation :", chromosome);

    // Mettre à jour le chromosome du dino
    this.setChromosome(chromosome);

    return this;
  }

}
