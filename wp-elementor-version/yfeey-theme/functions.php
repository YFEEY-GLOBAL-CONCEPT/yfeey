<?php
/**
 * Yfeey Theme Functions
 *
 * @package Yfeey
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'YFEEY_VERSION', '1.0.0' );
define( 'YFEEY_DIR', get_template_directory() );
define( 'YFEEY_URI', get_template_directory_uri() );

/* --------------------------------------------------------------------------
 * Theme Setup
 * ----------------------------------------------------------------------- */
function yfeey_setup() {
    // Add title tag support
    add_theme_support( 'title-tag' );

    // Post thumbnails
    add_theme_support( 'post-thumbnails' );

    // HTML5 markup
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 40,
        'width'       => 40,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Wide alignment for Gutenberg
    add_theme_support( 'align-wide' );

    // Elementor support
    add_theme_support( 'elementor' );

    // Register navigation menus
    register_nav_menus( array(
        'primary'          => __( 'Primary Navigation', 'yfeey' ),
        'footer-company'   => __( 'Footer — Company', 'yfeey' ),
        'footer-services'  => __( 'Footer — Services', 'yfeey' ),
        'footer-resources' => __( 'Footer — Resources', 'yfeey' ),
    ) );
}
add_action( 'after_setup_theme', 'yfeey_setup' );

/* --------------------------------------------------------------------------
 * Enqueue Styles & Scripts
 * ----------------------------------------------------------------------- */
function yfeey_enqueue_assets() {
    // Google Fonts — Poppins + Literata
    wp_enqueue_style(
        'yfeey-google-fonts',
        'https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Poppins:wght@300;400;500;600;700;800&display=swap',
        array(),
        null
    );

    // Lucide Icons CDN
    wp_enqueue_script(
        'lucide-icons',
        'https://unpkg.com/lucide@latest',
        array(),
        null,
        true
    );

    // Main theme stylesheet
    wp_enqueue_style(
        'yfeey-style',
        get_stylesheet_uri(),
        array( 'yfeey-google-fonts' ),
        YFEEY_VERSION
    );

    // Elementor custom overrides
    wp_enqueue_style(
        'yfeey-elementor-custom',
        YFEEY_URI . '/assets/css/elementor-custom.css',
        array( 'yfeey-style' ),
        YFEEY_VERSION
    );

    // Theme JavaScript
    wp_enqueue_script(
        'yfeey-scripts',
        YFEEY_URI . '/assets/js/main.js',
        array(),
        YFEEY_VERSION,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'yfeey_enqueue_assets' );

/* --------------------------------------------------------------------------
 * Widget Areas
 * ----------------------------------------------------------------------- */
function yfeey_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Footer Widget Area', 'yfeey' ),
        'id'            => 'footer-widgets',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-heading">',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'yfeey_widgets_init' );

/* --------------------------------------------------------------------------
 * Elementor Full-Width Page Template Support
 * ----------------------------------------------------------------------- */
function yfeey_elementor_full_width( $page_templates ) {
    $page_templates['elementor_header_footer'] = __( 'Elementor Full Width', 'yfeey' );
    return $page_templates;
}
add_filter( 'theme_page_templates', 'yfeey_elementor_full_width' );

/* --------------------------------------------------------------------------
 * Add body classes
 * ----------------------------------------------------------------------- */
function yfeey_body_classes( $classes ) {
    if ( is_front_page() ) {
        $classes[] = 'yfeey-home';
    }
    if ( is_page( 'about' ) ) {
        $classes[] = 'yfeey-about';
    }
    return $classes;
}
add_filter( 'body_class', 'yfeey_body_classes' );

/* --------------------------------------------------------------------------
 * Custom Excerpt Length
 * ----------------------------------------------------------------------- */
function yfeey_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'yfeey_excerpt_length' );

/* --------------------------------------------------------------------------
 * Initialize Lucide Icons on page load
 * ----------------------------------------------------------------------- */
function yfeey_footer_scripts() {
    ?>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // Navbar scroll effect
            const nav = document.querySelector('.glass-nav');
            if (nav) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 20) {
                        nav.classList.add('scrolled');
                    } else {
                        nav.classList.remove('scrolled');
                    }
                });
            }

            // Mobile menu toggle
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuClose = document.querySelector('.mobile-menu-close');

            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', function() {
                    mobileMenu.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            }

            if (menuClose && mobileMenu) {
                menuClose.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            // Intersection Observer for scroll animations
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            if (animatedElements.length > 0) {
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-fade-in-up');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                animatedElements.forEach(function(el) {
                    observer.observe(el);
                });
            }
        });
    </script>
    <?php
}
add_action( 'wp_footer', 'yfeey_footer_scripts' );
