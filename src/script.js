document.addEventListener('DOMContentLoaded', () => {
    // Inject Custom Styles (moved from HTML)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            opacity: 0; 
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        .nav-link { position: relative; }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: linear-gradient(90deg, #6700FF, #D5DBE6);
            transition: width 0.3s ease-out;
            border-radius: 99px;
        }
        .nav-link:hover::after { width: 100%; }
    `;
    document.head.appendChild(style);

    const scrollContainer = document.getElementById('events-scroll');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    if (scrollContainer && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }

    // Team Toggle Logic
    const btnOg = document.getElementById('btn-og');
    const btnCore = document.getElementById('btn-core');
    const teamOg = document.getElementById('team-og');
    const teamCore = document.getElementById('team-core');

    if (btnOg && btnCore && teamOg && teamCore) {
        const activeClasses = ['border-white/20', 'bg-white/5', 'text-white', 'shadow-[inset_0_-4px_10px_rgba(112,0,255,0.3)]'];
        const inactiveClasses = ['border-white/5', 'bg-transparent', 'text-[#8D8D8D]', 'hover:text-white', 'hover:bg-white/5'];

        function setBtnState(btn, isActive) {
            if (isActive) {
                btn.classList.remove(...inactiveClasses);
                btn.classList.add(...activeClasses);
            } else {
                btn.classList.remove(...activeClasses);
                btn.classList.add(...inactiveClasses);
            }
        }

        btnOg.addEventListener('click', () => {
            setBtnState(btnOg, true);
            setBtnState(btnCore, false);
            teamOg.classList.remove('hidden');
            teamCore.classList.add('hidden');
        });

        btnCore.addEventListener('click', () => {
            setBtnState(btnCore, true);
            setBtnState(btnOg, false);
            teamCore.classList.remove('hidden');
            teamOg.classList.add('hidden');
        });
    }


    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(el => observer.observe(el));

});