<?php 

function theme_builder() {
    
  wp_enqueue_style('font', 'https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
  wp_enqueue_style('css', get_template_directory_uri() . '/assets/css/style.min.css', 1.0);
  wp_enqueue_script('js', get_template_directory_uri() . '/assets/js/bundle.min.js', ['jquery'], 1.0, true);

}

add_action('wp_enqueue_scripts', 'theme_builder');
add_theme_support( 'post-thumbnails' );


// menus
register_nav_menus([
  'nav_main' => __('Menu principal'),
  'nav_footer' => __('Menu footer'),
]);


?>