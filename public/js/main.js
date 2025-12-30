// TGA Capital Management - CMS Package JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Toggle icon
      const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
      const closeIcon = mobileMenuBtn.querySelector('.close-icon');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Category filter functionality (for blog/downloads pages)
  const categoryFilters = document.querySelectorAll('.category-filter');
  const filterableCards = document.querySelectorAll('[data-category]');
  
  categoryFilters.forEach(function(filter) {
    filter.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active state
      categoryFilters.forEach(function(f) {
        f.classList.remove('active');
      });
      this.classList.add('active');
      
      // Filter cards
      if (category === 'all') {
        filterableCards.forEach(function(card) {
          card.style.display = '';
        });
      } else {
        filterableCards.forEach(function(card) {
          if (card.dataset.category === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });
  
  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            field.classList.add('error');
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // Intersection Observer for animations
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }
});

// Utility function for formatting dates
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

