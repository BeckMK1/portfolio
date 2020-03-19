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
    <div class="github">
        <p>GitHub:</p>
        <a href="${aContent.github}">${aContent.github}</a>
    </div>
    </div>

    <div class="slideshow-container">
        <div class="slide">
            <img src="${aContent.image3}" id="lastImg">
            <img src="${aContent.image1}">
            <img src="${aContent.image2}">
            <img src="${aContent.image3}">
            <img src="${aContent.image1}" id="firstImg">
        </div>
        <button id="prevBtn">prev</button>
        <button id="nextBtn">next</button>  
    </div>

</article>
`
}
document.querySelector(".sub").innerHTML = htmlTemplate;
}
// --------------------- image slideshow -------------