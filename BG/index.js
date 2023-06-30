'use strict';

(function () {

    function Start() {
        log('Function started')
      
    }
    function log(msg) {
        console.log(msg)
    }

    window.addEventListener('load', Start)
})();


let circle = document.getElementById('colorCircle');
let header = document.querySelector('.header');
header.style = "color:green"

function color(r) {

    circle.style = `background-color:${r}`;
  
}

let subheading = document.querySelector('.subheading')
subheading.addEventListener('mouseover', function (ev) {
    subheading.style = "color:#B18FCF";
    circle.style = `background-color:#A4F9C8`;
    header.style = "color:green"

});

subheading.addEventListener('mouseout', (ev) => {
    header.style = `background-color:#A7FFF6`;
    console.log(ev.target)
})



