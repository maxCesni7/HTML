const IMAGE_URL = 'https://placehold.co/200';

const CARD_SECTION = document.getElementById('card-section');
const IMAGE_CONTAINER = document.querySelector('.img-container');
const INFO_CONTAINER = document.querySelector('.info-container');

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const createCard = () => {
    const card = document.createElement('div');
    const imgContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    card.classList.add('card');
    card.append(imgContainer, infoContainer);
    return card
}

const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h3'),
        description: document.createElement('p'),
        age: document.createElement('p'),
        bands: [],
    }
    return userElements;
}


const populateElements = (userElements, user) => {
    userElements.user_name.textContent = user.user_name;
    userElements.description.textContent = user.description;
    userElements.age.textContent = user.age;

    const bandList = user.fav_music.bands.map(e => {
        const ulElement = document.createElement('ul');
        ulElement.textContent = e;
        return ulElement;
    })

    userElements.bands = bandList;
    return userElements;
}

const renderElements = (elements, card) => {
    const img = document.createElement('img');
    img.src = IMAGE_URL;

    card.children[0].append(img);
    card.children[1].append(elements.user_name, elements.age, elements.description);
    elements.bands.forEach(e => card.children[1].append(e));
}


users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();
    const populatedElements = populateElements(userElements, user);
    renderElements(populatedElements, card);
    CARD_SECTION.appendChild(card);
});


// users.forEach(user => {
//     console.log(user);
//     const card =
//     `
//      <div class='card'>
//         <div class='img-container'>
//             <img src='${IMAGE_URL}'>
//         </div>
//         <div class='info-container>
//             <h3>${user.user_name}</h3>
//             <p>${user.age}</p>
//             <p>${user.description}</p>
//         </div>
//      </div>
//     `
//     CARD_SECTION.innerHTML = card;
// }) 
