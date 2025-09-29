import Dino from './Dino';
import Generation from './Generation';

export default class DinoEnFormationB extends Dino {

  static generation = new Generation();

  crossover(parentA, parentB) {
    console.log("[B] Crossover au milieu du chromosome");

    let chromosome1 = parentA.getChromosome();
    let chromosome2 = parentB.getChromosome();

    let crossOverPoint = Math.floor(chromosome1.length / 2);
    console.log("Point de crossover :", crossOverPoint);

    for (let i = crossOverPoint; i < chromosome1.length; i++) {
      let temp = chromosome1[i];
      chromosome1[i] = chromosome2[i];
      chromosome2[i] = temp;
    }

    let enfant1 = new DinoEnFormationB();
    enfant1.setChromosome(chromosome1);

    let enfant2 = new DinoEnFormationB();
    enfant2.setChromosome(chromosome2);

    return [enfant1, enfant2];
  }

  mutation() {
    console.log("[B] Mutation multiple : 2 gènes modifiés");

    let chromosome = this.getChromosome();
    for (let i = 0; i < 2; i++) {
      const mutationPoint = Math.floor(Math.random() * chromosome.length);
      chromosome[mutationPoint] = Math.random();
    }

    this.setChromosome(chromosome);
    return this;
  }

}
