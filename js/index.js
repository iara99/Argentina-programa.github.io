      // SCROLL TOP
let mybutton = document.getElementById("TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


    // PROGRESS CIRCLE
let progressBar = document.querySelector(".idioma-progress-circle");
let valueContainer = document.querySelector(".value-container");
let progressBaringles = document.querySelector(".ingles");
let valueContaineringles = document.querySelector(".value-ingles");

let progressValue = 0;
let progressValueIngles = 0;
let progressEndValue = 100;
let progressEndValueIngles = 35;
let speed = 20;
let speed2 = 60;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient( #F28B8B ${progressValue * 3.6}deg, #FCE9E9 ${progressValue * 3.6}deg)`;
  if(progressValue == progressEndValue){
    clearInterval(progress)
  }
}, speed);

let progressIngles = setInterval(() => {
  progressValueIngles++;
  valueContaineringles.textContent = `${progressValueIngles}%`;
  progressBaringles.style.background = `conic-gradient( #F28B8B ${progressValueIngles * 3.6}deg, #FCE9E9 ${progressValueIngles * 3.6}deg)`;
  if(progressValueIngles == progressEndValueIngles){
    clearInterval(progressIngles)
  }
}, speed2);





const block = document.querySelectorAll('.block');
window.addEventListener('load', function(){
  block.forEach(item => {
    let numElement = item.querySelector('.num');
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector('.circle');
    setInterval(() => {
      if(count == num){
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time)
    circle.style.strokeDashoffset 
      = 503 - ( 503 * ( num / 100 ));
    let dots = item.querySelector('.dots');
    dots.style.transform = 
      `rotate(${360 * (num / 100)}deg)`;
    if(num == 100){
      dots.style.opacity = 0;
    }
  })
});







//Fact Counter + Text Count
if($('.count-box').length){
  $('.count-box').appear(function(){

    var $t = $(this),
      n = $t.find(".count-text").attr("data-stop"),
      r = parseInt($t.find(".count-text").attr("data-speed"), 10);
      
    if (!$t.hasClass("counted")) {
      $t.addClass("counted");
      $({
        countNum: $t.find(".count-text").text()
      }).animate({
        countNum: n
      }, {
        duration: r,
        easing: "linear",
        step: function() {
          $t.find(".count-text").text(Math.floor(this.countNum));
        },
        complete: function() {
          $t.find(".count-text").text(this.countNum);
        }
      });
    }
    
  },{accY: 0});
}