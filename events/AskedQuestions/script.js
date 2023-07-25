console.log('Welcome to frequently asked questions');

// variables 
// const content = document.querySelectorAll('.content-container');
const contents = document.getElementsByClassName('content-container'); 




for(let i =0; i< contents.length; i++){
    contents[i].addEventListener('click', function(){
         this.classList.toggle('active');
        
    });
}

