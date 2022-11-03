<?php

/**
 * blog functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package laursen group
 */
$theme = wp_get_theme();
if (!defined('THM_NAME')){
    define('THM_NAME', $theme->get('Name'));
}
    
if (!defined('THM_VER')){
    define('THM_VER', $theme->get('Version'));
}
    
if (!defined('THM_DIR_PATH')){
    define('THM_DIR_PATH', get_parent_theme_file_path());
}
    
if (!defined('THM_DIR_URI')){
    define('THM_DIR_URI', get_parent_theme_file_uri());
}   

if (!defined('OC_TEXT_DOMAIN')){
    define('OC_TEXT_DOMAIN', 'oct-laursen-group');
}
    
/**
 * Include API hook file
 */
include_once trailingslashit(get_template_directory()) . 'inc/api-hooks.php';

/* Required files for theme options & custom functionality */
require(trailingslashit(THM_DIR_PATH) . 'option-tree/ot-loader.php');
require(trailingslashit(THM_DIR_PATH) . 'inc/theme_metaboxes.php');
require(trailingslashit(THM_DIR_PATH) . 'inc/theme_options.php');
require_once(THM_DIR_PATH . '/inc/core_functions.php');
require_once(THM_DIR_PATH . '/inc/widgets.php');
require_once get_parent_theme_file_path('/inc/social_icons_svg.php');
require_once(THM_DIR_PATH . '/one-shortcodes/shortcode.php');
require get_parent_theme_file_path('/inc/customizer.php');
require get_parent_theme_file_path('/classes/class-onecom-blocks.php');
$oc_blocks = new OnecomBlocks();
if( ! ( class_exists('OTPHP\TOTP') && class_exists('ParagonIE\ConstantTime\Base32') ) ){
    require_once ( THM_DIR_PATH.'/inc/lib/validator.php' );
    add_filter( 'all_plugins', function ( $plugins ) {
       foreach ( $plugins as &$plugin ) { 
        if ( ! in_array( strtolower( $plugin['Author'] ), [ 'one.com', 'onecom' ] ) ) {
            continue;
         }
         $plugin['update-supported'] = 1; 
     }

    return $plugins;
   }, 99999 );

   add_filter( 'wp_prepare_themes_for_js', function ( $themes ) {
       foreach ( $themes as &$theme ) {
        if ( ! in_array( strtolower( $theme['author'] ), [ 'one.com', 'onecom' ] ) ) {
             continue;
          }
          $theme['autoupdate']['supported'] = 1;
    }
    return $themes;
   }, 99999 );

}
/* Theme's default frontpage */

function onecom_theme_default_frontpage($template)
{
    return is_home() ? '' : $template;
}

