document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');


    const toggleMenu = () => {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    };

    menuToggle.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

 
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle && event.target !== closeMenu) {
            menu.style.display = 'none';
        }
    });
});
