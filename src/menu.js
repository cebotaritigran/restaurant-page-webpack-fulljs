export function menu() {
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const menu = document.createElement('div');
    menu.classList.add('menu')
    main.replaceChildren();
    main.appendChild(menu)
    content.appendChild(main);
}