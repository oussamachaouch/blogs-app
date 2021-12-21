import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/actions/blogAction";

const NewBlog = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");

  const handleChangeTitle = (event) => {
    setTitle({ name: event.target.value });
  };
  const handleChangeSnippet = (event) => {
    setSnippet({ name: event.target.value });
  };
  const handleChangeBody = (event) => {
    setBody({ name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const blog = {
      title: this.title,
      snippet: this.snippet,
      body: this.body,
    };
    dispatch(createBlog(blog));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" name="name" value={title} onChange={handleChangeTitle} />
        </label>
        <label>
          Snippet
          <input type="text" name="snippet" value={snippet} onChange={handleChangeSnippet} />
        </label>
        <label>
          Body
          <input type="text" name="body" value={body} onChange={handleChangeBody} />
        </label>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default NewBlog;
