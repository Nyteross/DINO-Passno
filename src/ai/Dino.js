import Model from './Model';

export default class Dino extends Model {

  weights = [];
  biases = [];

  init() {
    console.log("Dino.init()");
    this.randomize();
  }

  random() {
    return (Math.random() - 0.5) * 2;
  }

  randomize() {
    this.weights[0] = this.random();
    this.weights[1] = this.random();
    this.weights[2] = this.random();
    this.biases[0] = this.random();
  }
  getChromosome() {
    return this.weights.concat(this.biases);
  }

  setChromosome(chromosome) {
    this.weights[0] = chromosome[0];
    this.weights[1] = chromosome[1];
    this.weights[2] = chromosome[2];
    this.biases[0] = chromosome[3];
  }

  predict(inputXs) {
    const inputX = inputXs[0];
    const y =
      this.weights[0] * inputX[0] +
      this.weights[1] * inputX[1]+
      this.weights[2] * inputX[2] +
      this.biases[0];
    return y < 0 ? 1 : 0;
  }
}
