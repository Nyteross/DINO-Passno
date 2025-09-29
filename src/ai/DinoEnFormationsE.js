import Dino from './Dino';
import Generation from './Generation';

export default class DinoEnFormationE extends Dino {

  static generation = new Generation();

  crossover(parentA, parentB) {
    console.log("[E] Pas de crossover (clonage)");

    let enfant1 = new DinoEnFormationE();
    enfant1.setChromosome(parentA.getChromosome());

    let enfant2 = new DinoEnFormationE();
    enfant2.setChromosome(parentB.getChromosome());

    return [enfant1, enfant2];
  }

  mutation() {
    console.log("[E] Mutation extrême : réinitialisation complète du chromosome");

    let chromosome = this.getChromosome();
    chromosome = chromosome.map(() => Math.random());

    this.setChromosome(chromosome);
    return this;
  }

}