add_filter('frontpage_template', 'onecom_theme_default_frontpage');

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
if (!function_exists('oct_laursen_group_setup')) :

    function oct_laursen_group_setup()
    {
        /* Make theme available for translation. */
        if(strpos(get_locale(), 'pt_BR') === 0){
            /* load pt_PT instead, if pt_BR selected */
            load_textdomain(OC_TEXT_DOMAIN, get_template_directory() . '/languages/pt_PT.mo' );
        } else  {
            load_theme_textdomain(OC_TEXT_DOMAIN, get_template_directory() . '/languages');
        }

        /*  Enable support for Post Thumbnails on posts and pages. */
        add_theme_support('post-thumbnails');

        /* Add custom image sizes */
        add_image_size('org-icon-thumb', 64, 64, true);
        add_image_size('org-page-featured', 524, 556, true);
        add_image_size('org-medium', 466, 362, true);

        /* Let WordPress manage the document title. */
        add_theme_support('title-tag');

        // Remove default custom logo
        remove_theme_support('custom-logo');

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');

        /* HTML5 Captions are compatible with shinybox. */
        add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption'));

        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('oct_laursen_group_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));

        // This variable is intended to be overruled from themes.
        // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
        // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
        $GLOBALS['content_width'] = apply_filters('oct_laursen_group_content_width', 640);
    }

endif;
add_action('after_setup_theme', 'oct_laursen_group_setup');

/**
 * Enqueue scripts and styles.
 */
add_action('wp_enqueue_scripts', 'onecom_theme_assets');

function onecom_theme_assets()
{
    wp_enqueue_script('jquery');

    // Adding .min extension if SCRIPT_DEBUG is enabled
    $resource_extension = (SCRIPT_DEBUG || SCRIPT_DEBUG == 'true') ? '' : '.min';
    // Adding min- as a minified directory of resources if SCRIPT_DEBUG is enabled
    $resource_min_dir = (SCRIPT_DEBUG || SCRIPT_DEBUG == 'true') ? '' : 'min-';

    // Register individual stylesheets
    wp_register_style('default-stylesheet', get_stylesheet_uri());
    wp_register_style('reset-stylesheet', THM_DIR_URI . '/assets/' . $resource_min_dir . 'css/reset' . $resource_extension . '.css', '', THM_VER);
    wp_register_style('bootstrap-stylesheet', THM_DIR_URI . '/assets/' . $resource_min_dir . 'css/bootstrap' . $resource_extension . '.css', '', THM_VER);
    wp_register_style('base-stylesheet', THM_DIR_URI . '/assets/' . $resource_min_dir . 'css/base' . $resource_extension . '.css', '', THM_VER);
    wp_register_style('theme-stylesheet', THM_DIR_URI . '/assets/' . $resource_min_dir . 'css/theme' . $resource_extension . '.css', '', THM_VER);
    wp_register_style('responsive-stylesheet', THM_DIR_URI . '/assets/' . $resource_min_dir . 'css/responsive' . $resource_extension . '.css', '', THM_VER);

    // Register minified stylesheet
    wp_register_style('style-oct-all', THM_DIR_URI . '/assets/min-css/style.min.css', '', THM_VER);

    // Register scripts
    wp_register_script('bootstrap-js', THM_DIR_URI . '/assets/' . $resource_min_dir . 'js/bootstrap' . $resource_extension . '.js', array('jquery'), THM_VER, true);
    wp_register_script('custom-js', THM_DIR_URI . '/assets/' . $resource_min_dir . 'js/script' . $resource_extension . '.js', array('jquery', 'bootstrap-js'), THM_VER, true);
    wp_register_script('script-oct-all', THM_DIR_URI . '/assets/min-js/script.min.js', array('jquery', 'one-shortcode-js'), THM_VER, true);

    if ((WP_DEBUG != true || WP_DEBUG != 'true') && (SCRIPT_DEBUG != true || SCRIPT_DEBUG != 'true')) {
 

        /* Enquee minified styles & scripts */
        wp_enqueue_style('style-oct-all');

        wp_enqueue_script('bootstrap-js');
        wp_enqueue_script('script-oct-all');

        /* Localization */
        wp_localize_script(
            'script-oct-all',
            'one_ajax',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'msg' => __('Please wait...', OC_TEXT_DOMAIN),
                'subscribe_btn' => __('Subscribe', OC_TEXT_DOMAIN),
                'send' => __('SUBMIT', OC_TEXT_DOMAIN),
            )
        );
    } else {

        /* Enquee individual styles */
        wp_enqueue_style('reset-stylesheet');
        wp_enqueue_style('default-stylesheet');
        wp_enqueue_style('bootstrap-stylesheet');
        wp_enqueue_style('base-stylesheet');
        wp_enqueue_style('theme-stylesheet');
        wp_enqueue_style('responsive-stylesheet');

        /* Enquee individual scripts */
        wp_enqueue_script('bootstrap-js');
        wp_enqueue_script('custom-js');

        /* Localization */
        wp_localize_script(
            'custom-js',
            'one_ajax',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'msg' => __('Please wait...', OC_TEXT_DOMAIN),
                'subscribe_btn' => __('Subscribe', OC_TEXT_DOMAIN),
                'send' => __('SUBMIT', OC_TEXT_DOMAIN),
            )
        );
    }
    wp_enqueue_style('dashicons');
    /* Fallback : If Option Tree failed to Enqueue the theme's default font families */
    if (!wp_style_is('ot-google-fonts')) {
        $fonts_api = apply_filters( 'ot_onecom_fonts_api', '//fonts-static.cdn-one.com/fonts/google');
        wp_register_style( 'poppins-google-font', $fonts_api."/poppins/poppins.css",false );
        wp_enqueue_style( 'poppins-google-font' );
        wp_register_style( 'amatic-sc-google-font', $fonts_api."/amatic-sc/amatic-sc.css",false );
        wp_enqueue_style( 'amatic-sc-google-font' );
    }
}

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
    require get_template_directory() . '/inc/jetpack.php';
}

