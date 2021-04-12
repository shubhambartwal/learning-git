{/* const colorBtn=document.querySelector('.colorBtn');//selecting the button having class colorBtn
const bodyBcg=document.querySelector('body');//Selecting the body
const colors=['yellow','red','green','#3b5998'];
colorBtn.addEventListener('click',changeColor);
function changeColor(){
    //bodyBcg.style.backgroundColor=colors[2];
    let random=Math.floor(Math.random()*colors.length)//Math.random gives value from 0 to 0.999
    bodyBcg.style.backgroundColor=colors[random]   ;
}
*/}
const hexNumbers=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorBtn=document.querySelector(".colorBtn");
const bodyBcg=document.querySelector("body");
const hex=document.querySelector(".hex");
colorBtn.addEventListener("click",changeColor);
function changeColor(){
    let hexCol= "#";
    for(let i=0;i<6;i++){
    let random=Math.floor(Math.random()*hexNumbers.length);
    hexCol+=hexNumbers[random];
    }
    bodyBcg.style.backgroundColor=hexCol;
    hex.innerHTML=hexCol;
}
