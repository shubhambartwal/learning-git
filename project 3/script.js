const quotes=[
   { quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name:"Nelson Mandela"
   },
{
    quote:"The way to get started is to quit talking and begin doing.",
     name:"Walt Disney"
},
{
    quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
     name:"Steve Jobs"
},
{
   quote: "If life were predictable it would cease to be life, and be without flavor." ,
    name:"Eleanor Roosevelt"
}] ;
const quoteBtn=document.querySelector("#quoteBtn");
const quoteAuthor=document.querySelector('#quoteAuthor');
const quote=document.querySelector("#quote");
quoteBtn.addEventListener('click',displayQuote);
function displayQuote(){
    let x="-";
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[random].quote;
    x +=quotes[random].name;
    quoteAuthor.innerHTML=x;

}