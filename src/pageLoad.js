import { header } from "./header";
import { footer } from "./footer";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
export function pageLoad() {

    header();
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
    footer();
}