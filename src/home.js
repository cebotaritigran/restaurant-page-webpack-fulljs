export function home() {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('home')
    content.appendChild(home);
}