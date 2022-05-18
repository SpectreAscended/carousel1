"use strict";

const btnBack = document.querySelector('.icon-back');
const btnForward = document.querySelector('.icon-forward');
const images = document.querySelector('.carousel');
const indicators = document.querySelector('.indicators');
const imageBox = document.querySelector('.carousel-box');


let slider = 0;
let curSlide = 1;

imageBox.addEventListener('click', function(e) {
    let slide = +e.target.dataset.slide;
    if(!slide) return;
    slider = (-700 * slide) + 700;
    images.style.transform = `translateX(${slider}px)`;
    curSlide = slide;
    createDots(curSlide);
});

btnForward.addEventListener('click', function(e) {
    slider -= 700;
    curSlide += 1;
    if(curSlide > 5) curSlide = 1
    if(slider <= -3500) slider += 3500;
    images.style.transform = `translateX(${slider}px)`;
    createDots(curSlide);
});

btnBack.addEventListener('click', function(e) {
    slider += 700;
    curSlide -= 1;
    if(curSlide < 1) curSlide = 5;
    if(slider > 0) slider -=3500;
    images.style.transform = `translateX(${slider}px)`;
    createDots(curSlide);
});

const createDots = function(curSlide = 1) {
    indicators.innerHTML = '';
    indicators.insertAdjacentHTML('beforeend',
        `<div class="circle ${curSlide === 1 ? 'active' : ''}" data-slide="1"></div>
        <div class="circle ${curSlide === 2 ? 'active' : ''}" data-slide="2"></div>
        <div class="circle ${curSlide === 3 ? 'active' : ''}" data-slide="3"></div>
        <div class="circle ${curSlide === 4 ? 'active' : ''}" data-slide="4"></div>
        <div class="circle ${curSlide === 5 ? 'active' : ''}" data-slide="5"></div>`
    );
};

createDots();
