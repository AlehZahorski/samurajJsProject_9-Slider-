const slideList = [{
 img: "images/img1.jpg",
 text: 'Pierwszy tekst'
},
{
 img: "images/img2.jpg",
 text: 'Drugi tekst'
},
{
 img: "images/img3.jpg",
 text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

// Interfejs
const time = 3000;
let active = 0;
let number = slideList.length;

// Implementacje
const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active')); // find index with true
 dots[activeDot].classList.remove('active'); //remove active class from true(active)
 dots[active].classList.add('active'); //add class to span(after remove class from actoveDot)
}


const changeSlide = () => {
 active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot();
}
let timeId = setInterval(changeSlide, time);


//klawiszowe zmiany

window.addEventListener('keydown', function(e){
    if(e.keyCode == 37){
        clearInterval(timeId);
        if(active === 0){
            active = number;
        }
        active--;
    }else if(e.keyCode == 39){
        clearInterval(timeId);
        active++;
        if(active === slideList.length){
            active = 0;
        }
    }
    image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        timeId = setInterval(changeSlide, time);
})