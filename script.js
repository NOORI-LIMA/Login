const container = document.getElementById('container');
const registerbtn = document.getElementById('register');
const loginbtn = document.getElementById('login');

registerbtn.addEventListener('click', () =>{
    alert("Hi");
    container.classList.add("active");
});

loginbtn.addEventListener('click', () =>{
    alert("Hi");

    container.classList.remove("active");
});





