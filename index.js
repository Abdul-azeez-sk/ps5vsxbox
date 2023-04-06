const btn=document.querySelectorAll('.btn,.btn2');
console.log(btn);

for(let i=0;i<btn.length;i++){
btn[i].addEventListener("click",()=>{ 
    if(btn[i].parentElement.className==="left")
    window.open("https://www.playstation.com/en-in/","_blank");
    if(btn[i].parentElement.className==="right")
    window.open("https://www.xbox.com/","_blank");
});
}
const hovLeft=document.querySelector('.left');
const hovRight=document.querySelector('.right');
const hps=document.querySelector('#hps');
const hxb=document.querySelector('#hxb');
const text1=document.querySelector('.text1');
const text2=document.querySelector('.text2');
hovLeft.addEventListener("mouseover",()=> {
    hovLeft.style.flex=0.75;
    hovRight.style.flex=0.25;
    text1.style.color="rgba(255,255,255,1)";
    text2.style.color="rgba(255,255,255,0.5)";
    hovLeft.style.background="linear-gradient(to bottom, rgb(0,136,255,0.1) ,rgba(0,136,255,1)),url('images/left.png') left center fixed no-repeat";
    hovLeft.style.backgroundSize="75vw";
    hovRight.style.background="linear-gradient(to bottom, rgba(0,0,0,0.2) ,rgba(0,0,0,0.6)) ,url('images/right.png') fixed center right no-repeat";
    hovRight.style.backgroundSize="75vw";

});
hovRight.addEventListener("mouseover",()=>{
    hovLeft.style.flex=0.25;
    hovRight.style.flex=0.75;
    text2.style.color="rgba(255,255,255,1)";
    text1.style.color="rgba(255,255,255,0.5)";
    hovRight.style.background="linear-gradient(to bottom, rgba(0,0,0,0.1) ,rgba(0,0,0,1)) ,url('images/right.png') fixed center right no-repeat";
    hovRight.style.backgroundSize="75vw";
    hovLeft.style.background="linear-gradient(to bottom, rgba(0,136,255,0.2) ,rgba(0,136,255,0.6)) ,url('images/left.png') fixed left center no-repeat";
    hovLeft.style.backgroundSize="75vw";
});
