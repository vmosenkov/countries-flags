const BASEAPI_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES = BASEAPI_URL + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name) => BASEAPI_URL + "name/" + name;

export const filterByCode = (codes) => BASEAPI_URL + "alpha?codes=" + codes.join(',');
