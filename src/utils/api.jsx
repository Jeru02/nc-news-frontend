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



export const postVote = (vote, id)  =>{

  
let voteToSend = { inc_votes: vote }

return ArticlesApi.patch(`/api/articles/${id}`, voteToSend).then((res) => {
    return res.data.article;
  });
  
}

