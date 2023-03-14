export function menu() {
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const menu = document.createElement('div');
    menu.classList.add('menu')
    const menuItem = document.createElement('div');
    menuItem.classList.add('item-one')

    const menuItemTwo = document.createElement('div');
    menuItemTwo.classList.add('item-two')

    const menuItemThree = document.createElement('div');
    menuItemThree.classList.add('item-three')

    const menuItemFour = document.createElement('div');
    menuItemFour.classList.add('item-four')

    const menuItemFive = document.createElement('div');
    menuItemFive.classList.add('item-five')

    const menuItemSix = document.createElement('div');
    menuItemSix.classList.add('item-six')
    
    main.replaceChildren();
    menu.append(menuItem,menuItemTwo,menuItemThree,menuItemFour,menuItemFive,menuItemSix)
    main.appendChild(menu)
    content.appendChild(main);
}