export function contact() {
    const content = document.querySelector('#content');
    const main = document.querySelector('.main');
    const contact = document.createElement('div');
    contact.classList.add('contact')
    const contactContent = document.createElement('div');
    const contactText = document.createElement('div');
    const phoneNumber = document.createElement('p');
    const adress = document.createElement('p');
    phoneNumber.textContent = '+(41) 123-456-789';
    adress.textContent = 'Some street, Some building - 44, 16131'
    const contactBody = document.createElement('div');
    main.replaceChildren();
    contactBody.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d175397.5214846973!2d7.854460533375044!3d46.6151786410973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1678873975875!5m2!1sen!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    contactText.append(phoneNumber, adress)
    contactContent.classList.add('contact-content')
    contactContent.appendChild(contactText);
    contactContent.appendChild(contactBody);
    contact.appendChild(contactContent)
    main.appendChild(contact)
    content.appendChild(main);
}