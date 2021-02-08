import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const getError = error;

const myError = {
  text: 'Too many matches found.Please entry a more specific query!',
};
const alarm = { text: 'Enter correct data' };

export { getError, myError, alarm };
