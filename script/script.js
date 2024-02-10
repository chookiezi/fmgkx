'use strict'

const btnYesMain = document.getElementById('btnYesMain');
const btnNoMain = document.getElementById('btnNoMain');
const btnYesModal = document.getElementById('btnYesModal');
const btnNoModal = document.getElementById('btnNoModal');
const modal = document.getElementById('modal');
const iiii = document.querySelector('.iiii')
const mBlock = document.querySelector('.main__block')
const ovrl = document.querySelector('.overlay')

const hdText = document.querySelector('.header__text')
const iMain = document.querySelector('.images__main')
const iAlter = document.querySelector('.additional-images')
const main__block1 = document.querySelector('.main__block2')



const modal2 = document.getElementById('modal2');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordBtn = document.getElementById('confirmPassword');
const closeModalBtn = document.querySelector('.modal2 .close');

// btnYesMain.addEventListener('click', function() {
//     
// });
btnNoMain.addEventListener('click', function() {
    modal.style.display = 'block'; 
});
function confirmYes() {
    console.log('Sure? Yes confirmed');
    btnNoMain.style.display = 'block';
    iiii.innerText = 'TI SERIEZNO ne KHOCHEESH??'
    btnYesModal.style.display="none";
    btnNoModal.innerText = 'khochu <3 ';
    
}
function confirmNo() {
    console.log('Sure? No confirmed');
    modal.style.display = 'none'; 
    btnNoMain.style.display = 'none';
    hdText.innerHTML = 'Thank you for choosing to be your valentine`s.';
    btnYesMain.style.display = 'none';
    mBlock.style.display = 'flex';
    iMain.style.display = 'flex';
    iAlter.style.display= 'grid'
    main__block1.style.display = 'flex';
    


}

btnYesMain.addEventListener('click', function() {
    modal2.style.display = 'block';
});

confirmPasswordBtn.addEventListener('click', function() {
    const password = passwordInput.value;
    if (password === 'kxmilka') {
       
        modal2.style.display = 'none';
        btnNoMain.style.display = 'none';
        hdText.innerHTML = 'Thank you for choosing to be your valentine`s.';
        btnYesMain.style.display = 'none';
        mBlock.style.display = 'flex';
        iMain.style.display = 'flex';
        iAlter.style.display= 'grid'
        main__block1.style.display = 'flex';
    } else {
       
        alert('Incorrect password');
    }
});

closeModalBtn.addEventListener('click', function() {
    modal2.style.display = 'none';
});