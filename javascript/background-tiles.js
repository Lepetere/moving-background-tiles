$.ready(function () {

	var BACKGROUNDSQUARE_MAX_WIDTH = 120;
	var BACKGROUNDSQUARE_MAX_HEIGHT = 120;

	var makeBackgroundSquares = function () {

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var horizontalNumberOfSquares = Math.floor(windowWidth / BACKGROUNDSQUARE_MAX_WIDTH);
		var verticalNumberOfSquares = Math.floor(windowHeight / BACKGROUNDSQUARE_MAX_HEIGHT);

		var backgroundSquareWidth = windowWidth / horizontalNumberOfSquares;
		var backgroundSquareHeight = windowHeight / verticalNumberOfSquares;

		var squareContainer = $('body').append('div').addClass('background-tile-container');
		// add the appropriate number of squares to fill the background
		for ( i = 0; i < horizontalNumberOfSquares * verticalNumberOfSquares; i++ ) {
			var square = $(squareContainer).append('div').addClass('background-tile');
			square.style('width', backgroundSquareWidth);
			square.style('height', backgroundSquareHeight);
		}
	};

	// execute makeBackgroundSquares to add the squares to the background and assign it to window.onresize
	makeBackgroundSquares();
	window.onresize = makeBackgroundSquares;

	// add mouse move event handler to alter background of squares
});