import axios from 'axios';

const BASE_URL = 'https://www.superheroapi.com/api.php/10228021595625744/';

const fetchSuperheroesByName = async (name: string) => {
  const response = await axios.get(`${BASE_URL}search/${name}`);
  return response.data.results || [];
};

export {fetchSuperheroesByName};
