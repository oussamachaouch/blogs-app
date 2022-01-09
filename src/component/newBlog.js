import React, { useState } from "react";
// import logo from './logo.svg';
import "../styles/newBlog.css";
// REACT BOOTSTRAP COMPONENTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// BOOTSTRAP LIBRARY
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/actions/blogAction";
import { navigate } from "hookrouter";

const NewBlog = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      const blog = { ...form, snippet: form.body.substring(0, 58) + "..." };
      dispatch(createBlog(blog));
      //   alert("Your blog is created successfully!");
    }
  };

  const findFormErrors = () => {
    const { title, body } = form;
    const newErrors = {};
    // title errors
    if (!title || title === "") newErrors.title = "title cannot be blank!";
    else if (title.length > 30) newErrors.title = "title is too long!";
    // body errors
    if (!body || body === "") newErrors.body = "body cannot be blank!";
    else if (body.length > 1000) newErrors.body = "body is too long!";

    return newErrors;
  };

  const cancel = () => {
    navigate("/", true);
  };

  return (
    <div className="App d-flex flex-column align-items-center">
      <h1 className="blogWelcome">Show Us Your Knowledge</h1>
      <Form style={{ width: "750px" }}>
        <Form.Group>
          <Form.Label>
            <div className="blogTitle">Title :</div>
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setField("title", e.target.value);
            }}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <div className="blogBody">Body :</div>
          </Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => setField("body", e.target.value)}
            isInvalid={!!errors.body}
            style={{ width: "100%", height: "20em" }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.body}
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <div className="buttonSC">
          <Button onClick={handleSubmit} className="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={cancel} className="cancel">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBlog;

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createBlog } from "../redux/actions/blogAction";
// import { useRedirect, useRoutes } from "hookrouter";
// import Home from "./home";

// const NewBlog = () => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");
//   const [snippet, setSnippet] = useState("");
//   const [body, setBody] = useState("");

// //   const redirect = useRedirect("/newBlog", "/");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const blog = {
//       title: title,
//       snippet: snippet,
//       body: body,
//     };
//     dispatch(createBlog(blog));
//     // if (status) {
//     //     // rediriger vers page home
//     // } else {
//     //     // afficher un message d'erreur
//     // }
//     // const routes = { "/": () => <Home /> };
//     // const cancel = () => {
//     //   useRedirect("/newBlog", "/");
//     //   const routeResult = useRoutes(routes);
//     //   return routeResult || "Not found";
//     // };
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title
//           <input
//             type="text"
//             name="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             // {...register("title", {
//             //   required: "title is required",
//             // })}
//           />
//         </label>
//         <br />
//         <label>
//           Snippet
//           <input
//             type="text"
//             name="snippet"
//             value={snippet}
//             onChange={(e) => setSnippet(e.target.value)}
//             // {...register("snippet", {
//             //     required: "snippet is required",
//             //   })}
//           />
//         </label>
//         <br />
//         <label>
//           Body
//           <input
//             type="text"
//             name="body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             // {...register("body", {
//             //     required: "body is required",
//             //   })}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Blog</button>
//         <button
//           type="button"
//           /*onClick={cancel}*/ onClick={cancel}
//         >
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewBlog;
