// Arakozia Main Script

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle current item
            item.classList.toggle('active');

            // Optional: Close others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideIntervalTime = 5000; // 5 seconds - matches animation duration
    let slideInterval;
    let isTransitioning = false;

    function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        // Handle wrap-around
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        // Update slides with smooth transition
        slides.forEach((slide, i) => {
            if (i === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update indicators with animation
        indicators.forEach((indicator, i) => {
            if (i === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Allow next transition after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event Listeners
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Auto Play with smooth continuous loop
    function startInterval() {
        slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Pause on hover for better UX
    const sliderCard = document.querySelector('.hero-slider-card');
    if (sliderCard) {
        sliderCard.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        sliderCard.addEventListener('mouseleave', () => {
            startInterval();
        });
    }

    // Start slider if slides exist
    if (slides.length > 0) {
        startInterval();
    }

    // Form submission handler (Placeholder)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Mobile flip card tap handler
    if (window.innerWidth <= 768) {
        const flipCards = document.querySelectorAll('.flip-card');
        flipCards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }
});

// ISO Certificate Modal Functions & Records
const isoCertData = {
    iso9001: {
        standard: 'ISO 9001:2015',
        system: 'Quality Management System',
        badge: 'QMS CERTIFIED',
        certNo: 'LMX-GAC-01-10043',
        certImage: 'assets/images/iso-9001-cert.jpg',
        entity: 'ARAKOZIA FOODSTUFF TRADING LLC',
        address: 'Office No.904, Executive Bay - B, Business Bay, Dubai, U.A.E',
        scope: '“Trading and Sale of Food Products, Agricultural Commodities, Fresh, Chilled and Frozen Meat, Fish, Seafood and Flavored Fragrances.”',
        initialReg: '02-10-2026',
        validFrom: '02-10-2026',
        validUntil: '01-10-2027',
        recertDue: '01-10-2029',
        body: 'Lead Max Quality & Standardization L.L.C',
        bodyAddress: 'Office M-11, Dar Al Safiya Building, P.O Box 97199, Abu Hail, Dubai, UAE (UAE | Bahrain | India)',
        signatory: 'Aveesh Sivaprasad (General Manager)',
        accreditation: 'GCC Accreditation Center (GAC) - ISO/IEC 17021-1:2015 MSC 0013 & IAF Multilateral Recognition Arrangement Member',
        verifyUrl: 'www.leadmaxcert.com'
    },
    iso14001: {
        standard: 'ISO 14001:2015',
        system: 'Environmental Management System',
        badge: 'EMS CERTIFIED',
        certNo: 'LMX-GAC-01-20030',
        certImage: 'assets/images/iso-14001-cert.jpg',
        entity: 'ARAKOZIA FOODSTUFF TRADING LLC',
        address: 'Office No.904, Executive Bay - B, Business Bay, Dubai, U.A.E',
        scope: '“Trading and Sale of Food Products, Agricultural Commodities, Fresh, Chilled and Frozen Meat, Fish, Seafood and Flavored Fragrances.”',
        initialReg: '02-10-2026',
        validFrom: '02-10-2026',
        validUntil: '01-10-2027',
        recertDue: '01-10-2029',
        body: 'Lead Max Quality & Standardization L.L.C',
        bodyAddress: 'Office M-11, Dar Al Safiya Building, P.O Box 97199, Abu Hail, Dubai, UAE (UAE | Bahrain | India)',
        signatory: 'Aveesh Sivaprasad (General Manager)',
        accreditation: 'GCC Accreditation Center (GAC) - ISO/IEC 17021-1:2015 MSC 0013 & IAF Multilateral Recognition Arrangement Member',
        verifyUrl: 'www.leadmaxcert.com'
    },
    iso45001: {
        standard: 'ISO 45001:2018',
        system: 'Occupational Health and Safety Management System',
        badge: 'OHSMS CERTIFIED',
        certNo: 'LMX-GAC-01-30029',
        certImage: 'assets/images/iso-45001-cert.jpg',
        entity: 'ARAKOZIA FOODSTUFF TRADING LLC',
        address: 'Office No.904, Executive Bay - B, Business Bay, Dubai, U.A.E',
        scope: '“Trading and Sale of Food Products, Agricultural Commodities, Fresh, Chilled and Frozen Meat, Fish, Seafood and Flavored Fragrances.”',
        initialReg: '02-10-2026',
        validFrom: '02-10-2026',
        validUntil: '01-10-2027',
        recertDue: '01-10-2029',
        body: 'Lead Max Quality & Standardization L.L.C',
        bodyAddress: 'Office M-11, Dar Al Safiya Building, P.O Box 97199, Abu Hail, Dubai, UAE (UAE | Bahrain | India)',
        signatory: 'Aveesh Sivaprasad (General Manager)',
        accreditation: 'GCC Accreditation Center (GAC) - ISO/IEC 17021-1:2015 MSC 0013 & IAF Multilateral Recognition Arrangement Member',
        verifyUrl: 'www.leadmaxcert.com'
    }
};

function openCertModal(certKey) {
    const data = isoCertData[certKey];
    if (!data) return;

    const overlay = document.getElementById('certModalOverlay');
    const content = document.getElementById('certModalContent');
    if (!overlay || !content) return;

    content.innerHTML = `
        <div class="modal-cert-header">
            <span class="modal-cert-tag">${data.badge}</span>
            <h2>${data.standard}</h2>
            <h3>${data.system}</h3>
        </div>
        <div class="modal-cert-body">
            ${data.certImage ? `
            <div class="modal-cert-image-wrap">
                <a href="${data.certImage}" target="_blank" title="Click to view full size certificate document">
                    <img src="${data.certImage}" alt="${data.standard} Certificate Document" class="modal-cert-img">
                </a>
                <p class="modal-cert-img-caption"><i class="fa-solid fa-expand"></i> Click image to open high-resolution certificate document</p>
            </div>
            ` : ''}

            <div class="modal-cert-section">
                <h4><i class="fa-solid fa-building"></i> Certified Organization</h4>
                <p class="modal-entity-name"><strong>${data.entity}</strong></p>
                <p class="modal-address">${data.address}</p>
            </div>

            <div class="modal-cert-section">
                <h4><i class="fa-solid fa-file-signature"></i> Scope of Certification</h4>
                <p class="modal-scope-box">${data.scope}</p>
            </div>

            <div class="modal-cert-section">
                <h4><i class="fa-solid fa-calendar-days"></i> Certification Validity & Metadata</h4>
                <div class="modal-grid-2">
                    <div><strong>Certificate No:</strong> <span class="cert-no-highlight">${data.certNo}</span></div>
                    <div><strong>Initial Registration:</strong> ${data.initialReg}</div>
                    <div><strong>Valid From:</strong> ${data.validFrom}</div>
                    <div><strong>Valid Until:</strong> ${data.validUntil}</div>
                    <div><strong>Recertification Due:</strong> ${data.recertDue}</div>
                </div>
            </div>

            <div class="modal-cert-section">
                <h4><i class="fa-solid fa-award"></i> Certification & Accreditation Body</h4>
                <p><strong>Issued By:</strong> ${data.body}</p>
                <p><strong>General Manager / Signatory:</strong> ${data.signatory}</p>
                <p><strong>Issuer Address:</strong> ${data.bodyAddress}</p>
                <p><strong>Accreditation Center:</strong> ${data.accreditation}</p>
                <p><strong>Official Verification:</strong> <a href="http://${data.verifyUrl}" target="_blank" rel="noopener noreferrer">${data.verifyUrl}</a></p>
            </div>
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    const overlay = document.getElementById('certModalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('click', (e) => {
    const overlay = document.getElementById('certModalOverlay');
    if (overlay && e.target === overlay) {
        closeCertModal();
    }
});
