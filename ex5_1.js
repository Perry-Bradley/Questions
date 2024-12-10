const element = document.querySelector('#element'); 
const changeText = () => { 
element.innerText = 'Thanks!'; 
};

element.addEventListener('mouseover', changeText);