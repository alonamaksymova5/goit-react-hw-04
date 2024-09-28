import axios from "axios";

const API_KEY = "iqD8yD-O5X4Mj65P2NI3QXsVL-BNZmV771TV3wRwd5Q";

axios.defaults.baseURL = "https://api.unsplash.com/";

const searchImages = async (search, currentPage) => {
  const result = await axios.get(
    `search/photos?client_id=${API_KEY}&query=${search}&per_page=8&page=${currentPage}`
  );

  return result.data.results;
};

export default searchImages;
