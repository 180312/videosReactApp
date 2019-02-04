import axios from "axios";

const KEY = "AIzaSyAKz7EBMp8Yb4faE8fZA9d6K_MdjFOpyKM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
