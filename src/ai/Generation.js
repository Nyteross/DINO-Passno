  export default class Generation
  {
    static TAILLE_GENERATION = 10;
    generation = [];

    train(champions) {
      console.log('train()');
      console.log("Taille de generations : " + Generation.TAILLE_GENERATION);
      console.log(champions);
      this.generation = []; // vider

      for(let position = 0; position < Generation.TAILLE_GENERATION; position+=2)    // on gere 2 enfants par tour
      {
        let [enfantA,enfantB] = champions[0].crossover(champions[0], champions[1]);
        console.log("Apres crossover : ");
        console.log(enfantA);
        console.log(enfantB);
        enfantA = enfantA.mutation();
        enfantB = enfantB.mutation();
        this.generation[this.generation.length] = enfantA;
        this.generation[this.generation.length] = enfantB;
      }
      // this.generation.forEach((dino, i) => { dino.muter(); });

      console.log("Nouvelle generation");
      console.log(this.generation);
      return this.generation;
    }
  }
