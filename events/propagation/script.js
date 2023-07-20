console.log('welcome to propagation')

// propagation refers to how an event travels through the document object model DOM
// 1.event capturing 
// 2.Target
// 2.Event Babbling

window.addEventListener('click', function(){
    console.log('window')
})
document.addEventListener('click', function(){
    console.log('Document')
})

document.querySelector('.div2').addEventListener('click', (e)=>{
    console.log('div2')
    // e.stopPropagation();
});

document.querySelector('.div1').addEventListener('click', (e)=>{
    console.log('dive1')
},true);
document.querySelector('#button').addEventListener('click', function(e){
    console.log(e.target);
    e.preventDefault();
},true);
