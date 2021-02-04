import fetchCountries from './fetchCountries.js';

const refs = {
  searchCountry: document.querySelector('#country'),
  listCountry: document.querySelector('.listCountry'),
  debounce: require('lodash.debounce'),
};
const { searchCountry, listCountry, debounce } = refs;

const getCountry = debounce(event => {
  event.preventDefault();
  const inputSearch = event.target;
  listCountry.innerHTML = '';

  fetchCountries(inputSearch.value);
}, 500);

searchCountry.addEventListener('input', getCountry);
export default listCountry;
