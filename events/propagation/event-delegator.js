// let football = document.querySelector('.football');
// let basketball = document.querySelector('.basketball');
// let boxing = document.querySelector('.boxing');
// let golf = document.querySelector('.golf');
// let none = document.querySelector('.none');


// football.addEventListener('click', (e)=>{
//     football.style.background = '#848586';
//     e.stopPropagation();
// },false);
// basketball.addEventListener('click', (e)=>{
//     basketball.style.background = '#636A7E';
//     e.stopPropagation();
// },false);


let delegator = document.querySelector('.delegator');
delegator.addEventListener('click', (e)=>{
    console.log(e.target.classList)
    if(e.target.matches('button')){
        e.target.style.background="#848586"
        e.stopPropagation();
    }
});
// delegator.style.background= 'green';
let newBtn = document.createElement('button'); 
newBtn.classList.add('badminton'); 
newBtn.innerText= 'Badminton'; 
delegator.appendChild(newBtn);

newBtn=document.createElement('button')
newBtn.classList.add('tines'); 
newBtn.innerText= 'Tines'; 
delegator.appendChild(newBtn);

newBtn=document.createElement('button')
newBtn.classList.add('volleyball'); 
newBtn.innerText= 'Volleyball'; 
delegator.appendChild(newBtn);