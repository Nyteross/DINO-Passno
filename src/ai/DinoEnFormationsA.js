import Dino from './Dino';
import Generation from './Generation';

export default class DinoEnFormationA extends Dino {

  static generation = new Generation();

  crossover(parentA, parentB) {
    console.log("[A] Crossover simple aléatoire");

    let chromosome1 = parentA.getChromosome();
    let chromosome2 = parentB.getChromosome();

    let crossOverPoint = Math.floor(Math.random() * chromosome1.length);
    console.log("Point de crossover :", crossOverPoint);

    for (let i = crossOverPoint; i < chromosome1.length; i++) {
      let temp = chromosome1[i];
      chromosome1[i] = chromosome2[i];
      chromosome2[i] = temp;
    }

    let enfant1 = new DinoEnFormationA();
    enfant1.setChromosome(chromosome1);

    let enfant2 = new DinoEnFormationA();
    enfant2.setChromosome(chromosome2);

    return [enfant1, enfant2];
  }

  mutation() {
    console.log("[A] Mutation faible : 1 gène modifié");

    let chromosome = this.getChromosome();
    const mutationPoint = Math.floor(Math.random() * chromosome.length);
    chromosome[mutationPoint] = Math.random();

    this.setChromosome(chromosome);
    return this;
  }

}
