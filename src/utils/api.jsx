import axios from "axios";

const ArticlesApi = axios.create({
  baseURL: "https://nc-news-api-d244.onrender.com/",
});

export const getArticles = (topic, sort_by, order) => {
  return ArticlesApi.get("api/articles", {
    params: {
      topic: topic,
      sort_by: sort_by,
      order: order,
    },
  }).then((res) => {
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

export const postVote = (vote, id) => {
  let voteToSend = { inc_votes: vote };

  return ArticlesApi.patch(`/api/articles/${id}`, voteToSend).then((res) => {
    return res.data.article;
  });
};

export const postComment = (id, username, body) => {
  let commentToSend = { username: username, body: body };

  return ArticlesApi.post(`/api/articles/${id}/comments`, commentToSend).then(
    (res) => {
      return res.data.comment;
    }
  );
};

export const delComment = (comment_id) => {
  return ArticlesApi.delete(`/api/comments/${comment_id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopics = () => {
  return ArticlesApi.get(`/api/topics`).then((res) => {
    return res.data.topics;
  });
};
