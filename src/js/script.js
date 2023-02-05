const headerBtn = document.getElementById("headerBtn");
const footerBtn = document.getElementById("footerBtn");

headerBtn.addEventListener("click", function() {
  window.location.href = "tel:+12675078523";
});

footerBtn.addEventListener("click", function() {
  window.location.href = "tel:+12675078523";
});

// $(document).ready(function() {
//   $('#questions-form').submit(function(e) {
//       e.preventDefault();
//       $.ajax({
//           type: "POST",
//           url: "email.php",
//           data: $('#questions-form').serialize(),
//           success: function() {
//               alert('Email sent successfully');
//           },
//           error: function() {
//               alert('Error sending email');
//           }
//       });
//   });
// });


function validateForms(form){
  $('form').validate({
      rules: {
          name: {
                  required: true,
                  minlength: 2
          },
          phone: "required",
          email: {
              required: true,
              email: true
          }
      },
      messages: {
          name: {
              required: "Please enter your name",
              minlength: jQuery.validator.format("Enter {0} characters!")
            },
          phone: "Please enter your phone number",
          email: {
            required: "Please enter your email",
            email: "Incorrect email address entered"
          }
      }
  });
};

validateForms('#questions-form');
validateForms('#consultation form');
validateForms('#order form');

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
  e.preventDefault();

  if (!$(this).valid()) {
      return;
  }

  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  }); 
  return false;
});

//         $('.questions').submit(function(e) {
//         e.preventDefault();

//         if (!$(this).valid()) {
//           return;
//         }
//         $.ajax({
//           type: "POST",
//           url: "mailer/smart.php",
//           data: $(this).serialize()
//       }).done(function() {
//           $(this).find("input").val("");


//           $('form').trigger('reset');   
//       });
//       return false;
// });
  

    //     function toggleSlide(item) {
    //         $(item).each(function(i) {
    //             $(this).on('click', function(e){
    //                 e.preventDefault();
    //                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //             })
    //         });
    //     };

    //     toggleSlide('.catalog-item__link');
    //     toggleSlide('.catalog-item__back');

    //     //modal

    //     $('[data-modal=consultation]').on('click', function() {
    //         $('.overlay, #consultation').fadeIn('slow');
    //     });
    //     $('.modal__close').on('click', function() {
    //         $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    //     });
       
    //     $('.button_mini').each(function(i) {
    //         $(this).on('click', function() {
    //             $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    //             $('.overlay, #order').fadeIn('slow');
    //         })
    //     });

    //     function validateForms(form){
    //         $('form').validate({
    //             rules: {
    //                 name: {
    //                         required: true,
    //                         minlength: 2
    //                 },
    //                 phone: "required",
    //                 email: {
    //                     required: true,
    //                     email: true
    //                 }
    //             },
    //             messages: {
    //                 name: {
    //                     required: "Пожалуйста, введите свое имя",
    //                     minlength: jQuery.validator.format("Введите {0} символа!")
    //                   },
    //                 phone: "Пожалуйста, введите свой номер телефона",
    //                 email: {
    //                   required: "Пожалуйста, введите свою почту",
    //                   email: "Неправильно введен адрес почты"
    //                 }
    //             }
    //         });
    //     };

    //     validateForms('#consultation-form');
    //     validateForms('#consultation form');
    //     validateForms('#order form');

    //     $('input[name=phone]').mask("+7 (999) 999-99-99");

    //     $('form').submit(function(e) {
    //         e.preventDefault();

    //         if (!$(this).valid()) {
    //             return;
    //         }

    //         $.ajax({
    //             type: "POST",
    //             url: "mailer/smart.php",
    //             data: $(this).serialize()
    //         }).done(function() {
    //             $(this).find("input").val("");
    //             $('#consultation, #order').fadeOut();
    //             $('.overlay, #thanks').fadeIn('slow');

    //             $('form').trigger('reset');
    //         }); 
    //         return false;
    //     });

    //     // smooth scroll and pageup

    //     $(window).scroll(function() {
    //         if ($(this).scrollTop() > 1600) {
    //             $('.pageup').fadeIn();
    //         } else {
    //             $('.pageup').fadeOut();
    //         }
    //     }); 

    //     $("a[href=#up]").click(function(){
    //         const _href = $(this).attr("href");
    //         $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //         return false;
    // });

    // new WOW().init();

 



// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     navPosition: 'bottom',
//     responsive: {
//       640: {
//         edgePadding: 20,
//         gutter: 20,
//         items: 1,
//         arrows: false
//       },
//       700: {
//         gutter: 30,
//         arrows: false
//       },
//       900: {
//         items: 1,
//         arrows: false
//       }
//     }
//   });


// document.querySelector('.prev').addEventListener('click' , function () {slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click' , function () {slider.goTo('next');
// });
