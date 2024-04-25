import React, { useState } from "react";
import "./PostArticle.css";
import { MdDelete } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import { AiFillFileImage } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as message from '../Message/Message'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import StudentFooter from '../Footer/StudentFooter';
import NavBarStudent from '../NavBarStudent/NavBarStudent';

function PostArticle() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [modal, setModal] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("No selected image");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);



  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleImageChange = ({ target }) => {
    const image = target.files[0];
    if (image) {
      setImage(image);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    setImageName("No selected image");
  };


  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleCheckboxChange = () => {
    setIsAgree(!isAgree);
    setIsButtonDisabled(!isAgree);
    setIsCheckboxChecked(!isCheckboxChecked)
  };

  const handleUpload = () => {
    if (!isCheckboxChecked) {
      toast.error('Please agree to the terms and conditions before uploading.', {
        toastStyle: { fontSize: '100px' }
      });
      return;
    }

    // Nếu checkbox được chọn, hiển thị toast success
    toast.success('Upload successful!', {
      toastStyle: { fontSize: '20px' }
    });
    setModal(false);
  };


  return (
    <>
      <NavBarStudent />

      <div className="post-main-container">

        <div class="post-title-container">
          <section className="post-art-header-title">
            <h3>Enter Contribution Name</h3>
          </section>
          <input type="text" placeholder="Type here..." className="title-post" />
        </div>

        <div class="post-delete-container">
          <section className="post-art-header">
            <h3>Select Your Document</h3>
          </section>

          <section className="delete-row">
            <div className="delete-selected-file">
              <MdDelete
                onClick={() => {
                  setFileName("No selected file");
                  setFile(null);
                }}
                size={30}
              />
            </div>
          </section>
        </div>

        <div
          className="form-post-container"
          onClick={() => document.querySelector(".post-input-field").click()}
        >
          <input
            type="file"
            accept=".doc, .docx"
            className="post-input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setFile(URL.createObjectURL(files[0]));
              }
            }}
          ></input>

          {file ? (
            <div className="file-preview">
              <AiFillFileImage color="#1475cf" size={60} />
              <span>{fileName}</span>
            </div>
          ) : (
            <>
              <FaFileUpload color="#1475cf" size={60} />
              <p>Browse Files to Upload</p>
            </>
          )}
        </div>

        <section className="uploaded-row">
          <AiFillFileImage color="#1475cf" />
          <span className="upload-content">{fileName}</span>
        </section>

        <div class="post-delete-container">
          <section className="post-art-header">
            <h3>Select Your Post's Pictures</h3>
          </section>

          <section className="delete-row">
            <div className="delete-selected-file">
              <MdDelete
                onClick={() => {
                  setImage(null);
                  setImageName("No selected image");
                }}
                size={30}
              />
            </div>
          </section>
        </div>

        <div className="form-post-container">
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
            className="post-image-input"
          />

          <div onClick={() => document.querySelector(".post-image-input").click()} className="file-upload-container">
            {image ? (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  style={{
                    width: "100%",
                    maxHeight: "190px",
                    objectFit: "contain",
                    border: "1px solid #ccc",
                    boxSizing: "border-box"
                  }}
                />
              </div>
            ) : (
              <>
                <AiFillPicture color="#1475cf" size={60} />
                <p>Browse Files to Upload Images</p>
              </>
            )}
          </div>
        </div>

        <div class="post-upload-container">
          <section className="upload-row">
            <button onClick={toggleModal} className="btn-modal-upload">
              Upload
            </button>
          </section>
        </div>

        {modal && (
          <div className="modalcon">
            <div onClick={toggleModal} className="overlay"></div>
            <div
              className="modalcon-content"
              style={{ overflowY: "auto", maxHeight: "1000px" }}
            >
              <div className="modalcon-content-header">
                <h1>Terms and Conditions</h1>
              </div>
              <div className="line-post-article"></div>
              <div className="modalcon-content-terms">
                <p>
                  Please carefully read the following terms and conditions before
                  using our service. By using this website and related services,
                  you agree to adhere to the following terms and conditions:
                  <br />
                  <br />
                  <h2>Intellectual Property Rights</h2>
                  All content uploaded by students, including but not limited to
                  articles and documents, remains the copyright of the student
                  creators. However, by uploading content, students agree to grant
                  non-exclusive usage rights to the school for educational
                  purposes.
                  <br />
                  <br />
                  <h2>Acceptable Use</h2>
                  Students are solely responsible for the content they upload.
                  Content must not infringe upon the rights of others, including
                  copyright, trademark, privacy, or any other proprietary rights.
                  Content must not contain any unlawful, defamatory, harassing,
                  obscene, or otherwise objectionable material.
                  <br />
                  <br />
                  <h2>Submission Guidelines</h2>
                  Students must ensure that all uploaded assignments are original
                  works created by them. Proper citation and referencing must be
                  provided for any external sources used. Assignments should be
                  relevant to the assigned topic and meet the specified
                  requirements provided by the instructor.
                  <br />
                  <br />
                  <h2>Privacy and Data Protection</h2>
                  We are committed to protecting the privacy of our users.
                  Personal information provided during registration or submission
                  of assignments will be handled in accordance with our Privacy
                  Policy. Students should refrain from sharing sensitive personal
                  information within their assignments.
                  <br />
                  <br />
                  <h2>Use of Submitted Content</h2>
                  By uploading content, students grant the school permission to
                  use, reproduce, distribute, and display the content for
                  educational purposes within the school community. The school may
                  also use submitted content for promotional or informational
                  purposes, with proper attribution to the student creator.
                  <br />
                  <br />
                  <h2>Moderation and Removal</h2>
                  The school reserves the right to moderate and remove any content
                  that violates these terms and conditions or is deemed
                  inappropriate or harmful. Students may be subject to
                  disciplinary action for violations of these terms, including but
                  not limited to suspension or expulsion from the platform.
                  <br />
                  <br />
                  <h2>Changes to Terms and Conditions</h2>
                  The school reserves the right to modify or update these terms
                  and conditions at any time. Any changes will be effective
                  immediately upon posting on the website. It is the
                  responsibility of users to regularly review these terms.
                  <br />
                  <br />
                  By using our service, you acknowledge that you have read,
                  understood, and agree to be bound by these terms and conditions.
                  If you do not agree with any part of these terms, you may not
                  use our service.
                </p>
                <div className="checkbox-terms">
                  <input
                    type="checkbox"
                    checked={isAgree}
                    onChange={handleCheckboxChange}
                  />{" "}
                  I have read and agree with the terms and conditions.
                </div>
              </div>
              <div className="line-post-article"></div>
              <div className="btn-agree-decline">
                <button className="btn-cancel" onClick={toggleModal}>
                  Cancel
                </button>
                <button
                  className="btn-upload"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}
        <ToastContainer toastClassName="custom-toast" style={{ width: "500px", height: "250px", fontSize: "18px", textAlign: "center" }} />

      </div>
      <StudentFooter />
    </>

  );
}

export default PostArticle;
