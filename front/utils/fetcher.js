import axios from "axios";

const fetcher = (url) =>
  axios
    .get(url, { withCredentials: true })
    .then((response) => response.data)
    .catch((err) => console.error(err));

export default fetcher;
