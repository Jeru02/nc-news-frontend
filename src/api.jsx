import axios from "axios";

const ArticlesApi = axios.create({
    baseURL: "https://nc-news-api-d244.onrender.com/"
})

export const getItems = () => {
  return ArticlesApi.get("api/Articles").then((res) => {
    return res.data.articles;
  });
};

