export function pageLoad() {
    const content = document.querySelector('#content')
    const div = document.createElement('div');
    div.textContent = 'hey';
    div.innerHTML = '<p> hey</p>'
    content.appendChild(div);
}