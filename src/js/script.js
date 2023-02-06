const headerBtn = document.getElementById("headerBtn");
const footerBtn = document.getElementById("footerBtn");

headerBtn.addEventListener("click", function() {
  window.location.href = "tel:+12675078523";
});

footerBtn.addEventListener("click", function() {
  window.location.href = "tel:+12675078523";
});

//modal

$('[data-modal=consultation]').on('click', function() {
  validateForms('#questions-form');
});


function validateForms(form) {
$('#questions-form').validate({
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
  },
  submitHandler: function(form) {
    if ($('#questions-form').valid()) {
      $('.overlay, #thanks').fadeIn('slow');
    }
  }
});

};
$('.modal__close').on('click', function() {
  $('.overlay, #thanks').fadeOut('slow');
  $('#questions-form')[0].reset();
});
validateForms('#questions-form');




$('input[name=phone]').mask("+9 (999) 999-99-99", {
onComplete: function() {
$('#questions-form').submit(function(e) {
  e.preventDefault();

  var formData = $(this).serializeArray();
  var formEmpty = formData.some(function(field) {
    return field.value === "";
  });
  
  if (formEmpty) {
    return;
  }


  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('.overlay, #thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
});
},
});

 


// 
//     $('.feed-form')[0].reset();
//     $('.overlay, #thanks').fadeIn('slow');
//   });

//   return false;
// });

// $('.modal__close').click(function() {
//   $('.overlay, #thanks').fadeOut('slow');
// });
