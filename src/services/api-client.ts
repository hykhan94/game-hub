import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bbf5a3daadbd43c49234ced1d1456ed2",
  },
});
