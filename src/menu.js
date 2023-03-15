export function menu() {
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menuItem = document.createElement('div');
    const menuText = document.createElement('div');
    menuText.classList.add('text-one');
    menuText.textContent= 'Pasta Plate'
    menuItem.classList.add('item-one');

    const menuItemTwo = document.createElement('div');
    const menuTextTwo = document.createElement('div');
    menuTextTwo.classList.add('text-two');
    menuTextTwo.textContent= 'Pasta Pesto'
    menuItemTwo.classList.add('item-two');

    const menuItemThree = document.createElement('div');
    const menuTextThree = document.createElement('div');
    menuTextThree.classList.add('text-three');
    menuTextThree.textContent = 'Some More Pasta'
    menuItemThree.classList.add('item-three');

    const menuItemFour = document.createElement('div');
    const menuTextFour = document.createElement('div');
    menuTextFour.classList.add('text-four');
    menuTextFour.textContent = 'Salad'
    menuItemFour.classList.add('item-four');

    const menuItemFive = document.createElement('div');
    const menuTextFive = document.createElement('div');
    menuTextFive.classList.add('text-five');
    menuTextFive.textContent='Dolce'
    menuItemFive.classList.add('item-five');

    const menuItemSix = document.createElement('div');
    const menuTextSix = document.createElement('div');
    menuTextSix.textContent= 'A Soup?'
    menuTextSix.classList.add('text-six');
    menuItemSix.classList.add('item-six');
    
    main.replaceChildren();
    menuItem.appendChild(menuText);
    menuItemTwo.appendChild(menuTextTwo);
    menuItemThree.appendChild(menuTextThree);
    menuItemFour.appendChild(menuTextFour);
    menuItemFive.appendChild(menuTextFive);
    menuItemSix.appendChild(menuTextSix);
    menu.append(menuItem,menuItemTwo,menuItemThree,menuItemFour,menuItemFive,menuItemSix);
    main.appendChild(menu);
    content.appendChild(main);
}