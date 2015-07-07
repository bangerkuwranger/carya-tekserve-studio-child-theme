<?php
/*
Carya - Tekserve Studio Child Theme
*/


/***
	Enqueue Parent Styles
***/

add_action( 'wp_enqueue_scripts', 'tekserve_studio_enqueue_styles' );
function tekserve_studio_enqueue_styles() {
   
   wp_enqueue_style( 'bootstrap' , get_template_directory_uri()."/css/bootstrap.css");
    wp_enqueue_style( 'style' , get_template_directory_uri()."/style.css");
    wp_enqueue_style( 'animate' , get_template_directory_uri()."/css/animate.min.css");
    wp_enqueue_style( 'font-awesome' , get_template_directory_uri()."/css/font-awesome.css");
    wp_enqueue_style( 'flexslider' , get_template_directory_uri()."/css/flexslider.css");
    wp_enqueue_style( 'style2' , get_template_directory_uri()."/css/style.css");
    wp_enqueue_style( 'responsive' , get_template_directory_uri()."/css/responsive.css");

}	//end tekserve_studio_enqueue_styles()