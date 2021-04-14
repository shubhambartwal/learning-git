const increment=document.querySelector("#increment");
const decrement=document.querySelector("#decrement");
const message=document.querySelector("#message");
increment.addEventListener('click',incFun);
decrement.addEventListener('click',decFun);
var x = 0;
function incFun(){
x+=1;
message.innerHTML=x;
console.log(x);
}
function decFun()
{x--;
    console.log(x);
message.innerHTML=x;
}


