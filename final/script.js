$(document).ready(function () {
    // $(".gallery").horizontalScroll();

    $("#video-work").hide();
    $("#video-vlogs").hide();
    $("#video-personal").hide();

    $("#work-link").hover(
        function () {
            $("#video-my-year").hide();
            $("#video-work").show();
            $("#video-title").html("KOLD - A Reminder To Myself");
        },
        function () {
            $("#video-work").hide();
            $("#video-my-year").show();
            $("#video-title").html("MY YEAR 2016");
        }
    );

    $("#vlogs-link").hover(
        function () {
            $("#video-my-year").hide();
            $("#video-vlogs").show();
            $("#video-title").html("PURA VIDA! - The Costa Rica Vlog");
        },
        function () {
            $("#video-vlogs").hide();
            $("#video-my-year").show();
            $("#video-title").html("MY YEAR 2016");
        }
    );

    $("#personal-link").hover(
        function () {
            $("#video-my-year").hide();
            $("#video-personal").show();
            $("#video-title").html("KOLD - Hawaii v1.0");
        },
        function () {
            $("#video-personal").hide();
            $("#video-my-year").show();
            $("#video-title").html("MY YEAR 2016");
        }
    );

$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
	});
});