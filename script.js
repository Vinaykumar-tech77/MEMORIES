document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.style.display = 'none';
        }
    });
});
