import itemCountry from '../templates/country.hbs';
import markupCountrys from '../templates/listCountry.hbs';
import listCountry from './searchQuery.js';

const markup = country => {
  const updateMarkup = itemCountry(country);
  const updateMarkupListCountry = markupCountrys(country);
  const currentMarkup =
    country.length === 1 ? updateMarkup : updateMarkupListCountry;
  listCountry.insertAdjacentHTML('beforeend', currentMarkup);
};

export default markup;
