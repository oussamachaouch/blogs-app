import React, { useEffect,useState } from "react";
// import logo from './logo.svg';
import "../styles/newBlog.css";
// REACT BOOTSTRAP COMPONENTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// BOOTSTRAP LIBRARY
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/actions/blogAction";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [sections, setSection] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Initialize the form with default values
    setField("sections", sections);
  }, [sections]);

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

  const addSection = () => {
    setSection([
      ...sections,
      {
        title: "",
        body: "",
      },
    ]);
  };

  // const handleImageUpload = (file) => {
  //   if (file && file[0].type.startsWith("image/")) {
  //       setField("formDefaultFile", file[0]);
  //   } else {
  //     alert("Please upload a valid image file.");
  //   }
  // }

  const deleteSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSection(newSections);
  }


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
      const blog = { ...form, snippet: sections[0].body.substring(0, 58) + "...", sections: [...sections] };
      dispatch(createBlog(blog,navigate));
      //   alert("Your blog is created successfully!");
    }
  };

  const findFormErrors = () => {
    const { title, defaultImage, blogImage, sections } = form;
    const newErrors = {};
    // title errors
    if (!title || title === "") newErrors.title = "title cannot be blank!";
    else if (title.length > 100) newErrors.title = "title is too long!";

    if (!defaultImage || defaultImage === "") newErrors.defaultImage = "default image src cannot be empty!";
    if (!blogImage || blogImage === "") newErrors.blogImage = "blog image src cannot be empty!";

    // sections errors
    if (!sections || sections.length === 0) {
      alert("You must have at least one section!");
      newErrors.sections = [{ other: "You must have at least one section!" }];
    }
    else {
      newErrors.sections = [];
      sections.forEach((section, index) => {
        const sectionErrors = {};
        // title errors
        if (!section.title || section.title === "") sectionErrors.title = "title cannot be empty!";
        else if (section.title.length > 100) sectionErrors.title = "title is too long!";
        // body errors
        if (!section.body || section.body === "") sectionErrors.body = "section body cannot be blank!";
        else if (section.body.length > 1000) sectionErrors.body = "section body is too long!";
        if(Object.keys(sectionErrors).length > 0){
          newErrors.sections[index] = sectionErrors;
        }
      });
      if (newErrors.sections.length === 0) delete newErrors.sections;
    }


    return newErrors;
  };

  const cancel = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="new-blog-container d-flex flex-column align-items-center">
      <h1 className="blogWelcome">Show Us Your Knowledge</h1>
      <Form style={{ width: "750px" }}>
        <Form.Group className="margin">
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

        <Form.Group controlId="defaultImage" className="mb-3">
          <Form.Label className="blogTitle">Copy paste default image link</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setField("defaultImage", e.target.value);
            }}
            isInvalid={!!errors.defaultImage}
          />
          <Form.Control.Feedback type="invalid">
            {errors.defaultImage}
          </Form.Control.Feedback>
        </Form.Group> 

        <Form.Group controlId="blogImage" className="mb-3">
          <Form.Label className="blogTitle">Copy paste blog image link</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setField("blogImage", e.target.value);
            }}
            isInvalid={!!errors.blogImage}
          />
          <Form.Control.Feedback type="invalid">
            {errors.blogImage}
          </Form.Control.Feedback>
        </Form.Group> 

        {/* <Form.Group controlId="formDefaultFile" className="mb-3">
          <Form.Label className="blogTitle">Choose default image</Form.Label>
          <Form.Control
            accept="image/png, image/gif, image/jpeg" 
            type="file" 
            onChange={(e) => {
              setField("formDefaultFile", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBlogFile" className="mb-3">
          <Form.Label className="blogTitle">Choose blog image</Form.Label>
          <Form.Control
            accept="image/png, image/gif, image/jpeg"
            type="file" 
            onChange={(e) => {
                handleImageUpload(e.target.files);
            }}
          />
        </Form.Group> */}
        
        <Form.Group className="margin sectionContainer">
          <Form.Label>
            <div className="blogBody">Sections :</div>
          </Form.Label>

          <div className="addSectionContainer">
            <Button onClick={addSection} className="addSection">
              Add Section
            </Button>
          </div>


          {sections && sections.length > 0 ? sections.map((section, index) => (
            <div key={index} className="section">
              <div className="deleteSectionContainer">
                <Button onClick={() => deleteSection(index)} className="deleteSection" variant="danger">
                  delete Section
                </Button>
              </div>

              <Form.Label>
                <div className="blogTitle">Section title :</div>
              </Form.Label>
              <Form.Control
                type="text"
                value={section.title}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].title = e.target.value;
                  setSection(newSections);
                }}
                isInvalid={!!errors.sections?.[index]?.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.sections?.[index]?.title}
              </Form.Control.Feedback>

              <Form.Label>
                <div className="blogTitle sectionBodyTitle">Section body :</div>
              </Form.Label>
              <Form.Control
                as="textarea"
                value={sections.body}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].body = e.target.value;
                  setSection(newSections);
                }}
                isInvalid={!!errors.sections?.[index]?.body}
                style={{ width: "100%", height: "20em" }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.sections?.[index]?.body}
              </Form.Control.Feedback>
            </div>
          ))
          
          : <div className="noSectionFound">No section found</div>
          }

        </Form.Group>

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
