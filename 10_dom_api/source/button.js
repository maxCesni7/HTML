const BTN = document.getElementById('card-btn');
const cardSection = document.getElementById('section_cards');


BTN.addEventListener('click', e => {

    cardSection.style.visibility = (cardSection.style.visibility === 'hidden') ? 'visible' : 'hidden';

    // if(cardSection.style.visibility === 'hidden') {
    //     cardSection.style.visibility = 'visible';
    // } else {
    //     cardSection.style.visibility = 'hidden';
    // }
})