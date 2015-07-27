/******
	noconflict declaration
******/

var $j = jQuery;

/******
	call on jQuery loaded
*******/

$j(function() {

	$j('.tekserve-studio.page .content article h2, .tekserve-studio.page .content .item-wrap-slug-h2 h2').wrap('<div class="h2container" />');
	if ($j('body').hasClass('home')) {
	
		var $title = $j('.category-title');
		$title.parents('.row').remove();
		var $content = $j('#velocity-page-wrapper');
		if ($content) {
		
			var $row = $content.closest('.row');
			var shifted = $content.detach();
			$row.prepend(shifted);
		
		}
	
	}	//end if ($j('body').hasClass('home'))

}); //end $j(function()