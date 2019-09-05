$('form input[name="email"]').blur(function () {
    var email = $(this).val();
var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
if (re.test(email)) {
    $('.msg').hide();
} else {
    $('.msg').hide();
    $('.error').show();
}

});


(function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.home-feature-bg', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.home-feature-text, .home-feature-subtitle-left', {
      duration   : 500,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : true,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  });