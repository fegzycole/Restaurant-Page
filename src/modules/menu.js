import restaurantMenu from '../data/menu';
import sectionContainer from './container';

const menu = () => {
  const container = sectionContainer('menu-container', 'Our Menu', 'menu-container');

  const foodsMenu = document.createElement('div');
  foodsMenu.classList.add('foods-menu');

  restaurantMenu.forEach(({ name, imageUrl, price }) => {
    const food = document.createElement('div');
    food.classList.add('food');

    const foodHtml = `
      <img src=${imageUrl} alt=${name} />
      <div class="food-details">
        <p class="food-name">${name}</p>
        <p class="food-price">${price}</p>
      </div>
    `;

    food.innerHTML = foodHtml;

    foodsMenu.appendChild(food);
  });

  container.appendChild(foodsMenu);

  return container;
};

export default menu;
