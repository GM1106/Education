'use strict';

// при нажатии на картинку - она должна исчезать

let img1 = document.querySelector('.img1');
img1.setAttribute('onclick', 'closeModal1()');
function closeModal1() {
    img1.style.display = 'none';
};


let img2 = document.querySelector('.img2');
img2.setAttribute('onclick', 'closeModal2()');
function closeModal2() {
    img2.style.display = 'none';
};



let img3 = document.querySelector('.img3');
img3.setAttribute('onclick', 'closeModal3()');
function closeModal3() {
    img3.style.display = 'none';
};



// При нажатии на любую из кнопок должна добавляться картинка


let imgPeru = document.getElementById('peru');
imgPeru.addEventListener('click', function newimg() {
    let newimg = document.createElement('img');
    newimg.setAttribute('src', './img/Peru.jpg');
    document.body.appendChild(newimg);
});



let imgKorea = document.getElementById('korea');
imgKorea.addEventListener('click', function newimg() {
    let newimg = document.createElement('img');
    newimg.setAttribute('src', './img/Korea.jpg');
    document.body.appendChild(newimg);
});



let imgTanzania = document.getElementById('tanzania');
imgTanzania.addEventListener('click', function newimg() {
    let newimg = document.createElement('img');
    newimg.setAttribute('src', './img/Tanzania.jpg');
    document.body.appendChild(newimg);
});


// фон для параграф при клике


let text = document.getElementById('text');
text.addEventListener('mouseover', function () {
    text.style.background = 'red';
});



let textnew = document.getElementById('textInfo');
textnew.addEventListener('mouseover', function () {
    textnew.style.background = 'red';
});



let textinfo = document.getElementById('info');
textinfo.addEventListener('mouseover', function () {
    textinfo.style.background = 'red';
});



