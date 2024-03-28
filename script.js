document.getElementById('logo').addEventListener('click', function(e) {
   e.preventDefault();
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 });





const slider = document.getElementById('slider');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

leftArrow.addEventListener('click', function() {
  slider.scrollLeft -= 100; // Adjust the value as needed
});

rightArrow.addEventListener('click', function() {
  slider.scrollLeft += 100; // Adjust the value as needed
});

// Toggle black color on arrow click
const arrows = document.querySelectorAll('.arrow');
arrows.forEach(arrow => {
  arrow.addEventListener('click', function() {
    arrows.forEach(a => a.classList.remove('black'));
    this.classList.add('black');
  });
});




function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("expanded");
  }
  
