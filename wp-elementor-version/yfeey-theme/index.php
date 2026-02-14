<?php get_header(); ?>

<main style="flex-grow:1;">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            the_content();
        endwhile;
    else :
        echo '<div class="container" style="padding:4rem 1.5rem; text-align:center;">';
        echo '<h2>Nothing found</h2>';
        echo '<p class="text-muted">No content has been published yet.</p>';
        echo '</div>';
    endif;
    ?>
</main>

<?php get_footer(); ?>
