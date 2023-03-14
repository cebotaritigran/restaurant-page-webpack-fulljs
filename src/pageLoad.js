import { header } from "./header";
import { footer } from "./footer";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
export function pageLoad() {
    const content = document.querySelector('#content');
    header();
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);
    const homeTab = document.querySelector('.home-tab')
    homeTab.addEventListener('click', () => {
        home();
    })
    const menuTab = document.querySelector('.menu-tab')
    menuTab.addEventListener('click', () => {
        menu();
    })

    const contactTab = document.querySelector('.contact-tab')
    contactTab.addEventListener('click', () => {
        contact();
    })
    home();
    footer();
}