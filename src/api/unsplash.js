import axios from "axios";

const API_KEY =
  "4e97b33466bfd0737e747a8d67fe5be065c59b9165c1ebbd8308ab6a63ce0476";

const Unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`
  }
});

const searchPhotos = term =>
  Unsplash.get("/search/photos", { params: { query: term, per_page: 100 } });

export { searchPhotos };

export default Unsplash;
