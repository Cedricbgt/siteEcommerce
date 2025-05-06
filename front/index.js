// Gérer les clics sur la navigation
document.querySelectorAll('.li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.li').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        
        // Redirection spéciale pour la section "games"
        if (section === 'games') {
            window.location.href = './games.html';
            return;
        }
        
        loadSection(section);
    });
});

// Fonction pour charger une section HTML/CSS/JS dynamiquement
async function loadSection(section) {
    const content = document.getElementById('content');
    const loader = document.getElementById('loader');

    // Afficher le loader et masquer le contenu
    loader.style.display = 'block';
    content.style.display = 'none';

    // Charger le fichier HTML de la section
    const response = await fetch(`./sections/${section}/${section}.html`);
    const html = await response.text();
    content.innerHTML = html;

    // Charger le CSS de la section
    const existingStyle = document.querySelector(`#style-${section}`);
    if (!existingStyle) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `./sections/${section}/${section}.css`;
        link.id = `style-${section}`;
        document.head.appendChild(link);
    }

    // Charger le JS de la section
    const script = document.createElement('script');
    script.src = `./sections/${section}/${section}.js`;
    script.type = 'module';
    document.body.appendChild(script);

    // Masquer le loader et afficher le contenu
    loader.style.display = 'none';
    content.style.display = 'block';
}

// Charger la section 'home' par défaut
document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');
});