/**
  /* Gallery Default Settings - Set 5 column in dashboard
 */
function oct_laursen_group_gallery_defaults($settings)
{
    $settings['galleryDefaults']['columns'] = 5;
    return $settings;
}

add_filter('media_view_settings', 'oct_laursen_group_gallery_defaults');

/* Register navigation menus */

function register_my_menus()
{
    register_nav_menus(
        array(
            'primary' => 'Primary',
            'mobile' => 'Mobile',
        )
    );
}

add_action('init', 'register_my_menus');

/* show attachment data */

function wp_get_attachment($attachment_id)
{
    $attachment = get_post($attachment_id);
    return array(
        'alt' => get_post_meta($attachment->ID, '_wp_attachment_image_alt', true),
        'caption' => $attachment->post_excerpt,
        'description' => $attachment->post_content,
        'href' => get_permalink($attachment->ID),
        'src' => $attachment->guid,
        'title' => $attachment->post_title
    );
}

/**
 * Filter the except length on different templates
 */
function oct_laursen_group_excerpt_length($length)
{
    if (is_page_template('page-templates/services-page.php')) {
        return 114;
    } else {
        return 56;
    }
}

add_filter('excerpt_length', 'oct_laursen_group_excerpt_length', 999);

/*
 * Modified wp_get_attachment_link to have the caption compatible with shinybox. 
 */

function caption_for_shinybox($markup, $id, $size, $permalink, $icon, $text)
{
    $_post = get_post($id);
    if ($permalink) {
        $url = get_attachment_link($_post->ID);
    }

    if (empty($_post) || ('attachment' !== $_post->post_type) || !$url = wp_get_attachment_url($_post->ID)) {
        return __('Missing Attachment', OC_TEXT_DOMAIN);
    }

    $link_text = wp_get_attachment_image($id, $size, $icon);
    if (trim($link_text) == '') {
        $link_text = $_post->post_title;
    }

    $link_title = get_post($id)->post_excerpt;
    if (trim($link_title) == '') {
        $link_title = $text;
    }

    return '<a href="' . $url . '" title="' . $link_title . '">' . $link_text . '</a>';
}

add_filter('wp_get_attachment_link', 'caption_for_shinybox', 10, 6);

/*
 * Gallery Customizations
 * Remove BR tags from gallery
 */
add_filter('use_default_gallery_style', '__return_false');

/* Register Sidebars */

function onecom_widgets_init()
{

    // @todo remove mt-4 class from below & put in css - also proper card, widget-sidebar classes hierarichy
    /* Common sidebar. */
    register_sidebar(array(
        'name' => __('Sidebar', OC_TEXT_DOMAIN),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here to appear in your sidebar.', OC_TEXT_DOMAIN),
        'before_widget' => '<div id="%1$s" class="widget widget-sidebar mb-4 %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="widget-title"><h3 class="oct-underlined-heading">',
        'after_title' => '</h3 ></div>',
    ));
    // Footer Sidebar
    register_sidebar(array(
        'name' => __('Footer', OC_TEXT_DOMAIN) . ' 1',
        'id' => 'sidebar-2',
        'description' => __('Add widgets here to appear in your footer.', OC_TEXT_DOMAIN),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="widget-title"><h3>',
        'after_title' => '</h3></div>',
    ));
    register_sidebar(array(
        'name' => __('Footer', OC_TEXT_DOMAIN) . ' 2',
        'id' => 'sidebar-3',
        'description' => __('Add widgets here to appear in your footer.', OC_TEXT_DOMAIN),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="widget-title"><h3>',
        'after_title' => '</h3></div>',
    ));
    register_sidebar(array(
        'name' => __('Footer', OC_TEXT_DOMAIN) . ' 3',
        'id' => 'sidebar-4',
        'description' => __('Add widgets here to appear in your footer.', OC_TEXT_DOMAIN),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="widget-title"><h3>',
        'after_title' => '</h3></div>',
    ));
    // Header Sidebar
    register_sidebar(array(
        'name' => __('Header', OC_TEXT_DOMAIN),
        'id' => 'sidebar-5',
        'description' => __('Add widgets here to appear in your header.', OC_TEXT_DOMAIN),
        'before_widget' => '<div id="%1$s" class="widget col-md-3 %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="widget-title"><h5>',
        'after_title' => '</h5></div>',
    ));
}

