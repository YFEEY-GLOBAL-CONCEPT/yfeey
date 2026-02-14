/**
 * Yfeey Theme - Main JavaScript
 *
 * Handles:
 * - Lucide icon initialization
 * - Navbar scroll effect
 * - Mobile menu toggle
 * - Scroll-triggered animations via IntersectionObserver
 *
 * @package Yfeey
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    // 2. Navbar Scroll Effect
    var nav = document.querySelector(".glass-nav");
    if (nav) {
      function handleScroll() {
        if (window.scrollY > 20) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Run on load
    }

    // 3. Mobile Menu
    var menuToggle = document.querySelector(".mobile-menu-toggle");
    var mobileMenu = document.querySelector(".mobile-menu");
    var menuClose = document.querySelector(".mobile-menu-close");

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    }

    if (menuClose && mobileMenu) {
      menuClose.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });

      // Close on link click
      var menuLinks = mobileMenu.querySelectorAll("a");
      menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          mobileMenu.classList.remove("active");
          document.body.style.overflow = "";
        });
      });
    }

    // 4. Scroll Animations (IntersectionObserver — replaces GSAP)
    var animatedElements = document.querySelectorAll(".animate-on-scroll");
    if (animatedElements.length > 0 && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      animatedElements.forEach(function (el) {
        el.style.opacity = "0";
        observer.observe(el);
      });
    }

    // 5. Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          var headerOffset = 80;
          var elementPosition = target.getBoundingClientRect().top;
          var offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  });
})();
