// Alterna entre modo claro e escuro
const body = document.body;
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Efeito parallax para o cabeçalho
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Anima elementos quando entrarem na viewport
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    { threshold: 0.1 }
);

// Aplica animação às seções
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Aplica animação aos projetos
document.querySelectorAll('.projeto').forEach((projeto, index) => {
    projeto.style.opacity = '0';
    projeto.style.transform = 'translateY(20px)';
    projeto.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
    observer.observe(projeto);
});