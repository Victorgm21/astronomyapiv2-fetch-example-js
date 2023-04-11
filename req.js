const applicationId = "Your app ID";

const applicationSecret ="Your app secret";

const authString = btoa(`${applicationId}:${applicationSecret}`);

const headers = {
  headers: {
    Authorization: `Basic ${authString}`,
  },
};

let longitude = "-84.39733";
let latitude = "33.775867";
let elevation = "1";
let from_date = "2023-04-10";
let to_date = "2023-04-10";
let time = "16%3A34%3A55";

let route = `/api/v2/bodies/positions?longitude=${longitude}&latitude=${latitude}&elevation=${elevation}&from_date=${from_date}&to_date=${to_date}&time=${time}`;

const url = "https://api.astronomyapi.com" + route;

const data = fetch(url, headers)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
