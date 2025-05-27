import { Form } from "react-router";

const SortForm = ({ setSort_by, setOrder }) => {

const SetSort = (e)=>{

setSort_by(e.target.value)

}

const SetOrder = (e)=>{

setOrder(e.target.value)

}



  return (
    <>
      <select onChange={SetSort}>
        <option value="">Sort By</option>
        <option value="created_at">Created at</option>
        <option value="title"> Title</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
      </select>

      <select onChange={SetOrder}>
        <option value="DESC">DESC</option>
        <option value="ASC">ASC</option>
      </select>
    </>
  );
};

export default SortForm;
