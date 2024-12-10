
const button = document.getElementById('button'); 
const input = document.getElementById('input'); 
const handleClick = () => { 
    input.value = 'Hello World'; 
};
button.addEventListener('click', handleClick);