/******
	noconflict declaration
******/

var $j = jQuery;

/******
	call on jQuery loaded
*******/

$j(function() {

	var $target = $j(tekserveStudioSlidingFooter.target);
	var $button = $j(tekserveStudioSlidingFooter.button);
	var buttontext = $button.html();
	var alttext = tekserveStudioSlidingFooter.alttext;
	var $top = $j('.tekserve-studio-sliding-footer-top');
	var $bottom = $j('.tekserve-studio-sliding-footer-bottom');
	var $buttonParent = $button.parent();
	$button.addClass('sliding-footer-trigger');
	$button.click( function () {
	
		$button = $j(tekserveStudioSlidingFooter.button);
		$target.toggleClass('expanded');
		
		$button = $button.detach();
		if ($target.hasClass('expanded')) {
			$button.html(alttext);
			$top.slideUp();
			$j('.tekserve-studio-sliding-footer-buttons').prepend($button);
			$j
			$bottom.slideDown();
		
		}
		else {
		
			$button.html(buttontext);
			$bottom.slideUp();
			$j($buttonParent).append($button);
			$top.slideDown();
		
		}	//end if ($target.hasClass('expanded'))
		
		
	
	});

});	//end $j(function()