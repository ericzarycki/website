const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const cursor = document.querySelector('.cursor');
const cardWrapper = document.querySelector('.cardWrapper');
const card = document.querySelector('.card');
const highlight = document.querySelector('.highlight');

// ///////////////////////////////////////////////////// Nav-Bar ///////////////

// ///////////////////////////////////////////////////// Nav-Bar ///////////////

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',() =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#000000';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});

// menu_item.forEach((item) => {
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         mobile_menu.classList.toggle('active');
//     });
// });

// Cursor element
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', cursor.offsetTop - scrollY);
    // console.log(e.pageX, e.pageY)
});

window.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + parseInt(fromTop) + "px";
    console.log(scrollY);
  });
  
  window.addEventListener("click", () => {
    if (cursor.classList.contains("click")) {
      cursor.classList.remove("click");
      void cursor.offsetWidth; // trigger a DOM reflow
      cursor.classList.add("click");
    } else {
      cursor.classList.add("click");
    }
  });

// card
const mostX = 10;
const mostY = 10;

cardWrapper.addEventListener('mousemove', (e) => {
  card.style.transition = 'none';
  highlight.style.transition = 'none';

  const x = e.offsetX;
  const y = e.offsetY;
  const {width, height} = cardWrapper.getBoundingClientRect();
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  // calc angle
  const rotationY = ((x - halfWidth) / halfWidth) * mostX;
  const rotationX = ((y - halfHeight) / halfHeight) * mostY;
  
  //set rotation
  card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
  highlight.style.left = `${(rotationY / mostY * 30) * -1}%`;
  highlight.style.top = `${(rotationX / mostX * 30) * -1}%`;

});

cardWrapper.addEventListener('mouseleave', () => {
  // add transition
  card.style.transition = 'transform .5s ease-in-out';
  highlight.style.transition = 'left .5s ease-in-out, top .5s ease-in-out';
  // default
  card.style.transform = 'rotate(0)';
  highlight.style.left = '-20%';
  highlight.style.top = '-13%';
});

cardWrapper.onclick = function() {
  window.open('https://www.venmo.com/u/prodbyericcc', '_blank').focus();
};