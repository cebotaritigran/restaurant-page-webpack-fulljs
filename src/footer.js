export function footer() {
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML ='<a href="https://github.com/cebotaritigran" target="_blank">Cebotari Tigran</a>'
    content.appendChild(footer);
}