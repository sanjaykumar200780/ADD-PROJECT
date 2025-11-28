// Artwork Collection
const paintings = [
    {img:"https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740&q=80", caption:"Painting 1: Sunset Dreams"},
    {img:"https://www.shutterstock.com/image-photo/bivalve-mollusc-smooth-clam-callista-600nw-1830682196.jpg", caption:"Painting 2: Ocean Calm"},
    {img:"https://t3.ftcdn.net/jpg/03/14/07/70/360_F_314077083_zvTlWtrlWH3WoJ9gy44oavcEyO8IKu7A.jpg", caption:"Painting 3: Color Burst"},
    {img:"https://thumbs.dreamstime.com/b/silent-forest-spring-beautiful-bright-sun-rays-wanderlust-91810375.jpg", caption:"Painting 4: Silent Forest"}
];

let index = 0;

// Update Display
function showPainting(){
    document.querySelector("#paintingDisplay img").src = paintings[index].img;
    document.querySelector("#paintingDisplay figcaption").innerText = paintings[index].caption;
}

// Next & Previous Controls
function nextPainting(){
    index = (index + 1) % paintings.length;
    showPainting();
}

function prevPainting(){
    index = (index - 1 + paintings.length) % paintings.length;
    showPainting();
}
