/* activate scrollspy menu */
$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 52
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {

    if (location.hostname !== this.hostname || location.pathname.replace(/^\//,'') !== this.pathname.replace(/^\//,'')) {
        return;
    }

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top - 50
        }, 800);

        if (this.hash === '#home-section') {
            $('.scroll-up').hide();
        }
        else {
            $('.scroll-up').show();
        }

        // if (this.hash === '#portfolio-section') {
        // Should we do this only for home and portfolio-section ? or any hash?
            $('.portfolio-overview').show();
            $('.content-placeholder').hide();
        // }

        // activate animations in this section
        target.find('.animate').delay(1200).addClass('animated');
        setTimeout(function(){
            target.find('.animated').removeClass('animated');
        },2000);

        return false;
    }
});

$('a[data-side-load=true]').click(function(event) {
    var target = $(event.target),
        href = target.attr('href'),
        placeHolderSelector = target.data('place-holder-selector'),
        placeHolder = $(placeHolderSelector);
    if (!placeHolder.data('loaded')) {
        placeHolder.load( href + ' #portfolio-section', function () {
            placeHolder.data('loaded', true);
        });
    }
    placeHolder.show();
    $('.portfolio-overview').hide();
    return false;
});
