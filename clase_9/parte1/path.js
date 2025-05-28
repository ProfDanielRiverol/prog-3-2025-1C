const path = require("path");
// console.log(path);
// console.log(__dirname);
// console.log(__filename);
// console.log('Nombre del archivo: ', path.basename(__filename));
// console.log('Carpeta del archivo: ', path.basename(__dirname));
// console.log("Extension del archivo", path.extname(__filename));
// console.log("Extension del archivo", path.extname(__dirname)); //no hay extension

// console.log("./path.js");

// join

// console.log(path.join("pirulito", "index.html"));
// console.log(path.join("/pirulito","/locahost", "index.html"));
// console.log(path.join("///pirulito","//locahost", "index.html"));
console.log(path.join(__dirname, 'data.json'));
console.log(path.join(__dirname, 'fileSystem.js'));
console.log(path.join(__dirname, 'juan.jpg'));


console.log('C://_____juan.jpg');
console.log('/juan.jpg');
console.log('./juan.jpg');

