
let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let green = document.querySelector('#green');

red.addEventListener('click',(e)=>{
    let block = document.querySelector('.block');
    block.style.backgroundColor = 'red';
    block.style.width = '300px'
});

blue.addEventListener('click',(e)=>{
    let block = document.querySelector('.block');
    block.style.backgroundColor = 'blue';
    block.style.width = '500px'
});

green.addEventListener('click',(e)=>{
    let block = document.querySelector('.block');
    block.style.backgroundColor = 'green';
    block.style.width = '700px'
});

// chnage background color
let darkMode = document.querySelector('#dark');
darkMode.addEventListener('click', (event) =>{
    document.body.style.background = '#00468b';
    document.getElementById('heading').style.color="white";
    document.getElementById('main-text').style.color="white";
    setTimeout(() => document.body.style.background = 'white', 3000)
    setTimeout(() => document.getElementById('heading').style.color="black", 3000)
    setTimeout(() => document.getElementById('main-text').style.color="black", 3000)
    
})