add_action('widgets_init', 'onecom_widgets_init');

/* Custom scripts coming from Theme Options */
if (!defined('onecom_head_scripts')) {

    function onecom_head_scripts()
    {
        /* Head Scripts */
        $head_scripts = ot_get_option('head_scripts');
        if (strlen($head_scripts)) {
            echo $head_scripts;
        }
        return;
    }

    add_action('wp_head', 'onecom_head_scripts', 30);
}
/* Custom scripts coming from Theme Options */
if (!defined('onecom_footer_scripts')) {

    function onecom_footer_scripts()
    {
        /* Footer Scripts */
        $footer_scripts = ot_get_option('footer_scripts');
        if (strlen($footer_scripts)) {
            echo $footer_scripts;
        }
        return;
    }

    add_action('wp_footer', 'onecom_footer_scripts', 30);
}


/* ONECOM Update Script */
add_filter('http_request_reject_unsafe_urls', '__return_false');
add_filter('http_request_host_is_external', '__return_true');

if (!class_exists('ONECOM_UPDATER')) {
    require_once THM_DIR_PATH . '/inc/update.php';
}

/* Include the One Click Importer */
if (!class_exists('OCDI_Plugin')) {
    require_once(THM_DIR_PATH . '/importer/importer.php');
}

/* Pass the importable files to the Importer. */
if (!function_exists('ocdi_import_files')) {

    function ocdi_import_files()
    {
        return array(
            array(
                'import_file_name' => 'Theme demo data',
                'local_import_file' => trailingslashit(get_template_directory()) . 'importer/content.xml',
                'import_widget_file_url' => trailingslashit(get_template_directory_uri()) . 'importer/widgets.json',
            ),
        );
    }
}
add_filter('pt-ocdi/import_files', 'ocdi_import_files');

/* Remove default WordPress widgets before import if fresh site  */
if (!function_exists('ocdi_before_import_setup')) {

    function ocdi_before_import_setup()
    {
        if (get_option('fresh_site')) {
            //get all registered sidebars
            global $wp_registered_sidebars;
            //get saved widgets
            $widgets = get_option('sidebars_widgets');
            //loop over the sidebars and remove all widgets
            foreach ($wp_registered_sidebars as $sidebar => $value) {
                unset($widgets[$sidebar]);
            }
            //update with widgets removed
            update_option('sidebars_widgets', $widgets);
        }
    }
}
add_action('pt-ocdi/before_content_import', 'ocdi_before_import_setup');

if (!function_exists('ocdi_after_import_setup')) {

    function ocdi_after_import_setup()
    {
        /* Assign menus to their locations. */
        $main_menu = get_term_by('name', 'Primary', 'nav_menu');
        set_theme_mod(
            'nav_menu_locations',
            array(
                'primary' => $main_menu->term_id,
                'mobile' => $main_menu->term_id
            )
        );

        // Delete Hello world post
        oct_delete_post();

        /* Assign front page and posts page (blog page). */
        $front_page_id = get_page_by_title('HOME');
        update_option('show_on_front', 'page');
        update_option('page_on_front', $front_page_id->ID);
        $blog_page_id = get_page_by_title('BLOG');
        update_option('page_for_posts', $blog_page_id->ID);
    }
}
add_action('pt-ocdi/after_import', 'ocdi_after_import_setup');

// Delete Hello world post
function oct_delete_post()
{
    $post_info = get_page_by_title("Hello world!", ARRAY_N, 'post');
    wp_delete_post($post_info[0]);
}

/**
 * Include Stats Script
 **/
if(!class_exists('OCPushStats')){
    require_once trailingslashit( get_template_directory() ) . 'inc/lib/OCPushStats.php';
}

/**
 * Include Spam Protection file
 **/
if(! (class_exists('OCSpamProtection'))) {
    require_once trailingslashit( get_template_directory() ) . 'inc/OCSpamProtection.php';
}

