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
//1.
$(() => {
  $('.OrangeHead').each(function() {
    var text_words = $(this).text().split(' ');
      $(this).empty().html(function() {
        for (i = 0; i < text_words.length; i++) {
          if (i === 0) {
            $(this).append('<span>' + text_words[i] + '</span>');
          } else {
            $(this).append(' <span>' + text_words[i] + '</span>');
          }
        }
      });
 

      // $(window).on('scroll' ,() => {
      //   if($(this).scrollTop() > 100){
      //     $('#scroll').css('opacity' , "1")
      //   }else{
      //     $('#scroll').css('opacity' , "0")
      //   }
      // })
      // $('#scroll').on('click', function() {
      //   $('html, body').animate({
      //     scrollTop: 0
      //   }, 500);
      //   return false;
      // })

  })
  
});
