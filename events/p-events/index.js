let showMore = document.querySelector('.show-content');

let hideContent = document.querySelector('.show-less-btn')

let hiddenContent = document.querySelector('.container');

showMore.addEventListener('click',(e)=>{
    hiddenContent.classList.add('show');
    console.log(hiddenContent.classList);
    showMore.classList.add('hidden');
});

hideContent.addEventListener('click', function(e){
    showMore.classList.remove('hidden');
    hiddenContent.classList.remove('show')
});