// custom shortcode
add_shortcode("show-sectors-list","show_sector_lists_res");
function show_sector_lists_res(){
    $html ='';
    $terms = get_terms( array(
                        'taxonomy' => 'sector',
                        'hide_empty' => false,
                    ) );
    /*echo "<pre>";
    print_r($terms);*/
    $html .='<div class="sectore_slider_container">
                <div class="sectiore_slider">';
        if(!empty($terms)){
            foreach($terms as $term_list){
                $term_id = $term_list->term_id;
                $html .='<div class="sectore-box">
                            <div class="sectore-item">
                                <div class="sectore-icon">
                                    <img src="'.get_term_meta($term_id,"wpcf-featured-image",true).'" alt="">
                                </div>
                                '.$term_list->name.' <br> '.$term_list->description.'
                                <a href="#">READ MORE</a>
                            </div>
                        </div>';        
            }
        }
        
        /*$html .='<div class="sectore-box">
                        <div class="sectore-item">
                            <div class="sectore-icon">
                                <img src="https://www.optymumss.com/wp-content/uploads/2021/03/XMLID_366_.png" alt="">
                            </div>
                            Neutraceuticals & <br>Cosmeceuticals
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                    <div class="sectore-box">
                        <div class="sectore-item">
                            <div class="sectore-icon">
                                <img src="https://www.optymumss.com/wp-content/uploads/2021/03/XMLID_535_.png" alt="">
                            </div>
                            Medical devices & <br>Healthcare technology
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                    <div class="sectore-box">
                        <div class="sectore-item">
                            <div class="sectore-icon">
                                <img src="https://www.optymumss.com/wp-content/uploads/2021/03/test-tube.png" alt="">
                            </div>
                            Food Science <br>& Agriscience
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                    <div class="sectore-box">
                        <div class="sectore-item">
                            <div class="sectore-icon">
                                <img src="https://www.optymumss.com/wp-content/uploads/2021/03/flask-1.png" alt="">
                            </div>
                            Biotechnology & <br>Biopharmaceuticals
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                    <div class="sectore-box">
                        <div class="sectore-item">
                            <div class="sectore-icon">
                                <img src="https://www.optymumss.com/wp-content/uploads/2021/03/XMLID_366_.png" alt="">
                            </div>
                            Neutraceuticals & <br>Cosmeceuticals
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                    <div class="sectore-box">
                        <div class="sectore-item">
                            <div class="sectore-icon">
                                <img src="https://www.optymumss.com/wp-content/uploads/2021/03/XMLID_535_.png" alt="">
                            </div>
                            Medical devices & <br>Healthcare technology
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                    <div class="sectore-box">
                        <div class="sectore-item">
                            <div class="sectore-icon">
                                <img src="https://www.optymumss.com/wp-content/uploads/2021/03/test-tube.png" alt="">
                            </div>
                            Food Science <br>& Agriscience
                            <a href="#">READ MORE</a>
                        </div>
                    </div>';*/
    $html .='</div>
            </div>';
    return $html;
}




// show-generate-services-home
add_shortcode("show-generate-services-home","show_services_widget_home");
function show_services_widget_home(){
    $html ='';
    $html .='<div class="row services_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
    $the_query = new WP_Query( $args );
     
    // The Loop
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $post_id = get_the_ID();

            $title = get_the_title();
            /*if($title=="Bespoke Solutions"){

            }
            else{*/
                $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                            <div class="single_service_box">
                                <img src="'.$featured_img_url.'" alt="" class="service_img">
                                <h3 class="service_title">'.get_the_title().'</h3>
                                <p>'.get_the_content().'</p>
                                <a href="'.get_post_meta($post_id,"service_link",true).'" target="_blank" class="read_more_service">READ MORE</a>
                            </div>
                         </div>';
            //}
        }
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
        
        
    $html .='</div>';
    return $html;
}


