var ball = document.getElementById("ball");
var interval;
var both;
var bothtop;
var intervaltop;
 function moveLeft(){
    var left = parseInt( window.getComputedStyle(ball).getPropertyValue("left"));
    if(left>0){
    ball.style.left= left-2+"px";
    }

 }
function moveRight(){
    var left = parseInt( window.getComputedStyle(ball).getPropertyValue("left"));
    if(left<parseInt(screen.width*0.741)){
    ball.style.left= left+2+"px";
    }

}
document.addEventListener("keydown",action=>{
    if(both==0){
        both++;
    if(action.key==="ArrowLeft"){
        interval=setInterval(moveLeft,1);

    }
    if(action.key==="ArrowRight"){
        interval=setInterval(moveRight,1);
        
    }
}
});
document.addEventListener("keyup",action=>{
    clearInterval(interval);
    both=0;
});

function moveup(){
    var top = parseInt( window.getComputedStyle(ball).getPropertyValue("top"));
           if(top>0){
                 ball.style.top= top-2+"px";
     }

}
function movedown(){
var top= parseInt( window.getComputedStyle(ball).getPropertyValue("top"));
if(top<parseInt(screen.height*0.5565)){
ball.style.top= top+2+"px";
}

}
document.addEventListener("keydown",action=>{
if(bothtop==0){
bothtop++;
if(action.key==="ArrowUp"){
intervaltop=setInterval(moveup,1);

}
if(action.key==="ArrowDown"){
intervaltop=setInterval(movedown,1);

}
}
});
document.addEventListener("keyup",action=>{
clearInterval(intervaltop);
bothtop=0;
});