/******
	noconflict declaration
******/

var $j = jQuery;

/******
	call on jQuery loaded
*******/

$j(function() {

	$target = $j('.fixed-footer');
	$j('#mc_mv_EMAIL').attr('placeholder', 'email address');
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


	if (flagvalue === 'hide') {
	
		hideFooter(false, $target);
	
	}

	
	$j('.tekserve-studio-simple-footer-close').click( function() {
	
		hideFooter(true, $target);
	
	});	//end $j('.tekserve-studio-simple-footer-close').click( function()

});	//end $j(function()

function hideFooter(isClick, $target) {

	if (isClick) {
	
		var setCookie = "tekserveStudioShowFooter=hide";
// 		console.log(setCookie);
		document.cookie = setCookie;
	
	}
	
	$target.removeClass('show-footer');

}