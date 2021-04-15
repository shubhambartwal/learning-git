const btnPrev=document.querySelector(".prevBtn");
const btnNext=document.querySelector(".nextBtn");
const container=document.querySelector(".images");
let counter=0;
btnPrev.addEventListener('click',previmg);
btnNext.addEventListener('click',nextimg);
function nextimg(){
    counter++;
    fun();
    container.style.background=`#3e2${counter}23`;
}
function previmg(){
    counter--;
    fun();
    container.style.background=`#3e3${counter}23`;
}
function fun(){
    if(counter==-1)
    {counter=9;}
    else if (counter==10){
counter=1;
    }
}