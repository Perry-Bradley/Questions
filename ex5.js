const element = document.getElementById('element'); 
const changeText = () => { 
element.innerText = 'Thanks!'; 
};

element.addEventListener('mouseover', changeText);