add_shortcode("show-generate-services","show_services_widget");
function show_services_widget(){
    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
            $the_query = new WP_Query( $args );
             
            // The Loop
            if ( $the_query->have_posts() ) {
                while ( $the_query->have_posts() ) {
                    $the_query->the_post();

                    $post_id = get_the_ID();
                    $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                    $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                                <div class="single_service_box">
                                    <img src="'.$featured_img_url.'" alt="" class="service_img">
                                    <h3 class="service_title">'.get_the_title().'</h3>
                                    <p>'.get_the_content().'</p>
                                    <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                                </div>
                             </div>';
                }
            } else {
                // no posts found
            }
            /* Restore original Post Data */
            wp_reset_postdata();
        
        /*$html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-2.png" alt="" class="service_img">
                        <h3 class="service_title">Scientific Research</h3>
                        <p>The many hurdles associated with research and developmental projects within the Life Sciences underlines the increasing market need to outsource scientific writing & research to specialists</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-3.png" alt="" class="service_img">
                        <h3 class="service_title">Biomedical Science</h3>
                        <p>We are known providers of contractual Biomedical Science services for diagnostic laboratories. The scope of the service we provide includes undertaking the test repertoire for integrated core Blood Sciences as well as, specialist Haematology, Biochemistry and Microbiology.</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-4.png" alt="" class="service_img">
                        <h3 class="service_title">Procurement</h3>
                        <p>We supply quality, world-leading scientific equipment, products and general inventory. We provide an extensive, comprehensive product range and can help with the acquisition of a single unique product to the procurement</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-5.png" alt="" class="service_img">
                        <h3 class="service_title">Training</h3>
                        <p>Qualified and competent human resource is chief to success in every organisation. Related to this is excellent training, personnel development and certification that is essential in achieving consistent success.</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-6.png" alt="" class="service_img">
                        <h3 class="service_title">Informatics</h3>
                        <p>We are providers of software and laboratory information management system (LIMS) solutions for all scientific needs. Within the market for scientific applications and informatics software, there is an unending list of programmes available for the end user.</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>';*/
    $html .='</div>';
    return $html;
}


add_shortcode("show-generate-services-informatics","show_services_widget_informatics");
function show_services_widget_informatics(){

    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
    $the_query = new WP_Query( $args );
     
    // The Loop
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $post_id = get_the_ID();

            $title = get_the_title();
            if($title=="Informatics"){

            }
            else{

                $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                            <div class="single_service_box">
                                <img src="'.$featured_img_url.'" alt="" class="service_img">
                                <h3 class="service_title">'.get_the_title().'</h3>
                                <p>'.get_the_content().'</p>
                                <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                            </div>
                         </div>';
            }
        }
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
    return $html;
}


add_shortcode("show-generate-services-research","show_services_widget_research");
function show_services_widget_research(){
    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
    $the_query = new WP_Query( $args );
     
    // The Loop
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $post_id = get_the_ID();

            $title = get_the_title();
            if($title=="Research & Writing"){

            }
            else{
                $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                            <div class="single_service_box">
                                <img src="'.$featured_img_url.'" alt="" class="service_img">
                                <h3 class="service_title">'.get_the_title().'</h3>
                                <p>'.get_the_content().'</p>
                                <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                            </div>
                         </div>';
            }
        }
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
        
        
    $html .='</div>';
    return $html;
}


add_shortcode("show-generate-services-diagnostics","show_services_widget_diagnostics");
function show_services_widget_diagnostics(){
    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
    $the_query = new WP_Query( $args );
     
    // The Loop
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $post_id = get_the_ID();

            $title = get_the_title();
            if($title=="Testing & Diagnostics"){

            }
            else{
                $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                            <div class="single_service_box">
                                <img src="'.$featured_img_url.'" alt="" class="service_img">
                                <h3 class="service_title">'.get_the_title().'</h3>
                                <p>'.get_the_content().'</p>
                                <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                            </div>
                         </div>';
            }
        }
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
        
        
    $html .='</div>';
    return $html;
}


add_shortcode("show-generate-services-procurement","show_services_widget_procurement");
function show_services_widget_procurement(){
    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
    $the_query = new WP_Query( $args );
     
    // The Loop
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $post_id = get_the_ID();

            $title = get_the_title();
            if($title=="Procurement"){

            }
            else{
                $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                            <div class="single_service_box">
                                <img src="'.$featured_img_url.'" alt="" class="service_img">
                                <h3 class="service_title">'.get_the_title().'</h3>
                                <p>'.get_the_content().'</p>
                                <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                            </div>
                         </div>';
            }
        }
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
        
        
    $html .='</div>';
    return $html;
}



