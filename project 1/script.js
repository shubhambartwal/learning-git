const colorBtn=document.querySelector('.colorBtn');//selecting the button having class colorBtn
const bodyBcg=document.querySelector('body');//Selecting the body
const colors=['yellow','red','green','#3b5998'];
colorBtn.addEventListener('click',changeColor);
function changeColor(){
    //bodyBcg.style.backgroundColor=colors[2];
    let random=Math.floor(Math.random()*colors.length)//Math.random gives value from 0 to 0.999
    bodyBcg.style.backgroundColor=colors[random]   ;
}