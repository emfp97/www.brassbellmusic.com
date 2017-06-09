// Find all YouTube videos
var $allVideos = $(".js-video-container iframe[src*='//www.youtube.com'], .js-video-container iframe[src*='//player.vimeo.com']");

// The element that is fluid width
var containerSelector = ".js-video-container";

// Figure out and save aspect ratio for each video
$allVideos.each(function () {

	$(this)
		.data('aspectRatio', this.height / this.width)
		.data('originalWidth', this.width)

		// and remove the hard coded width/height
		.removeAttr('height')
		.removeAttr('width');

});

function fixVideoAspectRatio() {
	// Resize all videos according to their own aspect ratio
	$allVideos.each(function () {
		var $el = $(this);
		var newWidth = $el.closest(containerSelector).width();
		var originalWidth = $el.data('originalWidth');
		if(originalWidth > newWidth) {
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));
		}
		else {
			$el
				.width(originalWidth)
				.height(originalWidth * $el.data('aspectRatio'));
		}

	});
}
// When the window is resized
$(window).resize(fixVideoAspectRatio);
fixVideoAspectRatio();