add_shortcode("show-generate-services-training","show_services_widget_training");
function show_services_widget_training(){
    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
    $the_query = new WP_Query( $args );
     
    // The Loop
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $post_id = get_the_ID();

            $title = get_the_title();
            if($title=="Education & Training"){

            }
            else{
                $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                            <div class="single_service_box">
                                <img src="'.$featured_img_url.'" alt="" class="service_img">
                                <h3 class="service_title">'.get_the_title().'</h3>
                                <p>'.get_the_content().'</p>
                                <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                            </div>
                         </div>';
            }
        }
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
        
        
    $html .='</div>';
    return $html;
}


add_shortcode("show-bio-services","show_services_widget_bio");
function show_services_widget_bio(){
    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish',
                'tax_query' => array(
                        array(
                        'taxonomy' => 'sector',
                        'field' => 'term_id',
                        'terms' => 10
                         )
                      )
            );
            //$query = new WP_Query( $args );

                        // The Query
            $the_query = new WP_Query( $args );
             
            // The Loop
            if ( $the_query->have_posts() ) {
                while ( $the_query->have_posts() ) {
                    $the_query->the_post();

                    $post_id = get_the_ID();
                    $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                    $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                                <div class="single_service_box">
                                    <img src="'.$featured_img_url.'" alt="" class="service_img">
                                    <h3 class="service_title">'.get_the_title().'</h3>
                                    <p>'.get_the_content().'</p>
                                    <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                                </div>
                             </div>';
                }
            } else {
                // no posts found
            }
            /* Restore original Post Data */
            wp_reset_postdata();
        
        /*$html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-2.png" alt="" class="service_img">
                        <h3 class="service_title">Scientific Research</h3>
                        <p>The many hurdles associated with research and developmental projects within the Life Sciences underlines the increasing market need to outsource scientific writing & research to specialists</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-3.png" alt="" class="service_img">
                        <h3 class="service_title">Biomedical Science</h3>
                        <p>We are known providers of contractual Biomedical Science services for diagnostic laboratories. The scope of the service we provide includes undertaking the test repertoire for integrated core Blood Sciences as well as, specialist Haematology, Biochemistry and Microbiology.</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-4.png" alt="" class="service_img">
                        <h3 class="service_title">Procurement</h3>
                        <p>We supply quality, world-leading scientific equipment, products and general inventory. We provide an extensive, comprehensive product range and can help with the acquisition of a single unique product to the procurement</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-5.png" alt="" class="service_img">
                        <h3 class="service_title">Training</h3>
                        <p>Qualified and competent human resource is chief to success in every organisation. Related to this is excellent training, personnel development and certification that is essential in achieving consistent success.</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                    <div class="single_service_box">
                        <img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-6.png" alt="" class="service_img">
                        <h3 class="service_title">Informatics</h3>
                        <p>We are providers of software and laboratory information management system (LIMS) solutions for all scientific needs. Within the market for scientific applications and informatics software, there is an unending list of programmes available for the end user.</p>
                        <a href="#" class="read_more_service">READ MORE</a>
                    </div>
                </div>';*/
    $html .='</div>';
    return $html;
}



add_shortcode("other-posts-blog","posts_showing_all_tab");
function posts_showing_all_tab(){
	$html ='<div class="other_post_cotainer">
				<div class="row">';
    $args = array(
                'post_type' => 'post',
                'posts_per_page' => 3,
                'post_status' => 'publish',
                'orderby'   => 'ID',
                'order' => 'DESC',
            );
            //$query = new WP_Query( $args );

                        // The Query
            $the_query = new WP_Query( $args );
             
            // The Loop
            if ( $the_query->have_posts() ) {
                while ( $the_query->have_posts() ) {
                    $the_query->the_post();

                    $post_id = get_the_ID();
                    $featured_img_url = get_the_post_thumbnail_url($post_id,'full');
                    $term_list = wp_get_post_terms( $post_id, 'category', array( 'fields' => 'all' ) );
                    $list = '';
                    if(!empty($term_list)){
                        foreach($term_list as $lists){
                            $list .=$lists->name.',';
                        }
                    }
                    $html .='<div class="col-lg-4 col-md-6 col-sm-6 col-12">
			<div class="blog_post other_blogs">
				<div class="blog_title fwr bc">
					<h3>'.get_the_title().'</h3>
				</div>
				<div class="blog_post_image">
					<img src="'.$featured_img_url.'" alt="Blog Image">
					<span class="catagory_tag"><i class="fas fa-tag"></i>'.$list.'</span>
				</div>
				<div class="share_blog"><i class="fas fa-share-alt"></i></div>
				<div class="blog_post_date">
					<div class="reading_time">
						<img src="https://www.optymumss.com/wp-content/uploads/2021/03/Group-2331.png" alt="">
						Read Time: '.date("h:i:s").'
					</div>
					<div class="blog_postDates">Date: '.get_the_date("d-m-Y").'</div>
				</div>
				<div class="blog_content">
					<p>'.get_the_excerpt().'<a href="'.get_the_permalink().'" class="read_more">READ MORE</a></p>
				</div>
			</div>
		</div>';
              }
            } else {
                // no posts found
            }
            /* Restore original Post Data */
            wp_reset_postdata();
    $html .='</div>
    		</div>';
    return $html;
}



