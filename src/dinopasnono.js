import 'babel-polyfill';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './game/constants';
import { Runner } from './game';

import Generation from './ai/Generation';
// import DinoIntelligent from './ai/DinoIntelligent';
//import DinoIntelligent from './ai/DinoEnFormation'; // Evite d'avoir a renommer toutes les references
//import DinoIntelligent from './ai/DinoEnFormationA';
//import DinoIntelligent from './ai/DinoEnFormationB';
//import DinoIntelligent from './ai/DinoEnFormationC';
//import DinoIntelligent from './ai/DinoEnFormationD';
import DinoIntelligent from './ai/DinoEnFormationE';

let firstTime = true;
let runner = null;
let dinosGraphiquesClasses = [];
const GENERATION_SIZE = Generation.TAILLE_GENERATION;

function setup() {
  console.log("GENERATION_SIZE " + GENERATION_SIZE );
  // Initialize the game Runner.
  runner = new Runner('.game', {
    DINO_COUNT:GENERATION_SIZE,
    onReset: handleReset,
    onCrash: handleCrash,
    onRunning: handleRunning
  });
  // Set runner as a global variable if you need runtime debugging.
  window.runner = runner;
  // console.info(runner)
  // Initialize everything in the game and start the game.
  runner.init();
}

function handleReset(dinoGraphiques) {
  console.log("firstTime : " + firstTime);
  console.log(dinoGraphiques.length);
  if (firstTime) {
    dinoGraphiques.forEach((dino) => {
      console.log("Create a new Dino model");
      dino.model = new DinoIntelligent();
      dino.model.init();
    });
    firstTime = false;
  }
  else {
    // Train the model before restarting.
    console.info('Training');

    console.log("RankList size = " + dinosGraphiquesClasses.length);
    const champions = dinosGraphiquesClasses.map((dino) => dino.model); // on recupere les chromosomes des dinosaures selectionnes seulement
    dinosGraphiquesClasses.splice(0); // Clear dinosGraphiquesClasses

    let nouveaux = DinoIntelligent.generation.train(champions); // appel statique a la classe pour entrainer tous les chromosomes
    console.log("Nouvelle generation");
    console.log(nouveaux);
    for(let position = 0; position < nouveaux.length; position++)
    {
      console.log("Position " + position);
      dinoGraphiques[position].model = nouveaux[position];
      console.log(dinoGraphiques[position]);
    }
    console.log('dinoGraphiques');
    console.log(dinoGraphiques);
    // Les dinos sont les Trex d'un TrexGroup, auquels sont greffes les modeles de dinos intelligents
  }
}

function handleRunning(dino, state) {
  let action = 0;
  if (!dino.jumping) {
    action = dino.model.predictMovement(convertStateToVector(state));
  }
  return action;
}

function handleCrash(dinoGraphique) {
  console.log("onCrash()");
  if (!dinosGraphiquesClasses.includes(dinoGraphique)) {
    // ajoute au debut - donc les derniers crashes se retrouvent au debut - on va choisir les 2 premiers
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    dinosGraphiquesClasses.unshift(dinoGraphique);
  }
}

function convertStateToVector(state) {
  if (state) {
    return [
      state.obstacleX / CANVAS_WIDTH,
      state.obstacleWidth / CANVAS_WIDTH,
      state.speed / 100
    ];
  }
  return [0, 0, 0];
}

document.addEventListener('DOMContentLoaded', setup);
