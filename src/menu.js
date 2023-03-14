export function menu() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu')
    content.appendChild(menu);
}