# DINO-Passno

## Instruction d'installation

1. Installer **Node.js**:
``` bash
sudo apt install nodejs
```
2. Installer **npm**:
``` bash
sudo apt install npm
```
3. Installer **nvm**:
 ``` bash
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
 nvm install 20
 nvm use 20
 ```
4. Extraire l'archive dino-pasnono.zip
   
5. Ce placer dans le répertoire où l'archive à été extraite
   
6. Installer les packages nécessaire au projet
``` bash
npm install
```

7. Build et Run le projet
``` bash
export NODE_OPTIONS=--openssl-legacy-provider
npm run build
npm start
```

8. [Tester](http://localhost:8080)

## Réponse aux questions

- **A) Quelles classes représentent le dinosaure en tant que tel ?**
   - a) Son personnage dans le jeu ?
 
      La classe qui représente le personnage du dinosaure dans le jeu est la classe *Trex*<br>
      ``` src/game/Trex.js ``` ligne 19
      ``` javascript
      export default class Trex {
      ```
  
   - b) Son intelligence
     Les deux classes qui peuvent représenter l'intelligence du dinosaure dans le jeu sont 
     - *DinoIntelligent* (Classe utilisée en tant que modèle)
        - ``` src/ai/DinoIntelligent.js ``` ligne 4
          ``` javascript
          export default class DinoIntelligent extends Dino {
          ```
     - *DinoEnFormation* (Classe non utilisée en tant que modèle)
        -  ``` src/ai/DinoEnFormation.js ``` ligne 4
          ``` javascript
          export default class DinoEnFormation extends Dino {
          ```
- **B) À quel endroit peut-on manipuler la taille des générations ?**
  - Il est possible de manipuler la taille des générations en modifiant la variable statique *TAILLE_GENERATION*<br>
    La variable est déclaré dans le fichier ``` src/ai/Generation.js ``` ligne 3
    ``` javascript
     static TAILLE_GENERATION = 10;
     ```
  - La variable est utilisé dans le fichier ``` src/dinopasnono.js ``` ligne 15
    ``` javascript
    const GENERATION_SIZE = Generation.TAILLE_GENERATION;
    ```
- **C) À quel endroit puis-je changer le modèle génétique utilisé ?**
  - Il est possible de changer le modèle génétique utilisé en modifiant la classe utilisé dans la propriété model du dino (Par *DinoEnFormation* par exemple)<br>
    Cette propriété est défini dans le fichier ``` src/dinopasnono.js ``` ligne 39
    ``` javascript
    dino.model = new DinoIntelligent();
    ```
- **D) Parlez-moi du génome...**
   - Quelle variable le contient ?
      - Le chromosome est représenté par un tableau de nombres (poids et biais)<br>
        contenu dans le fichier ``` src/ai/Dino.js ``` ligne 23-31
        ``` javascript
        getChromosome() {
        setChromosome(chromosome) {
            this.weights[0] = chromosome[0];
            this.weights[1] = chromosome[1];
            this.weights[2] = chromosome[2];
            this.biases[0] = chromosome[3];
        }
        ```
   - Que représente-t-il dans le jeu ?
     - Le génome représente le comportement et les décisions du dinosaure, si il va sauter ou se baisser par exemple, sont intelligence artificielle est défini par deux paramètres :
       - Le poids
       - Le biais
