const form = document.querySelector('.form'); 
const fname = document.querySelector('.fname').value.trim();
const lname = document.querySelector('.lname').value.trim();
const email = document.querySelector('.email').value.trim();
const number = document.querySelector('.pnumber').value.trim();

//const info = document.querySelector(".information");

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
