<?php
/*
Carya - Tekserve Studio Child Theme
*/


/***
	Enqueue Parent Styles
***/

add_action( 'wp_enqueue_scripts', 'tekserve_studio_enqueue_parent_styles' );
function tekserve_studio_enqueue_parent_styles() {
   
	wp_enqueue_style( 'bootstrap' , get_template_directory_uri()."/css/bootstrap.css");
    wp_enqueue_style( 'style' , get_template_directory_uri()."/style.css");
    wp_enqueue_style( 'animate' , get_template_directory_uri()."/css/animate.min.css");
    wp_enqueue_style( 'font-awesome' , get_template_directory_uri()."/css/font-awesome.css");
    wp_enqueue_style( 'flexslider' , get_template_directory_uri()."/css/flexslider.css");
    wp_enqueue_style( 'style2' , get_template_directory_uri()."/css/style.css");
    wp_enqueue_style( 'responsive' , get_template_directory_uri()."/css/responsive.css");

}	//end tekserve_studio_enqueue_styles()



/***
	Register Typography.com stylesheet and enqueue
***/

add_action( 'wp_enqueue_scripts', 'tekserve_studio_enqueue_typography' );
function tekserve_studio_enqueue_typography() {

	wp_register_style( 'typography_gotham', '//cloud.typography.com/6883574/655028/css/fonts.css', 'style', '1.0a' );
	wp_enqueue_style( 'typography_gotham' );

}