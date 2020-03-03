import restaurantMenu from '../data/menu';

const menu = () => {
  const container = document.createElement('div');
  container.classList.add('menu-container');

  const header = document.createElement('h3');
  header.innerText = 'Our Menu';

  container.appendChild(header);

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
