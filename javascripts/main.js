$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".hero-container a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});


//typed.js for the main animation
$(function(){
    $("#typed").typed({
      strings: ["pensamientos ^100", "proyectos", "quejas", "terribles tweets", "descargas"] ,
      typeSpeed: 40,
      loop:true
    });
});

$(function(){
    $("#typedEng").typed({
      strings: ["thoughts ^100", "projects", "rants", "awful tweets", "whatever's on my mind"] ,
      typeSpeed: 40,
      loop:true
    });
});
