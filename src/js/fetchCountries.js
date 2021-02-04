import murkup from './markup.js';
// import myError from './pnotify.js';
import { error, defaultModules, defaults } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';
const alarm = 'такой страны не существуе';

const fetchCountries = searchQuery => {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(arrayCountry =>
      arrayCountry.length < 10
        ? arrayCountry
        : error({
            text: 'Too many matches found.Please entry a more specific query!',
          }),
    )
    .then(country => murkup(country))
    .catch(error => error({ text: alarm }));
};

export default fetchCountries;
