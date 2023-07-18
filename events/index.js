console.log('hope it works here')

let showMore = document.querySelector('.show-more-btn');
let box1 = document.querySelectorAll('.box')[0];
let hidInfo = document.querySelector('.hide-detail-btn');


showMore.addEventListener('click', (e)=>{
    
    if(box1.classList.contains('show')){
        box1.classList.remove('show');
        
    }else{

        box1.classList.add("show");
    }
    showMore.classList.add('hidden-content')

});


hidInfo.addEventListener('click', function(e){
    box1.classList.remove('show')
    showMore.classList.remove('hidden-content');
    
});