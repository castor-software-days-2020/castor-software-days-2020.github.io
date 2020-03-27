/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('to')).offset().top
        }, 1500, 'easeInOutExpo', () => {
            window.location = $anchor.attr('to')
        });
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.title-container').click(function(){
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo', () => {
        
    });
})

$(".navbar-fixed-top").on('activate.bs.scrollspy', function (e) {
   
    var $hash, $node;
    $hash = $("a[href^='#']", e.target).attr("to").replace(/^#/, '');
    $node = $('#' + $hash);
    if ($node.length) {
        $node.attr('id', '');
    }
    document.location.hash = $hash;
    if ($node.length) {
        return $node.attr('id', $hash);
    }
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

$("section").each((index, t) => {
    if(index%2)
        $(t).removeClass("bg-light-gray")
    else
        $(t).addClass("bg-light-gray")
})