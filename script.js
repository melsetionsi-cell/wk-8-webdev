// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupMobileMenu();
    setupLanguageCards();
    setupModal();
    setupFAQ();
    setupContactForm();
    animateElements();
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Language Cards Interaction
function setupLanguageCards() {
    const languageCards = document.querySelectorAll('.language-card');
    
    languageCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if the click was on the button itself
            if (e.target.classList.contains('learn-btn')) return;
            
            const language = this.getAttribute('data-language');
            showLanguageModal(language);
        });
        
        const learnBtn = card.querySelector('.learn-btn');
        if (learnBtn) {
            learnBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const language = card.getAttribute('data-language');
                showLanguageModal(language);
            });
        }
    });
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('language-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Show language modal with content
function showLanguageModal(language) {
    const modal = document.getElementById('language-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    if (!modal || !modalTitle || !modalContent) return;
    
    // Set modal title
    modalTitle.textContent = `${capitalizeFirstLetter(language)} Basics`;
    
    // Set modal content based on language
    modalContent.innerHTML = getLanguageContent(language);
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Get language content for modal
function getLanguageContent(language) {
    const content = {
        spanish: `
            <h3>Basic Spanish Phrases</h3>
            <ul>
                <li><strong>Hola</strong> - Hello</li>
                <li><strong>Adiós</strong> - Goodbye</li>
                <li><strong>Por favor</strong> - Please</li>
                <li><strong>Gracias</strong> - Thank you</li>
                <li><strong>Sí</strong> - Yes</li>
                <li><strong>No</strong> - No</li>
            </ul>
            <h3>Pronunciation Tips</h3>
            <p>Spanish vowels are always pronounced the same way:
            <br>A = "ah", E = "eh", I = "ee", O = "oh", U = "oo"</p>
            <p>The letter "ñ" is pronounced like "ny" in "canyon"</p>
        `,
        french: `
            <h3>Basic French Phrases</h3>
            <ul>
                <li><strong>Bonjour</strong> - Hello</li>
                <li><strong>Au revoir</strong> - Goodbye</li>
                <li><strong>S'il vous plaît</strong> - Please</li>
                <li><strong>Merci</strong> - Thank you</li>
                <li><strong>Oui</strong> - Yes</li>
                <li><strong>Non</strong> - No</li>
            </ul>
            <h3>Pronunciation Tips</h3>
            <p>French has nasal vowels that don't exist in English</p>
            <p>Final consonants are often silent (e.g., "paris" is pronounced "pah-ree")</p>
        `,
        german: `
            <h3>Basic German Phrases</h3>
            <ul>
                <li><strong>Hallo</strong> - Hello</li>
                <li><strong>Auf Wiedersehen</strong> - Goodbye</li>
                <li><strong>Bitte</strong> - Please</li>
                <li><strong>Danke</strong> - Thank you</li>
                <li><strong>Ja</strong> - Yes</li>
                <li><strong>Nein</strong> - No</li>
            </ul>
            <h3>Pronunciation Tips</h3>
            <p>German "ch" has two sounds: after a, o, u it's guttural (like in "Bach"), after e, i it's palatal (like "huge")</p>
            <p>V is pronounced like F, W is pronounced like V</p>
        `,
        italian: `
            <h3>Basic Italian Phrases</h3>
            <ul>
                <li><strong>Ciao</strong> - Hello/Goodbye</li>
                <li><strong>Arrivederci</strong> - Goodbye</li>
                <li><strong>Per favore</strong> - Please</li>
                <li><strong>Grazie</strong> - Thank you</li>
                <li><strong>Sì</strong> - Yes</li>
                <li><strong>No</strong> - No</li>
            </ul>
            <h3>Pronunciation Tips</h3>
            <p>Italian is phonetic - every letter is pronounced</p>
            <p>Double consonants are pronounced with more emphasis</p>
            <p>C before e or i is pronounced like "ch" (e.g., "ciao" = "chow")</p>
        `,
        japanese: `
            <h3>Basic Japanese Phrases</h3>
            <ul>
                <li><strong>Konnichiwa</strong> - Hello</li>
                <li><strong>Sayonara</strong> - Goodbye</li>
                <li><strong>Onegaishimasu</strong> - Please</li>
                <li><strong>Arigatō gozaimasu</strong> - Thank you</li>
                <li><strong>Hai</strong> - Yes</li>
                <li><strong>Iie</strong> - No</li>
            </ul>
            <h3>Pronunciation Tips</h3>
            <p>Japanese has five vowel sounds: a, i, u, e, o (always pronounced the same way)</p>
            <p>Vowels can be short or long (long vowels are held for approximately double the duration)</p>
        `,
        chinese: `
            <h3>Basic Chinese Phrases</h3>
            <ul>
                <li><strong>Nǐ hǎo</strong> - Hello</li>
                <li><strong>Zàijiàn</strong> - Goodbye</li>
                <li><strong>Qǐng</strong> - Please</li>
                <li><strong>Xièxie</strong> - Thank you</li>
                <li><strong>Shì</strong> - Yes</li>
                <li><strong>Bù</strong> - No</li>
            </ul>
            <h3>Pronunciation Tips</h3>
            <p>Chinese is a tonal language - the same syllable can have different meanings based on tone</p>
            <p>There are four main tones: flat (ā), rising (á), falling then rising (ǎ), and falling (à)</p>
        `
    };
    
    return content[language] || `<p>Content for ${language} is not available yet.</p>`;
}

// FAQ functionality
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains('show');
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('show');
            });
            
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            
            // Open clicked answer if it was closed
            if (!isOpen) {
                answer.classList.add('show');
                question.classList.add('active');
            }
        });
    });
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Animate elements on scroll
function animateElements() {
    const animatedElements = document.querySelectorAll('.language-card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}