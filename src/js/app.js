class App {
  constructor() {
    console.log('app.js');


let path = document.querySelector('path');
let newPath = path.getTotalLength();
let totalLength = Math.floor(newPath)
console.log(totalLength);



  }
}

window.addEventListener('load', () => {
  new App();

});
