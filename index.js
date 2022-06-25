const navLinks = document.querySelector('.nav-item');
const body = document.querySelectorAll('.body')
$(() => {
    $('.navigation').click(() =>{
        navLinks.classList.toggle('active')
    })
   
})
body.forEach((item) => {
  item.addEventListener('click' , () => {
    navLinks.classList.remove('active')
  })
})