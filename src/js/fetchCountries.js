import murkup from './markup.js';
import { getError, myError, alarm } from './pnotify';

const fetchCountries = searchQuery => {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(arrayCountry =>
      arrayCountry.length < 10 ? arrayCountry : getError(myError),
    )
    .then(country => murkup(country))
    .catch(error => getError(alarm));
};

export default fetchCountries;
