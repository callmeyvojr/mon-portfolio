// ===== script.js — Menu burger (mobile) =====
// Ce script gère l'ouverture/fermeture du menu de navigation sur mobile.
// Il ne fait rien sur PC/tablette large : le bouton burger y est caché
// par le CSS, donc ce code n'a aucun effet visible à ces tailles.

// On récupère les éléments dont on a besoin dans la page (voir index.html)
const navToggle = document.getElementById('navToggle');   // le bouton ☰ / ✕
const navToggleIcon = document.getElementById('navToggleIcon'); // le symbole à l'intérieur du bouton
const navLinks = document.getElementById('navLinks');     // le conteneur des liens du menu

// Petite fonction qui ouvre ou ferme le menu selon son état actuel
function toggleMenu() {
    // .toggle() ajoute la classe si elle n'existe pas, la retire si elle existe déjà,
    // et renvoie true/false selon le nouvel état (utile pour la suite)
    const isOpen = navLinks.classList.toggle('is-open');

    // On met à jour l'icône du bouton : ✕ quand le menu est ouvert, ☰ sinon
    navToggleIcon.textContent = isOpen ? '✕' : '☰';

    // aria-expanded informe les lecteurs d'écran (accessibilité) que le menu est ouvert ou fermé
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Petite fonction qui force la fermeture du menu (utilisée quand on clique sur un lien)
function closeMenu() {
    navLinks.classList.remove('is-open');
    navToggleIcon.textContent = '☰';
    navToggle.setAttribute('aria-expanded', 'false');
}

// On vérifie que les éléments existent bien avant d'ajouter les écouteurs
// (par sécurité, si jamais le HTML change plus tard)
if (navToggle && navLinks && navToggleIcon) {

    // Clic sur le bouton burger : on ouvre/ferme le menu
    navToggle.addEventListener('click', toggleMenu);

    // Clic sur un lien du menu : le menu se referme automatiquement
    // (utile en mobile, pour ne pas garder le menu ouvert après avoir navigué)
    const links = navLinks.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
}
