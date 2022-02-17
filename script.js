'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodel = document.querySelector('.closemodal');
const btnsopenmodel = document.querySelectorAll('.showmodal');

const openmodal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsopenmodel.length; i++)

    btnsopenmodel[i].addEventListener('click', openmodal);

const closemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnclosemodel.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closemodal();
    }
})