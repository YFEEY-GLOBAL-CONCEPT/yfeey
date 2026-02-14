<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Fixed Glassmorphism Navigation -->
<header class="glass-nav" style="position:fixed; top:0; left:0; right:0; z-index:50; height:80px; display:flex; align-items:center; transition:all 0.3s ease;">
    <div class="container" style="display:flex; align-items:center; justify-content:space-between; max-width:1280px;">

        <!-- Logo -->
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
            <div style="color:#fff; display:flex; transition:transform 0.3s ease;">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#8062c0" stroke="#8062c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
            </div>
            <span style="font-family:'Poppins',sans-serif; font-size:1.125rem; font-weight:700; color:#fff;">Yfeey</span>
        </a>

        <!-- Desktop Navigation -->
        <nav style="display:none;" class="desktop-nav">
            <div style="display:flex; align-items:center; gap:2.5rem;">
                <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" style="font-size:0.875rem; font-weight:600; color:#9ca3af; font-family:'Poppins',sans-serif; transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9ca3af'">About</a>

                <!-- Services Dropdown -->
                <div class="services-dropdown" style="position:relative;">
                    <button style="font-size:0.875rem; font-weight:600; color:#9ca3af; font-family:'Poppins',sans-serif; background:none; border:none; cursor:pointer; display:flex; align-items:center; gap:4px; transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9ca3af'">
                        Services
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.7;"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div class="dropdown-content">
                        <a href="#services" class="dark-link-hover">AI & Intelligent Automation</a>
                        <a href="#services" class="dark-link-hover">Custom Software Development</a>
                        <a href="#services" class="dark-link-hover">Content & Growth Automation</a>
                        <a href="#services" class="dark-link-hover">Tech Team Augmentation</a>
                        <a href="#services" class="dark-link-hover">Branding & Visual Systems</a>
                        <a href="#services" class="dark-link-hover">Training & Enablement</a>
                    </div>
                </div>

                <a href="#work" style="font-size:0.875rem; font-weight:600; color:#9ca3af; font-family:'Poppins',sans-serif; transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9ca3af'">Works</a>
                <a href="#" style="font-size:0.875rem; font-weight:600; color:#9ca3af; font-family:'Poppins',sans-serif; transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9ca3af'">Blogs</a>
            </div>
        </nav>

        <!-- CTA + Mobile Toggle -->
        <div style="display:flex; align-items:center; gap:1rem;">
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-nav">Contact Us</a>
            <button class="mobile-menu-toggle" style="display:none; background:none; border:none; color:#fff; cursor:pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
        </div>
    </div>
</header>

<!-- Mobile Menu Overlay -->
<div class="mobile-menu">
    <button class="mobile-menu-close">&times;</button>
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
    <a href="<?php echo esc_url( home_url( '/about' ) ); ?>">About</a>
    <a href="#services">Services</a>
    <a href="#work">Works</a>
    <a href="#">Blogs</a>
    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-primary" style="text-align:center; margin-top:1rem;">Contact Us</a>
</div>

<style>
    /* Show desktop nav on md+ */
    @media (min-width: 768px) {
        .desktop-nav { display: block !important; }
        .mobile-menu-toggle { display: none !important; }
    }
    @media (max-width: 767px) {
        .mobile-menu-toggle { display: block !important; }
        .desktop-nav { display: none !important; }
    }
</style>

<!-- Spacer for fixed nav -->
<div style="height:80px;"></div>
