import React, { useEffect,useState } from "react";
// import logo from './logo.svg';
import "../styles/newBlog.css";
// REACT BOOTSTRAP COMPONENTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// BOOTSTRAP LIBRARY
import "bootstrap/dist/css/bootstrap.min.css";
// OTHERS
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/actions/blogAction";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useTranslation } from "react-i18next";

const NewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({spread: 'false'});
  const [sections, setSection] = useState([]);
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

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
      //alert("Your blog is created successfully!");
    }
  };

  const findFormErrors = () => {
    const { title, defaultImage, blogImage, sections } = form;
    const newErrors = {};
    // title errors
    if (!title || title === "") newErrors.title = t("NewBlog.titleError1");
    else if (title.length > 100) newErrors.title = t("NewBlog.titleError2");

    if (!defaultImage || defaultImage === "") newErrors.defaultImage = t("NewBlog.defaultImageError");
    if (!blogImage || blogImage === "") newErrors.blogImage = t("NewBlog.blogImageError");

    // sections errors
    if (!sections || sections.length === 0) {
      alert(t("NewBlog.otherError"));
      newErrors.sections = [{ other: t("NewBlog.otherError") }];
    }
    else {
      newErrors.sections = [];
      sections.forEach((section, index) => {
        const sectionErrors = {};
        // title errors
        if (!section.title || section.title === "") sectionErrors.title = t("NewBlog.sectionTitleError1");
        else if (section.title.length > 100) sectionErrors.title = t("NewBlog.sectionTitleError2");
        // body errors
        if (!section.body || section.body.trim() === "" || section.body === "<p><br></p>") sectionErrors.body = t("NewBlog.sectionBodyError1");
        else if (section.body.length > 1000) sectionErrors.body = t("NewBlog.sectionBodyError2");
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
      <h1 className="blogWelcome">{t("NewBlog.title")}</h1>
      <Form style={{ width: "750px" }}>
        <Form.Group className="margin">
          <Form.Label>
            <div className="blogTitle">{t("NewBlog.blogTitle")}*</div>
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
          <Form.Label className="blogTitle">{t("NewBlog.blogDefaultImage")}*</Form.Label>
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
          <Form.Label className="blogTitle">{t("NewBlog.blogImage")}*</Form.Label>
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
        
        <Form.Group className="mb-3">
          <Form.Label>
            <div className="blogTitle">{t("NewBlog.NewsletterOption")}*</div>
          </Form.Label>
          <Form.Select aria-label="Newsletter option" isInvalid={!!errors.spread}
            defaultValue={"false"}
            onChange={(e) => {
              setField("spread", e.target.value );
            }}>
            <option value="true" onClick={(e) => {setField("spread", true);}}>{t("NewBlog.SelectOption1")}</option>
            <option value="false" onClick={(e) => {setField("spread", false);}}>{t("NewBlog.SelectOption2")}</option>
          </Form.Select>
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
            <div className="blogBody">Sections*</div>
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

              {/* <Form.Label>
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
              </Form.Control.Feedback> */}
              <Form.Group className="mb-3">
                  <Form.Label>
                    <div className="blogTitle sectionBodyTitle">Section body :</div>
                  </Form.Label>
                  <div
                    className={`quill-wrapper ${errors.sections?.[index]?.body ? "is-invalid" : ""}`}
                    style={{ border: errors.sections?.[index]?.body ? "1px solid #dc3545" : "1px solid #ced4da", borderRadius: "0.375rem" }}
                  >
                    <ReactQuill
                      theme="snow"
                      value={section.body}
                      onChange={(value) => {
                        const newSections = [...sections]; 
                        newSections[index].body = value;
                        setSection(newSections);
                      }}
                      placeholder="Write your blog content here..."
                      style={{ height: "200px", marginBottom: "50px" }}
                    />
                  </div>
                  {!!errors.sections?.[index]?.body && (
                    <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
                      {errors.sections?.[index]?.body}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
            </div>
          ))
          
          : <div className="noSectionFound">No section found</div>
          }

        </Form.Group>

        <div className="buttonSC">
          <Button onClick={handleSubmit} className="submit">
            {t("NewBlog.submit")}
          </Button>
          <Button variant="danger" onClick={cancel} className="cancel">
            {t("NewBlog.cancel")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBlog;
