const Service = require("./src/service");
const fs = require("fs");

const BASE_URL_1 = "https://swapi.dev/api/planets/1/";
const BASE_URL_2 = "https://swapi.dev/api/planets/2/";

const service = new Service();

(async () => {
  {
    const result = await service.makeRequest(BASE_URL_1);

    fs.writeFile(
      "src/mocks/tatooine.json",
      JSON.stringify(result, null, 2),
      "utf8",
      (err) => {
        if (err) throw err;
        console.log("The file as been saved");
      }
    );
  }
  {
    const result = await service.makeRequest(BASE_URL_2);

    fs.writeFile(
      "src/mocks/alderan.json",
      JSON.stringify(result, null, 2),
      "utf8",
      (err) => {
        if (err) throw err;
        console.log("The file as been saved");
      }
    );
  }
  {
    const planet1 = await service.getPlanets(BASE_URL_1);
    console.log(planet1);

    const planet2 = await service.getPlanets(BASE_URL_2);
    console.log(planet2);
  }
})();
