"use strict";
// Firebase api
const firebaseConfig = {
    apiKey: "AIzaSyDnt-baT-U1hylIlKeRNIK77BcI4dPGXs4",
    authDomain: "portfoilo-1239c.firebaseapp.com",
    databaseURL: "https://portfoilo-1239c.firebaseio.com",
    projectId: "portfoilo-1239c",
    storageBucket: "portfoilo-1239c.appspot.com",
    messagingSenderId: "276348293890",
    appId: "1:276348293890:web:9da02ee9ff8f4ee756681b",
    measurementId: "G-SVK9W38NZX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  let db = firebase.firestore();

// Whatching database and adding it to a local array 
const contentRef = db.collection("content");

contentRef.onSnapshot(snapshotData => {
let content =[];
snapshotData.forEach(doc =>{
let aContent = doc.data();
aContent.id = doc.id;
content.push(aContent);
});
appendContent(content);
});

// Append the content to html
function appendContent(content) {
let htmlTemplate ="";
for (let aContent of content){
htmlTemplate +=
`
<article class="content">
    <div class="text">
        <h2>${aContent.title}</h2>
        <p class="mainText">${aContent.text}</p>
        <p class ="tech">${aContent.tech}</p>
        <div id="moreAni">
        <a class="more" href="#more">read more</a>
        <p class="arrow1">></p>
        <p class="arrow2">></p>
        </div>
    <div class="github">
        <p>GitHub:</p>
        <a href="${aContent.github}">${aContent.github}</a>
    </div>
    </div>

    <div class="slideshow-container">
        <div class="slide">
            <img src="${aContent.image1}">
        </div>  
    </div>

</article>
`
}
document.querySelector("#work-container").innerHTML = htmlTemplate;
}
// --------------------- image slideshow -------------
// note: not working yet

// const slide = document.querySelector('.slide')
// const images = document.querySelector('.slide img')

// buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// counter
// let counter = 1;
// const size = images[0].clientWidth;

// slide.style.transform = 'translateX('+ (-size * counter) +'px)'

