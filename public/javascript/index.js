// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml12');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
// .add({
//     targets: '.ml12 .letter',
//     translateX: [-40,0],
//     translateZ: 20,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: (el, i) => 500 + 30 * i
// });

anime({
    targets: '.ml12',
    translateX: [-40,0],
    translateZ: 20,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 500 + 30 * i
});








// Slides 

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", e => {
    minusSlide();
 });
 
 next.addEventListener("click", e => {
     plusSlide();
 });


 function plusSlide() {
     moveSlide(1);
 }

 function minusSlide() {
    moveSlide(-1);
}



function moveSlide (count) {

    const slides = document.querySelectorAll(".slides");

    let slideIndex = 0;
    let x = 3;

    if(count === 1) {
        slideIndex = slideIndex + 1;
        if(slides.length - x > 3) {
            x = 3
        } else {
            x = x + 1;
        }
    }

    if(count === -1) {
        slideIndex = slideIndex - 1;
    }


    for(let i = slideIndex; i <= slides.length; i++) {
        console.log(slides[i]);

        if(i >= x) {
            slides[i].style.display = "none";
        }
        
    }
}

moveSlide(0);



