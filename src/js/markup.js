import itemCountry from '../templates/country.hbs';
import listCountry from './searchQuery.js';

const markup = country => {
  const updateMarkup = itemCountry(country);
  listCountry.insertAdjacentHTML('beforeend', updateMarkup);
};

export default markup;
