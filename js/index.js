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


      // SIDEBAR      
const li = document.querySelectorAll('.list');
const section = document.querySelectorAll("section"); 

function activeMenu (){
  let len= section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}

activeMenu();
window.addEventListener("scroll", activeMenu);


        // SKILLS
const skillsSection = document.getElementById('skills');
const progressBar = document.querySelectorAll('.skill-per');

function showProgress(){
  progressBar.forEach(progressBar=>{
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function circle(el){
  $(el).circleProgress({fill: {color: '#F28B8B'}})
  .on('circle-animation-progress', function(event, progress, stepValue){
    $(this).find('.value-container2').text(parseInt(stepValue * 100) + '%');
  });
};





// let progressBarCircle = document.querySelector(".idioma-progress-circle");
// let valueContainer = document.querySelector(".value-container");

// let progressValue = 0;
// let progressEndValue = 100;
// let speed = 20;

// let progress = setInterval(circulo, speed);


// function circulo(){
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBarCircle.style.background = `conic-gradient( #F28B8B ${progressValue * 3.6}deg, #FCE9E9 ${progressValue * 3.6}deg)`;
//   if(progressValue == progressEndValue){
//     clearInterval(progress);
//   }
// }



function onSkills() {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if(sectionPos < screenPos){
    showProgress();
    circle('.round');
    // circulo();
    window.removeEventListener('scroll', onSkills);
  }
};
window.addEventListener('scroll', onSkills);






// init Isotope
var $trabajoscontent = $('.trabajos-content').isotope({
  itemSelector: '.trabajitos',
  // layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $trabajoscontent.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.current').removeClass('current');
    $( this ).addClass('current');
  });
});


    // PROGRESS CIRCLE
// let progressBarCircle = document.querySelector(".idioma-progress-circle");
// let valueContainer = document.querySelector(".value-container");
// let progressBaringles = document.querySelector(".ingles");
// let valueContaineringles = document.querySelector(".value-ingles");

// let progressValue = 0;
// let progressValueIngles = 0;
// let progressEndValue = 100;
// let progressEndValueIngles = 35;
// let speed = 20;
// let speed2 = 60;


  // let progress = setInterval(() => {
  //   progressValue++;
  //   valueContainer.textContent = `${progressValue}%`;
  //   progressBarCircle.style.background = `conic-gradient( #F28B8B ${progressValue * 3.6}deg, #FCE9E9 ${progressValue * 3.6}deg)`;
  //   if(progressValue == progressEndValue){
  //     clearInterval(progress)
  //   }
  // }, speed);

// let progressIngles = setInterval(() => {
//   progressValueIngles++;
//   valueContaineringles.textContent = `${progressValueIngles}%`;
//   progressBaringles.style.background = `conic-gradient( #F28B8B ${progressValueIngles * 3.6}deg, #FCE9E9 ${progressValueIngles * 3.6}deg)`;
//   if(progressValueIngles == progressEndValueIngles){
//     clearInterval(progressIngles)
//   }
// }, speed2);