<!-- Footer -->
<footer class="yfeey-footer">
    <div class="container" style="max-width:1280px;">
        <div class="grid-footer" style="margin-bottom:6rem;">

            <!-- Brand Column -->
            <div style="display:flex; flex-direction:column; gap:2rem;">
                <div style="display:flex; align-items:center; gap:1rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    <span style="font-family:'Poppins',sans-serif; font-size:2.25rem; font-weight:700; color:#fff; letter-spacing:-0.025em;">Yfeey</span>
                </div>
                <p style="color:rgba(255,255,255,0.8); font-size:1.125rem; max-width:280px; font-family:'Literata',Georgia,serif; font-style:italic; line-height:1.625;">
                    Stop Fighting Your Tools. Start Scaling Your Systems.
                </p>
                <div style="display:flex; gap:1.25rem; margin-top:1rem;">
                    <a href="#" class="footer-social-icon" aria-label="Twitter / X">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                    </a>
                    <a href="#" class="footer-social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Links Grid -->
            <div class="grid-footer-links">
                <!-- Company -->
                <div>
                    <h4 class="footer-heading">Company</h4>
                    <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="footer-link">About Us</a>
                    <a href="#process" class="footer-link">Our Process</a>
                    <a href="#" class="footer-link">Career</a>
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="footer-link">Contact</a>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="footer-heading">Services</h4>
                    <a href="#services" class="footer-link">AI & Automation</a>
                    <a href="#services" class="footer-link">Software Dev</a>
                    <a href="#services" class="footer-link">Team Aug</a>
                    <a href="#services" class="footer-link">Training</a>
                </div>

                <!-- Resources -->
                <div>
                    <h4 class="footer-heading">Resources</h4>
                    <a href="#" class="footer-link">Blog</a>
                    <a href="#" class="footer-link">Case Studies</a>
                    <a href="#" class="footer-link">Whitepapers</a>
                    <a href="#" class="footer-link">Newsletter</a>
                </div>

                <!-- Offices -->
                <div>
                    <div style="margin-bottom:2.5rem;">
                        <h4 class="footer-heading">Headquarters</h4>
                        <p style="font-weight:700; font-size:0.875rem; margin-bottom:0.5rem;">Isle of Man</p>
                        <p style="color:rgba(255,255,255,0.6); font-size:10px; line-height:1.625;">Innovation House, Douglas, IM1 2AS</p>
                    </div>
                    <div>
                        <h4 class="footer-heading">Regional Office</h4>
                        <p style="font-weight:700; font-size:0.875rem; margin-bottom:0.5rem;">Nigeria</p>
                        <p style="color:rgba(255,255,255,0.6); font-size:0.75rem; line-height:1.625;">Lagos Island, Lagos State</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <div style="display:flex; align-items:center; gap:3rem;">
                <p>&copy; <?php echo date( 'Y' ); ?> Yfeey Inc.</p>
                <div style="display:none;" class="footer-legal-links">
                    <a href="#" style="transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color=''">Legal</a>
                    <a href="#" style="margin-left:2.5rem; transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color=''">Privacy Policy</a>
                    <a href="#" style="margin-left:2.5rem; transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color=''">Terms</a>
                </div>
            </div>
            <a href="mailto:hello@yfeey.com" style="font-size:0.875rem; text-transform:none; font-family:'Poppins',sans-serif; font-weight:500; letter-spacing:normal; color:rgba(255,255,255,0.8); transition:color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">hello@yfeey.com</a>
        </div>
    </div>
</footer>

<style>
    @media (min-width: 640px) {
        .footer-legal-links { display: flex !important; }
    }
</style>

<?php wp_footer(); ?>
</body>
</html>
