// --- Theme Toggle Logic ---
const themeToggles = document.querySelectorAll('.theme-toggle');
        
themeToggles.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', function() {
        // Tailwind handles the icon switching automatically via dark:hidden classes
        document.documentElement.classList.toggle('dark');
    });
});

// --- Mobile Menu Logic ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuBtn.querySelector('i');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Toggle mobile menu visibility and icon
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
            
        if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
});

// Close mobile menu automatically when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

// --- Certificate Modal Logic (Versi Baru) ---
const certModal = document.getElementById('cert-modal');
const modalImg = document.getElementById('modal-img');
const certImages = document.querySelectorAll('.cert-img');

// Pastikan elemen ada sebelum menjalankan fungsi
if (certModal && modalImg && certImages.length > 0) {
    certImages.forEach(img => {
        img.addEventListener('click', function() {
            modalImg.src = this.src; 
            certModal.classList.replace('hidden', 'flex');
            // Efek animasi pop-up membesar halus
            setTimeout(() => modalImg.classList.replace('scale-95', 'scale-100'), 10);
        });
    });

    function closeCertModal() {
        modalImg.classList.replace('scale-100', 'scale-95');
        setTimeout(() => certModal.classList.replace('flex', 'hidden'), 200); 
    }

    // Karena tombol X dihapus, klik di area mana saja (background blur / gambar) akan menutup modal
    certModal.addEventListener('click', closeCertModal);
}

// --- Scroll Animation Logic ---
// Membuat pengamat (observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Animasi jalan saat 15% elemen sudah masuk layar
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Menambahkan (fade in)
            // Tambahkan kelas scroll-show untuk memunculkan elemen
            entry.target.classList.add('scroll-show');
        } else {
            // Menambahkan (fade out)
            entry.target.classList.remove('scroll-show');
        }
    });
}, observerOptions);

// Cari semua elemen dengan kelas scroll-hidden, lalu amati!
const hiddenElements = document.querySelectorAll('.scroll-hidden');
hiddenElements.forEach((el) => observer.observe(el));