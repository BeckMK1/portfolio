"use strict";
//------------------------- arrow animataion ----------------
//------------------------- mouse over ----------------------
document.querySelector("#moreAni1").addEventListener("mouseover", setActiveAni)
document.querySelector("#moreAni2").addEventListener("mouseover", setActiveAni2)
document.querySelector("#moreAni3").addEventListener("mouseover", setActiveAni3)
document.querySelector("#moreAni4").addEventListener("mouseover", setActiveAni4)




function setActiveAni() {
    let arrow1 = document.querySelectorAll("#moreAni1 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.add("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni1 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.add("arrow2-ani");
    }
};

function setActiveAni2() {
    let arrow1 = document.querySelectorAll("#moreAni2 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.add("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni2 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.add("arrow2-ani");
    }
};

function setActiveAni3() {
    let arrow1 = document.querySelectorAll("#moreAni3 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.add("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni3 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.add("arrow2-ani");
    }
};

function setActiveAni4() {
    let arrow1 = document.querySelectorAll("#moreAni4 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.add("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni4 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.add("arrow2-ani");
    }
};

// ------------------------ mouse out ------------------------------
document.querySelector("#moreAni1").addEventListener("mouseout", removeActiveAni)
document.querySelector("#moreAni2").addEventListener("mouseout", removeActiveAni2)
document.querySelector("#moreAni3").addEventListener("mouseout", removeActiveAni3)
document.querySelector("#moreAni4").addEventListener("mouseout", removeActiveAni4)

function removeActiveAni() {
    let arrow1 = document.querySelectorAll("#moreAni1 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.remove("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni1 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.remove("arrow2-ani");
    }
};

function removeActiveAni2() {
    let arrow1 = document.querySelectorAll("#moreAni2 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.remove("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni2 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.remove("arrow2-ani");
    }
};

function removeActiveAni3() {
    let arrow1 = document.querySelectorAll("#moreAni3 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.remove("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni3 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.remove("arrow2-ani");
    }
};

function removeActiveAni4() {
    let arrow1 = document.querySelectorAll("#moreAni4 .arrow1");

    for (let arrow1s of arrow1) {
        arrow1s.classList.remove("arrow1-ani");
    }
    let arrow2 = document.querySelectorAll("#moreAni4 .arrow2");
    for (let arrow2s of arrow2) {
        arrow2s.classList.remove("arrow2-ani");
    }
};
// -------------------------------- zoom animation --------------------------
//----------------------------------- mouseover -----------------------------
document.querySelector("#gaming-match").addEventListener("mouseover", setZoom1)
document.querySelector("#paly-bet").addEventListener("mouseover", setZoom2)
document.querySelector("#assens-shipyard").addEventListener("mouseover", setZoom3)
document.querySelector("#web-doc").addEventListener("mouseover", setZoom4)

function setZoom1() {
    document.querySelector("#gaming-img").style.width = "72%";
}

function setZoom2() {
    document.querySelector("#bet-img").style.width = "72%";
}

function setZoom3() {
    document.querySelector("#shipyard-img").style.width = "72%";
}

function setZoom4() {
    document.querySelector("#doc-img").style.width = "72%";
}
//------------------------------------ mouseout -----------------------------
document.querySelector("#gaming-match").addEventListener("mouseout", removeZoom1)
document.querySelector("#paly-bet").addEventListener("mouseout", removeZoom2)
document.querySelector("#assens-shipyard").addEventListener("mouseout", removeZoom3)
document.querySelector("#web-doc").addEventListener("mouseout", removeZoom4)

function removeZoom1() {
    document.querySelector("#gaming-img").style.width = "70%";
}

function removeZoom2() {
    document.querySelector("#bet-img").style.width = "70%";
}

function removeZoom3() {
    document.querySelector("#shipyard-img").style.width = "70%";
}

function removeZoom4() {
    document.querySelector("#doc-img").style.width = "70%";
}
//------------------------- fornthover ----------------------------------
// mouse over
document.querySelector("#texthover").addEventListener("mouseover", setfront)

function setfront() {
    let line = document.querySelector(".line");
    line.classList.add("line-ani");
    let text = document.querySelector(".introText")
    text.classList.add("intro-ani")
}
// mouseout
document.querySelector("#texthover").addEventListener("mouseout", removefront);

function removefront() {
    let line = document.querySelector(".line");
    line.classList.remove("line-ani");
    let text = document.querySelector(".introText")
    text.classList.remove("intro-ani")
}