import axios from "axios";

const searchImages = async (search, currentPage) => {
  try {
    const result = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: "iqD8yD-O5X4Mj65P2NI3QXsVL-BNZmV771TV3wRwd5Q",
        page: currentPage,
        query: search,
        orientation: "landscape",
      },
    });

    return result.data.results;
  } catch {
    console.error("We cant get data from server");
  }
};

export default searchImages;
