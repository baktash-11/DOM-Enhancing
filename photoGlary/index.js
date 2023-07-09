
let myNode = document.querySelector('#art .pixGrid ul'); 
// console.dir(myNode);
// adding event listener to oru node
myNode.addEventListener('click', (e)=>{
    // check for tag name (img)
    if(e.target.tagName==='IMG' ){

        // console.log(e);

        // create a overlay
        let myOverlay = document.createElement('div'); 
        //assign a id to div  
        myOverlay.id = 'overlay'; 
        //add div to html body 
        document.body.appendChild(myOverlay);

        //add style to div with id overlay 
        myOverlay.style.position = 'absolute';
        myOverlay.style.top=0; 
        myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        myOverlay.style.cursor= 'pointer'
        // myOverlay.style.height="400px"

        //resize and position overlay
        myOverlay.style.width = window.innerWidth + 'px'; 
        myOverlay.style.height=window.innerHeight + 'px';
        myOverlay.style.top=window.pageYOffset + 'px';
        myOverlay.style.left=window.pageXOffset + 'px';

        //getting the name of the item 
        let imgSrc = e.target.src;

        //create a new element to save the large img
        //create image element
        let largeImg = document.createElement('img');
        largeImg.id= 'largeImg';
        console.log(largeImg);
        largeImg.src= imgSrc.substr(0,imgSrc.length-11 ) +'600x400.jpg';
        largeImg.style.display= "block";
        largeImg.style.position = 'absolute'; 

        //wait until image is loaded 
        largeImg.addEventListener('load', function(){
            //resize the image if its too big
            if(this.height > window.innerHeight){
                this.ratio = window.innerWidth / this.height; 
                this.height = this.height * this.ratio; 
                this.width = this.width * this.ratio; 
            }
            if(this.width > window.innerWidth){
                this.ratio = window.innerWidth / this.width; 
                this.height = this.height * this.ratio; 
                this.width = this.width * this.ratio; 
            }
            centerImage(this);
            // add the largeImg to myOverlay
            myOverlay.appendChild(largeImg);

        

        }); //image is loaded
        largeImg.addEventListener('contextmenu', ()=>{

            if(myOverlay){
                window.removeEventListener('resize', window, false); 
                window.removeEventListener('scroll', window, false); 
                myOverlay.parentNode.removeChild(myOverlay);
                // alert('you clicked the image!')
            }
        }, false);

        myOverlay.addEventListener('click', ()=>{
            if(myOverlay){
                window.removeEventListener('resize', window, false); 
                window.removeEventListener('scroll', window, false); 
                myOverlay.parentNode.removeChild(myOverlay);
            }
        }, false);

        //fix the scroll 
        window.addEventListener('scroll', ()=>{
            if(myOverlay){
                myOverlay.style.top= window.pageYOffset+ 'px'; 
                myOverlay.style.left=window.pageXOffset+ 'px'
            }
        }, false); 

        //resize the overlay 
        window.addEventListener('resize', ()=>{
            if(myOverlay){
                myOverlay.style.width= window.innerWidth + 'px'; 
                myOverlay.style.height= window.innerHeight + 'px'; 
                centerImage(largeImg)
            }
        }, false);



      
        


    }
    // console.log(e.target.tagName);
}, false);

function centerImage(img){
    let divX = (window.innerWidth - img.width)/2;
    let divY = (window.innerHeight - img.height)/2;


    img.style.top =divY +'px'; 
    img.style.left = divX + 'px';
    return img;
}


let myArray = ['hello', 'my', 'name', 'is', 'Baktash']; 
let originalString = "some beautiful pictures in the world"; 
let originalStr = "Hello, World!   ";

//replace(), subString(), trim(), join() and split() functions in JS
console.log(myArray.join('****')); //join use to join an array in single string
console.log (originalStr.trim()); //remove any space at the beginning and end of a string 
console.log(originalStr.substring(0, 5) + "-Tom");//remove a part of string 
console.log(originalString.split(' '));// convert an string to an array 
console.log( originalString.split('e'));


// aspect ratio 

function getAspectRatio(width, height) {
    let ratio = width / height;
    //  (( ratio - 4 / 3 ) <( ratio - 16 / 9 ) ) ? '4:3' : '16:9';
    return ratio
}


console.log(getAspectRatio(1000, 600));