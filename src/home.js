export function home() {
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const home = document.createElement('div');
    home.classList.add('home')
    main.replaceChildren();
    main.appendChild(home)
    content.appendChild(main);
}