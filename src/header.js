export function header() {
    const content = document.querySelector('#content');
    const headerPage = document.createElement('header');
    const logoDiv = document.createElement('div');
    logoDiv.textContent = 'Alta Ristorante';
    const homePage = document.createElement('div');
    homePage.textContent = 'HOME';
    const menuPage = document.createElement('div');
    menuPage.textContent = 'MENU';
    const contactPage = document.createElement('div');
    contactPage.textContent = 'CONTACT';
    const headerTabs = document.createElement('div');

    // header
    headerPage.classList.add('header');
    logoDiv.classList.add('logo');
    headerTabs.classList.add('header-tabs');

    homePage.classList.add('home-tab');
    menuPage.classList.add('menu-tab');
    contactPage.classList.add('contact-tab');

    headerTabs.append(homePage, menuPage, contactPage);
    headerPage.append(logoDiv, headerTabs);

    content.appendChild(headerPage);
}