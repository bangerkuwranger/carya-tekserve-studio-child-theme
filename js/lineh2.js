/******
	noconflict declaration
******/

var $j = jQuery;

/******
	call on jQuery loaded
*******/

$j(function() {

	$j('.tekserve-studio.page .content article h2, .tekserve-studio.page .content .item-wrap-slug-h2 h2').wrap('<div class="h2container" />');

}); //end $j(function()