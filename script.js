
// Récupération des restaurants à partir d'une api; utilisation de designer.mocky.io pour générer une api fictive
const apiURL = 'https://run.mocky.io/v3/95ef783f-eff7-437f-bb36-e3a3ebb523e2';

// Tableau de restaurants fictifs
const restaurants = [
    {
        name: 'Resto Paris',
        cuisine: 'Française',
        image: 'images/europeen.jpeg'
    },
    {
        name: 'Resto Cameroun',
        cuisine: 'Camerounaise',
        image: 'images/camerounais.jpeg'
    },
    {
        name: 'Resto Sénégal',
        cuisine: 'Sénégalaise',
        image: 'images/senegalais.jpeg'
    },
    {
        name: 'Resto Asie',
        cuisine: 'Asiatique',
        image: 'images/asiatique.jpeg'
    },
    {
        name: 'Resto Amérique',
        cuisine: 'Américaine',
        image: 'images/americain.jpeg'
    },
];

// Sélectionne de la grille de restaurants
const restaurantGrid = document.querySelector('.restaurant-grid');

restaurants.forEach(restaurant => {
    // Création  d'une nouvelle carte de restaurant
    const restaurantCard = document.createElement('div');
    restaurantCard.classList.add('restaurant-grid-item');

    // Ajout de l'image du restaurant à la carte
    const restaurantImage = document.createElement('img');
    restaurantImage.src = restaurant.image;
    restaurantCard.appendChild(restaurantImage);

    // Ajout du nom du restaurant à la carte
    const restaurantName = document.createElement('h3');
    restaurantName.textContent = restaurant.name;
    restaurantCard.appendChild(restaurantName);

    // Ajout du type de cuisine du restaurant à la carte
    const restaurantCuisine = document.createElement('p');
    restaurantCuisine.textContent = `Cuisine : ${restaurant.cuisine}`;
    restaurantCard.appendChild(restaurantCuisine);

    // Ajout de la carte de restaurant à la grille
    restaurantGrid.appendChild(restaurantCard);
});


// Utilisation de l'api pour extraire les données réelles des restaurants

const restaurantGridApi = document.querySelector('.restaurant-grid');

// Utilisation de Fetch pour récupérer les données de l'API
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        data.restaurants.forEach(record => {

            // Création d'une nouvelle carte de restaurant
            const restaurantCard = document.createElement('div');
            restaurantCard.classList.add('restaurant-grid-item');

              // Ajout du nom du restaurant à la carte
            const restaurantName = document.createElement('h3');
            restaurantName.textContent = record.name;
            restaurantCard.appendChild(restaurantName);

            // Ajout du type de cuisine du restaurant à la carte
            const restaurantCuisine = document.createElement('p');
            restaurantCuisine.textContent = `Cuisine : ${record.cuisine}`;
            restaurantCard.appendChild(restaurantCuisine);

        // Ajout de l'image du restaurant à la carte
            const restaurantImage = document.createElement('img');
            restaurantImage.src = record.image;
            restaurantCard.appendChild(restaurantImage);

            restaurantGridApi.appendChild(restaurantCard);
        });
    })
    .catch(error => {
        console.error('Erreur :', error);
    });