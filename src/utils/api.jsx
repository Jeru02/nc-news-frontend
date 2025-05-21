import axios from "axios";

const ArticlesApi = axios.create({
  baseURL: "https://nc-news-api-d244.onrender.com/",
});

export const getItems = () => {
  return ArticlesApi.get("api/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (id) => {
  return ArticlesApi.get(`/api/articles/${id}`).then((res) => {
    return res.data.article;
  });
};
