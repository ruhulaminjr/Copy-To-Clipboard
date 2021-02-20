// Select Element From Dom 
let copyBtn = document.querySelector('button');

let copyText = document.querySelector('#input');

// event listener 
copyBtn.addEventListener('click',textcopy);
// function 
function textcopy(){
    input.select();
    document.execCommand('copy');
    alert('Your Text Copied');
}