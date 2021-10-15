import { food } from './food.js';

function renderFoods(item) {
    const foodCard = document.createElement('li');
    foodCard.classList.add('food-item');

    const img = document.createElement('img');
    img.src = item.img;

    const span = document.createElement('span');
    span.classList.add('food-name');
    span.textContent = item.name;

    foodCard.append(img, span);
    return foodCard;
}