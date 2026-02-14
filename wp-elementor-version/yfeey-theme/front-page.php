<?php
/**
 * Template Name: Front Page
 *
 * The template for the static homepage.
 * When Elementor is used, content is edited visually.
 * The fallback HTML below renders the landing page sections
 * if the page has no Elementor content yet.
 */
get_header();
?>

<main style="flex-grow:1;">
<?php
// If Elementor has content, render it
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        $content = get_the_content();
        if ( ! empty( trim( $content ) ) ) :
            the_content();
        else :
            // Fallback: render all landing page sections as static HTML
            get_template_part( 'template-parts/section', 'hero' );
            get_template_part( 'template-parts/section', 'trusted-by' );
            get_template_part( 'template-parts/section', 'expertise' );
            get_template_part( 'template-parts/section', 'services' );
            get_template_part( 'template-parts/section', 'works' );
            get_template_part( 'template-parts/section', 'process' );
            get_template_part( 'template-parts/section', 'testimonials' );
            get_template_part( 'template-parts/section', 'cta' );
        endif;
    endwhile;
endif;
?>
</main>

<?php get_footer(); ?>
