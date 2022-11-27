import axios from "axios";
// upper case since it is a constant value, so it should not be changed.
// below we have a Youtube API access key
const KEY = "AIzaSyDFK1acDOeJdT9DQGOv7k3DUb_pVwE1fLM";
// this API key is going to be use inside the browser
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
