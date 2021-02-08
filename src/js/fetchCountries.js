import murkup from './markup.js';
import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const myError = {
  text: 'Too many matches found.Please entry a more specific query!',
};
const alarm = { text: 'Enter correct data' };

const fetchCountries = searchQuery => {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(arrayCountry =>
      arrayCountry.length < 10 ? arrayCountry : error(myError),
    )
    .then(country => murkup(country))
    .catch(getError => error(alarm));
};

export default fetchCountries;
