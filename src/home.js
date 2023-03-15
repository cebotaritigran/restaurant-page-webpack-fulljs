export function home() {
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const home = document.createElement('div');
    const headText = document.createElement('h2');
    const bodyText = document.createElement('p');
    const imageDiv = document.createElement('div');


    home.classList.add('home')

    const homeContent = document.createElement('div');

    headText.textContent = 'About Alta';
    bodyText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget neque vitae nisl tempus vehicula non sit amet lorem. Proin libero purus, varius sed posuere nec, egestas sed metus. Aenean sollicitudin nec tellus id tincidunt. Fusce ut feugiat felis. Morbi at bibendum nisi, non ornare libero. Pellentesque congue efficitur diam, ut faucibus eros convallis sed. Suspendisse mollis, risus quis laoreet tempor, nisl elit tristique lacus, vel laoreet mauris urna id erat. Etiam posuere, nunc eu condimentum posuere, lorem orci sollicitudin enim, fringilla sagittis tortor mi a odio. Vivamus at urna at diam dignissim rutrum non vitae velit. Nam mollis magna vel felis posuere finibus. Sed vulputate ligula ac facilisis dignissim.';
   
    imageDiv.classList.add('home-image')

    homeContent.appendChild(headText);
    homeContent.appendChild(bodyText)
    homeContent.classList.add('home-content')


    main.replaceChildren();

    home.appendChild(homeContent);
    main.appendChild(home);
    main.appendChild(imageDiv);
    content.appendChild(main);
}