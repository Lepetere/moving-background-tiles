// Helper method, retrieves query string as a key/value hash
// this is taken from https://github.com/hakimel/reveal.js/blob/master/js/reveal.js
window.getQueryHash = function() {
	var query = {};

	location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
		query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
	} );

	// Basic deserialization
	for( var i in query ) {
		var value = query[ i ];

		query[ i ] = unescape( value );

		if( value === 'null' ) query[ i ] = null;
		else if( value === 'true' ) query[ i ] = true;
		else if( value === 'false' ) query[ i ] = false;
		else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
	}

	return query;
};

$().ready(function () {

	var BACKGROUNDSQUARE_MAX_WIDTH = 120;
	var BACKGROUNDSQUARE_MAX_HEIGHT = 120;

	var makeBackgroundSquares = function () {

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var horizontalNumberOfSquares = Math.floor(windowWidth / BACKGROUNDSQUARE_MAX_WIDTH) + 1;
		var verticalNumberOfSquares = Math.floor(windowHeight / BACKGROUNDSQUARE_MAX_HEIGHT) + 1;

		var backgroundSquareWidth = windowWidth / horizontalNumberOfSquares;
		var backgroundSquareHeight = Math.floor(windowHeight / verticalNumberOfSquares) + 1;

		if (! $('.background-tile-container').length ) {
			$('body').append('<div class="background-tile-container"></div>');
		}
		var squareContainer = $('.background-tile-container').first();
		squareContainer.empty();
		// set width and height of the square container to match the window dimensions
		squareContainer.css('width', windowWidth);
		squareContainer.css('height', windowHeight);
		// if a url for a background image is appended to the url, use that as background image
		var queryHash = window.getQueryHash();console.log(queryHash);
		// add the appropriate number of squares to fill the background
		for ( i = 0; i < horizontalNumberOfSquares * verticalNumberOfSquares; i++ ) {
			var square = $(squareContainer).append('<div class="background-tile"></div>').children('.background-tile').last();
			$(square).css('width', backgroundSquareWidth);
			$(square).css('height', backgroundSquareHeight);
			if (queryHash['backgroundImage'].length) {
			$(square).css('background-image', 'url(' + queryHash['backgroundImage'] + ')');
		}
		}
	};

	var alterBackgroundPosition = function (event) {
        var event = event || window.event; // IE-ism
        $('.background-tile-container').first().children().each(function (index, element) {
        	$(element).css('background-position', event.clientX + "px " + event.clientY + "px");
        });
    };

	// execute makeBackgroundSquares to add the squares to the background and assign it to window.onresize
	makeBackgroundSquares();
	window.onresize = makeBackgroundSquares;

	// add mouse move event handler to alter background of squares
	window.onmousemove = alterBackgroundPosition;
});