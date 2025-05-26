import { Link } from "react-router";

const TopicFilter = ({ topics }) => {
  return (
    <nav>
      {topics.map((singleTopic) => {
        return (
          <Link to={`/HomePage/${singleTopic.slug}`}>{singleTopic.slug} </Link>
        );
      })}
    </nav>
  );
};

export default TopicFilter;
