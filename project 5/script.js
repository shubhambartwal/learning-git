const increment=document.querySelector("#increment");
const decrement=document.querySelector("#decrement");
const counter=document.querySelector("#counter");
let x=0;
increment.addEventListener('click',incFun);
decrement.addEventListener('click',decFun);

function incFun(){
x++;
counter.innerHTML=x;
fun();
}
function decFun()
{x--;
counter.innerHTML=x;
fun();
}
function fun(){
    if (counter.innerHTML>'0')
{counter.style.color="#4caf51";
}
else if(counter.innerHTML==='0')
{counter.style.color="white";}
else if(counter.innerHTML<'0')
{
    counter.style.color='red';
}
counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
{duration:500,fill:'forwards'});
}


