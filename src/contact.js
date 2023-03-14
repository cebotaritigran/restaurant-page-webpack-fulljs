export function contact() {
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const contact = document.createElement('div');
    contact.classList.add('contact')
    main.replaceChildren();
    main.appendChild(contact)
    content.appendChild(main);
}