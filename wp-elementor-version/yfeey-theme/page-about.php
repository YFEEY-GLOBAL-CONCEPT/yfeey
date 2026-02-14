<?php
/**
 * Template Name: About Page
 *
 * Custom page template for the About page.
 * Falls back to static HTML if no Elementor content exists.
 */
get_header();
?>

<main style="flex-grow:1;">
<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        $content = get_the_content();
        if ( ! empty( trim( $content ) ) ) :
            the_content();
        else :
            get_template_part( 'template-parts/section', 'about-hero' );
            get_template_part( 'template-parts/section', 'about-narrative' );
            get_template_part( 'template-parts/section', 'about-values' );
            get_template_part( 'template-parts/section', 'about-methodology' );
            get_template_part( 'template-parts/section', 'about-trust' );
            get_template_part( 'template-parts/section', 'about-cta' );
        endif;
    endwhile;
endif;
?>
</main>

<?php get_footer(); ?>
