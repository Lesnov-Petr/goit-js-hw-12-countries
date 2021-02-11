import { getError, alarm } from './pnotify';

const fetchCountries = searchQuery => {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => getError(alarm));
};

export default fetchCountries;
