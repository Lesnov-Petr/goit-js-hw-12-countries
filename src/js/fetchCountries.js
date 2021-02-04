const refs = {
  searchCountry: document.querySelector("#country"),
  debounce: require("lodash.debounce"),
};

const { searchCountry, debounce } = refs;

const getCountry = debounce((event) => {
  event.preventDefault();
  const inputSearch = event.target;
  const url = `https://restcountries.eu/rest/v2/name/${inputSearch.value}`;
  console.log(url);

  fetch(url).then((res) => res.json);
}, 500);

const fetchCountries = (searchQuery) => {};

searchCountry.addEventListener("input", getCountry);
// export default fetchCountries(searchQuery);
