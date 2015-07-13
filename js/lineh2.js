/******
	noconflict declaration
******/

var $j = jQuery;

/******
	call on jQuery loaded
*******/

$j(function() {

	$j('.tekserve-studio.page .content article h2').wrap('<div class="h2container" />');

}); //end $j(function()