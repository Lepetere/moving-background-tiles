$().ready(function () {

	var BACKGROUNDSQUARE_MAX_WIDTH = 120;
	var BACKGROUNDSQUARE_MAX_HEIGHT = 120;

	var makeBackgroundSquares = function () {

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var horizontalNumberOfSquares = Math.floor(windowWidth / BACKGROUNDSQUARE_MAX_WIDTH);
		var verticalNumberOfSquares = Math.floor(windowHeight / BACKGROUNDSQUARE_MAX_HEIGHT);

		var backgroundSquareWidth = windowWidth / horizontalNumberOfSquares;
		var backgroundSquareHeight = windowHeight / verticalNumberOfSquares;

		if (! $('.background-tile-container').length ) {
			$('body').append('<div class="background-tile-container"></div>');
		}
		var squareContainer = $('.background-tile-container').first();
		squareContainer.empty();
		// add the appropriate number of squares to fill the background
		for ( i = 0; i < horizontalNumberOfSquares * verticalNumberOfSquares; i++ ) {
			var square = $(squareContainer).append('<div class="background-tile">hallo</div>').children('.background-tile').last();
			$(square).css('width', backgroundSquareWidth);
			$(square).css('height', backgroundSquareHeight);
		}
	};

	var alterBackgroundPosition = function (event) {
        var event = event || window.event; // IE-ism
        console.log("x mouse potition: " + event.clientX + "; y mouse potition: " + event.clientY);
    };

	// execute makeBackgroundSquares to add the squares to the background and assign it to window.onresize
	makeBackgroundSquares();
	window.onresize = makeBackgroundSquares;

	// add mouse move event handler to alter background of squares
	window.onmousemove = alterBackgroundPosition;
});