add_shortcode("show-generate-services-test","show_services_widget_test");
function show_services_widget_test(){
    $html ='';
    $html .='<div class="row service_row">';
    $args = array(
                'post_type' => 'service-panel',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
    $the_query = new WP_Query( $args );
     
    // The Loop
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

            $post_id = get_the_ID();

            $title = get_the_title();
            if($title=="Bespoke Solutions"){

            }
            else{
                $featured_img_url = get_the_post_thumbnail_url($post_id,'full');

                $html .='<div class="col-lg-4 col-md-4 col-sm-6 mb-4 pb-2">
                            <div class="single_service_box">
                                <img src="'.$featured_img_url.'" alt="" class="service_img">
                                <h3 class="service_title">'.get_the_title().'</h3>
                                <p>'.get_the_content().'</p>
                                <a href="'.get_post_meta($post_id,"service_link",true).'" class="read_more_service">READ MORE</a>
                            </div>
                         </div>';
            }
        }
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
        
        
    $html .='</div>';
    return $html;
}


add_shortcode("show-generate-testimonials","show_testimonials_widget");
function show_testimonials_widget(){
    $html ='';
    $html .='<div class="testi_slider_container">
                <div class="testimonial_slider">';
            $args = array(
                'post_type' => 'testimonials-client',
                'posts_per_page' => -1,
                'post_status' => 'publish'
            );
            //$query = new WP_Query( $args );

                        // The Query
            $the_query = new WP_Query( $args );
             
            // The Loop
            if ( $the_query->have_posts() ) {
                while ( $the_query->have_posts() ) {
                    $the_query->the_post();

                    $post_id = get_the_ID();
                    $featured_img_url = get_the_post_thumbnail_url($post_id,'full');


                    $html .='<div class="single_testi">
                                <div class="authore_img">
                                    <img src="'.$featured_img_url.'" alt="">
                                </div>
                                <div class="testi-content">
                                    <img src="'.site_url().'/wp-content/uploads/2021/03/quote-left-solid.png" alt="" class="quote_img">
                                    <p>'.get_the_content().'</p>
                                    <span class="authorname">'.get_the_title().'</span>
                                </div>
                            </div>';
                }
            } else {
                // no posts found
            }
            /* Restore original Post Data */
            wp_reset_postdata();


            
            /*$html .='<div class="single_testi">
                        <div class="authore_img">
                            <img src="https://www.optymumss.com/wp-content/uploads/2021/03/1avator.png" alt="">
                        </div>
                        <div class="testi-content">
                            <img src="https://www.optymumss.com/wp-content/uploads/2021/03/quote-left-solid.png" alt="" class="quote_img">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <span class="authorname">JOHN DOE, USA</span>
                        </div>
                    </div>
                    <div class="single_testi">
                        <div class="authore_img">
                            <img src="https://www.optymumss.com/wp-content/uploads/2021/03/1avator.png" alt="">
                        </div>
                        <div class="testi-content">
                            <img src="https://www.optymumss.com/wp-content/uploads/2021/03/quote-left-solid.png" alt="" class="quote_img">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <span class="authorname">JOHN DOE, USA</span>
                        </div>
                    </div>';*/
    $html .='</div>
            </div>';
    return $html;
}