import Dino from './Dino';
import Generation from './Generation';

export default class DinoEnFormationC extends Dino {

  static generation = new Generation();

  crossover(parentA, parentB) {
    console.log("[C] Crossover à deux points");

    let chromosome1 = parentA.getChromosome();
    let chromosome2 = parentB.getChromosome();

    let point1 = Math.floor(Math.random() * chromosome1.length);
    let point2 = Math.floor(Math.random() * chromosome1.length);

    if (point1 > point2) [point1, point2] = [point2, point1];
    console.log("Points de crossover :", point1, point2);

    for (let i = point1; i < point2; i++) {
      let temp = chromosome1[i];
      chromosome1[i] = chromosome2[i];
      chromosome2[i] = temp;
    }

    let enfant1 = new DinoEnFormationC();
    enfant1.setChromosome(chromosome1);

    let enfant2 = new DinoEnFormationC();
    enfant2.setChromosome(chromosome2);

    return [enfant1, enfant2];
  }

  mutation() {
    console.log("[C] Mutation probabiliste (20%)");

    let chromosome = this.getChromosome();
    if (Math.random() < 0.2) {
      const mutationPoint = Math.floor(Math.random() * chromosome.length);
      chromosome[mutationPoint] = Math.random();
      console.log("Mutation appliquée sur le gène :", mutationPoint);
    }

    this.setChromosome(chromosome);
    return this;
  }

}
