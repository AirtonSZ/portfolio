(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

    // MAIL
    $(function() {
      $('#form-email').on('submit', function(event) {
        var name = $('#name').text() || ''
        var email = $('#email').text()
        var message = $('#message').text()
        var subject = "Let's talk"
        if (name !== '') {
          subject = subject + ' - ' + name
        }
        var myemail = 'airtonszoliveira@gmail.com'

        var link = 'mailto:' + myemail + '?subject=' + subject + '&body=' + message

        console.log('name', name)
        console.log('email', email)
        console.log('message', message)
        console.log('subject', subject)
        console.log('myemail', myemail)
        console.log('link', link)

        //window.location.href = link
        window.open(link, '_blank')

      })
    })

})(jQuery);
