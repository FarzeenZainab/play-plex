import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dba8e02b29754e8e9657d8315ae20a10",
  },
});
