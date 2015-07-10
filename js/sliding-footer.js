/******
	noconflict declaration
******/

var $j = jQuery;

/******
	call on jQuery loaded
*******/

$j(function() {

	var cookiejar = document.cookie.split(';');
	var name = 'tekserveStudioShowFooter=';
	var flagvalue = '';
	for(var i=0; i<cookiejar.length; i++) {
	
        var c = cookiejar[i];
        while (c.charAt(0)==' ') {
        	c = c.substring(1);
        }
		if (c.indexOf(name) == 0) {
		
			flagvalue =  c.substring(name.length,c.length);
	
		}
        		
    }

	var $target = $j(tekserveStudioSlidingFooter.target);
	var $button = $j('.button-expand');
	var buttontext = $button.html();
	var alttext = tekserveStudioSlidingFooter.alttext;
	if (alttext === '') {
	
		alttext = buttontext;
	
	}
// 	if (flagvalue == '') {
// 
// 		document.cookie = 'tekserveStudioShowFooter=true;';
// 
// 	}
	if (flagvalue === 'hide') {
	
		hideFooter(false, $target);
	
	}
	var $buttons = $j('.tekserve-studio-sliding-footer-buttons');
	var $top = $j('.tekserve-studio-sliding-footer-top');
	var $bottom = $j('.tekserve-studio-sliding-footer-bottom');
	$button.click( function () {
	
		$target.toggleClass('expanded');
		if ($target.hasClass('expanded')) {
		
			$button.html(alttext);
			$top.slideUp();
			$buttons = $buttons.detach();
			$j('.tekserve-studio-sliding-footer-bottom-content').append($buttons);
			$bottom.slideDown();
		
		}
		else {
		
			$button.html(buttontext);
			$bottom.slideUp();
			$buttons = $j('.tekserve-studio-sliding-footer-buttons');
			$buttons = $buttons.detach();
			$top.slideDown();
			$target.find('.widget').append($buttons);
		
		}	//end if ($target.hasClass('expanded'))
		
	});	//end $button.click( function ()
	
	$j('.tekserve-studio-sliding-footer-close').click( function() {
	
		hideFooter(true, $target);
	
	});	//end $j('.tekserve-studio-sliding-footer-close').click( function()

});	//end $j(function()

function hideFooter(isClick, $target) {

	if (isClick) {
	
		var setCookie = "tekserveStudioShowFooter=hide";
// 		console.log(setCookie);
		document.cookie = setCookie;
	
	}
	
	$target.removeClass('show-footer');

}