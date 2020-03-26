// -------------------- splitter -----------------------
// work
document.getElementById("work").addEventListener("mouseover",workOver);
document.getElementById("work").addEventListener("mouseout",workOut);
function workOver(){
    document.querySelector("#blackOut-work").style.opacity = "0%";
}
function workOut(){
    document.querySelector("#blackOut-work").style.opacity = "90%";
}
// me
document.getElementById("me").addEventListener("mouseover",meOver);
document.getElementById("me").addEventListener("mouseout",meOut);

function meOver(){
    document.querySelector("#blackOut-me").style.opacity = "0%";
}
function meOut(){
    document.querySelector("#blackOut-me").style.opacity = "90%";
}