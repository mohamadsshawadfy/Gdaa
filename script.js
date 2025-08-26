// script.js
// كود الجافاسكريبت للقائمة الجانبية
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

if (menuToggle && mobileMenu && overlay) {
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });
  
  overlay.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
  
  // إغلاق القائمة عند النقر على رابط
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
}

// تغيير لون الهيدر عند التمرير
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
  }
});

// إدارة نافذة الفيديو ملء الشاشة
const videoFullscreen = document.getElementById('videoFullscreen');
const fullscreenVideo = document.getElementById('fullscreenVideo');
const closeFullscreen = document.querySelector('.close-fullscreen');
const videoItems = document.querySelectorAll('.video-item');

if (videoFullscreen && fullscreenVideo && closeFullscreen && videoItems.length > 0) {
  // فتح نافذة الفيديو عند النقر على عنصر الفيديو
  videoItems.forEach(item => {
    item.addEventListener('click', function() {
      const videoUrl = this.getAttribute('data-video') + '?autoplay=1';
      fullscreenVideo.src = videoUrl;
      videoFullscreen.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // إغلاق نافذة الفيديو
  closeFullscreen.addEventListener('click', function() {
    videoFullscreen.style.display = 'none';
    fullscreenVideo.src = '';
    document.body.style.overflow = 'auto';
  });
  
  // إغلاق نافذة الفيديو عند النقر خارج المحتوى
  videoFullscreen.addEventListener('click', function(e) {
    if (e.target === videoFullscreen) {
      videoFullscreen.style.display = 'none';
      fullscreenVideo.src = '';
      document.body.style.overflow = 'auto';
    }
  });
  
  // إغلاق نافذة الفيديو عند الضغط على زر الخلف في المتصفح
  window.addEventListener('popstate', function() {
    if (videoFullscreen.style.display === 'flex') {
      videoFullscreen.style.display = 'none';
      fullscreenVideo.src = '';
      document.body.style.overflow = 'auto';
    }
  });
}