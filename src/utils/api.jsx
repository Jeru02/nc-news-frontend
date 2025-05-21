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

export const getComments = (id) => {
  return ArticlesApi.get(`/api/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};




// Post /api/articles/:article_id/comments


// {
//       username: "icellusedkars",
//       body: "congrats on the new job Tom!",
//     };
