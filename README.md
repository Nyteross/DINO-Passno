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
