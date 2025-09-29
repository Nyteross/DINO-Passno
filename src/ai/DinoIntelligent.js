import Dino from './Dino';
import Generation from './Generation';

export default class DinoIntelligent extends Dino {

  static generation = new Generation();

  // pourrait être réécrite avec un seul parent, et l'autre est this
  // dans un tel cas elle s'appellerait avec champion[0].crossover(champion[1]);
  crossover(parentA, parentB) {
    // console.info(parentA + parentB)
    let chromosome1 = parentA.getChromosome();
    let chromosome2 = parentB.getChromosome();
    let crossOverPoint = Math.floor(Math.random() * chromosome2.length);
    for (let i = 0; i < crossOverPoint; i += 1) {
        let temp = chromosome1[i];
        chromosome1[i] = chromosome2[i];
        chromosome2[i] = temp;
    }
    let enfant1 = new DinoIntelligent();
    enfant1.setChromosome(chromosome1);
    let enfant2 = new DinoIntelligent();
    enfant2.setChromosome(chromosome2);
    let enfants = [enfant1, enfant2];
    console.log("Fin crossover");
    console.log(enfants);
    return enfants;
  }


  mutation() {
      let chromosome = this.getChromosome();
      const mutationPoint = Math.floor(Math.random() * chromosome.length);
      chromosome[mutationPoint] = Math.random();
      this.setChromosome(chromosome);
      return this;
  }

}
