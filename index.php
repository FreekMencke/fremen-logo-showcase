<?php
/*
Plugin Name: Logo Showcase
Description: Gutenberg block that adds a carousel to showcase logos.
Author: Freek Mencke
*/
function fremen_logo_showcase_register_block() {
 
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script(
        'fremen/logo-showcase',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
 
    register_block_type( 'fremen/logo-showcase', array(
        'editor_script' => 'fremen/logo-showcase',
    ) );
 
}
add_action( 'init', 'fremen_logo_showcase_register_block' );