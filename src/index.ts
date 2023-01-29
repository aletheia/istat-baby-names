import axios from 'axios';

const baseUrl =
  'https://www.istat.it/ws/nati/index2021.php?callback=callback&type=list&limit=137&year=';

(async () => {
  // const years = Array.from(Array(2021 - 1998).keys()).map(i => i + 1999);
  for (let year = 1999; year <= 2021; year++) {
    const url = `${baseUrl}${year}`;
    console.log(url);
    const response = await axios.get(
      'https://www.istat.it/ws/nati/index2021.php?callback=callback&type=list&limit=137&year=1999',
      {
        responseType: 'text',
      }
    );
    // const data = response.data;
    // console.log(data);
  }
})();
