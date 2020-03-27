"use strict";
// -------------------- splitter -----------------------
// work
document.getElementById("work").addEventListener("mouseover", workOver);
document.getElementById("work").addEventListener("mouseout", workOut);

function workOver() {
    document.querySelector("#blackOut-work").style.opacity = "0%";
}

function workOut() {
    document.querySelector("#blackOut-work").style.opacity = "90%";
}
// me
document.getElementById("me").addEventListener("mouseover", meOver);
document.getElementById("me").addEventListener("mouseout", meOut);

function meOver() {
    document.querySelector("#blackOut-me").style.opacity = "0%";
}

function meOut() {
    document.querySelector("#blackOut-me").style.opacity = "90%";
}
//---------------------- spa --------------------------
// hide all
function hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.style.display = "none";
    }
}
// show pages
function showPage(pageId) {
    hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
}


// navigate to
function navigateTo(pageId) {
    location.href = `#${pageId}`;
}

function pageChange() {
    let page = "home";
    if (location.hash) {
        page = location.hash.slice(1);
    }
    showPage(page)
}
pageChange();
// ----------------------- nav -----------------------------
function navWork(){
navigateTo("work-content");
}
function navMe(){
navigateTo("about")
}
// ----------------------- back ----------------------------
function navback(){
navigateTo("home");
}
//------------------------- arrow animataion ----------------
window.onload=function(){
document.getElementById("moreAni").addEventListener("mouseover", setActiveAni)

function setActiveAni() {
    let arrow1 = document.querySelector(".arrow1");
    arrow1.classList.add("arrow1-ani");
    let arrow2 =document.querySelector(".arrow2");
    arrow2.classList.add("arrow2-ani");
    }
} 