let slides = document.querySelectorAll('.fade-slide');
let currentIndex = 0;

function showSlide() {
    // slides[currentIndex].stylse.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
}

// slides[currentIndsex].style.opacity = 1;

setInterval(showSlide, 2000);


/***********PRODUCT HOVER ICON CHANGE ***************/


/**************TOGGLE BTN ***********/
// const toggle = document.getElementById('toggle');
// const navbar = document.getElementById('sub-navbar');

// toggle.addEventListener('change', () => {
//     if (toggle.checked) {
//         navbar.style.display = 'block';
//     }
//     else {
//         navbar.style.display = 'none'; 
//     }
// });

/************PRODUCT BTN *************/
var btn = document.getElementById("prod-btn");
console.log(btn);

function onHover() {
    // alert('sadfd')
    console.log = ("btn");
    btn.innerHTML = ` <span>PRODUCTS <i 
    class="fa-solid fa-caret-right"></i></span>`;
}

function onHoverOut() {
    // alert('sadfd')
    btn.innerHTML = ` <span>PRODUCTS <i
                class="fa-solid fa-caret-down"></i></span>`;
}
