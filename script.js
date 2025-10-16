
    // Menu mobile acessível
    const btnMenu = document.getElementById('btnMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    btnMenu.addEventListener('click', () => {
      const open = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = open ? 'none' : 'flex';
      mobileMenu.setAttribute('aria-hidden', open);
    });

    // Ano no rodapé
    document.getElementById('year').textContent = new Date().getFullYear();

    // Urgência
    const dd = new Date();
    const fmt = dd.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
    const urgency = document.getElementById('urgency');
    if (urgency) urgency.textContent = `Horário extra disponível hoje (${fmt})! Reserve sua passagem agora.`;

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Fecha menu mobile ao navegar
    document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('aria-hidden', true);
    }));

    // --- CAROUSEL CODE ---
    document.addEventListener('DOMContentLoaded', () => {
        const cities = [
          'Canaã dos Carajás', 'Paragominas', 'Redenção', 'Marabá', 'Tucuruí', 'Altamira', 'Dom Eliseu', 'Xinguara', 'Parauapebas', 'Rondon', 'Conceição', 'Salvador', 'Feira de Santana', 'Itabuna', 'Ilhéus', 'Barreiras', 'Alagoinhas', 'Jequié', 'Paulo Afonso', 'Juazeiro'
        ];

        const track = document.querySelector('.carousel-track');
        if (!track) return;

        const cityCountEl = document.getElementById('cityCount');
        if(cityCountEl) {
            cityCountEl.textContent = `Mais de ${cities.length} cidades`;
        }

        cities.forEach(city => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<span>🚌</span> ${city}`;
            track.appendChild(slide);
        });

        const slides = Array.from(track.children);
        if(slides.length === 0) return;

        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        let currentIndex = 0;
        let intervalId;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${100 * currentIndex}%)`;
        };

        const startCarousel = () => {
            intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
            }, 3000);
        };

        const stopCarousel = () => {
            clearInterval(intervalId);
        };

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', stopCarousel);
        carouselContainer.addEventListener('mouseleave', startCarousel);
        
        startCarousel();
    });
