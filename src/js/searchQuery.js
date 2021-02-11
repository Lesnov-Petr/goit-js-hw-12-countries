import fetchCountries from './fetchCountries.js';
import refs from './refs.js';
import murkup from './markup.js';
import { getError, myError, alarm } from './pnotify';

const { searchCountry, listCountry, debounce } = refs;

const getCountry = debounce(event => {
  event.preventDefault();
  const inputSearch = event.target;
  listCountry.innerHTML = '';

  fetchCountries(inputSearch.value)
    .then(arrayCountry =>
      arrayCountry.length < 10 ? arrayCountry : getError(myError),
    )
    .then(country => murkup(country));
}, 500);

searchCountry.addEventListener('input', getCountry);
export default listCountry;
