import Dino from './Dino';
import Generation from './Generation';

export default class DinoEnFormationD extends Dino {

  static generation = new Generation();

  crossover(parentA, parentB) {
    console.log("[D] Crossover total : chaque gène choisi aléatoirement entre les deux parents");

    let chromosome1 = parentA.getChromosome();
    let chromosome2 = parentB.getChromosome();

    let enfantChromosome = chromosome1.map((gene, i) =>
      Math.random() < 0.5 ? gene : chromosome2[i]
    );

    let enfant = new DinoEnFormationD();
    enfant.setChromosome(enfantChromosome);

    return [enfant];
  }

  mutation() {
    console.log("[D] Mutation forte : ajustement de tous les gènes");

    let chromosome = this.getChromosome();
    chromosome = chromosome.map(gene =>
      gene + (Math.random() - 0.5) * 0.1 // petit bruit
    );

    this.setChromosome(chromosome);
    return this;
  }

}
