
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

    // Autoridade -> conta cidades automaticamente
    const cityCount = document.querySelectorAll('[data-city]').length;
    document.getElementById('cityCount').textContent = `Mais de ${cityCount} cidades`;

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
