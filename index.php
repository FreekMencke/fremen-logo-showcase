<?php
/*
Plugin Name: Logo Showcase
Plugin URI: https://github.com/FreekMencke/fremen-logo-showcase
Description: Gutenberg block that adds a Tiny Slider to showcase logos/images.

Author: Freek Mencke
Author URI: https://github.com/FreekMencke

Version: 1.0.3
*/

function fremen_logo_showcase_register_block() {
 
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script('fremen/logo-showcase', plugins_url( 'build/index.js', __FILE__ ), $asset_file['dependencies'], $asset_file['version']);
    
    wp_register_script('slider-script', plugins_url('build/slider.js', __FILE__), array(), $asset_file['version']);
    wp_register_style('slider-style', plugins_url('build/tiny-slider.css', __FILE__), array(), $asset_file['version']);
    wp_register_style('slider-style-custom', plugins_url('build/custom.css', __FILE__), array(), $asset_file['version']);
 
    register_block_type('fremen/logo-showcase', array(
        'editor_script' => 'fremen/logo-showcase',
        'script' => 'slider-script',
        'style' => array('slider-style', 'slider-style-custom'),
    ));

}

add_action( 'init', 'fremen_logo_showcase_register_block' );
