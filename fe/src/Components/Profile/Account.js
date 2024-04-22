import React, { useState } from 'react';
import './Account.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillPicture } from "react-icons/ai";
import * as message from '../Message/Message'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Account = () => {
    const [showPassword] = useState(false);
    const [gender, setGender] = useState('male');
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState("No selected image");
    console.log('user', user)

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleUpload = () => {
        message.success()
        toast.success('Profile updated successfully!');
    };

    const handleImageChange = ({ target }) => {
        const image = target.files[0];
        if (image) {
            setImage(image);
        }
    };
    return (
        <div className="acc-container">
            <div className='acc-information-container'>
                <div className="acc-header">
                    <div className="acc-text">Account Information</div>
                </div>
                <div className="acc-inputs">
                    <div className="input-acc">
                        <label>Name:</label>
                        <input type="text" value={user.name} readOnly />
                    </div>
                    <div className="input-acc">
                        <label>Phone:</label>
                        <input type="number" value={user.phone} readOnly />
                    </div>
                    <div className="input-acc-faculty">
                        <label>Faculty:</label>
                        <input type="text" value={user.faculty} readOnly />
                    </div>
                    <div className="input-acc">
                        <label>Address:</label>
                        <input type="text" value={user.address} readOnly />
                    </div>
                    <div className="checkbox-gender">
                        <label><input type="checkbox" value="male" checked={gender === 'male'} onChange={handleGenderChange} />Male</label>
                        <label><input type="checkbox" value="female" checked={gender === 'female'} onChange={handleGenderChange} />Female</label>
                        <div className="change-pass">
                            <a href="change_password">Change Password</a>
                        </div>
                    </div>
                </div>
                <div className="account-submit-container">
                    <button className="account-submit">UPDATE</button>
                </div>
            </div>
            <div className="acc-image-container">
                <div className="acc-image-header">
                    <div className="acc-text">Your Photo</div>
                </div>
                <div className="acc-image-hehe">
                    {image ? (
                        <div className="image-preview">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                style={{
                                    width: "100%",
                                    maxHeight: "300px",
                                    objectFit: "contain",
                                    marginTop: "10px",
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
                    <input type="file" onChange={handleImageChange} accept="image/*" className="profile-input" />
                </div>
                <div className="account-submit-container">
                    <button className="account-img-submit" onClick={handleUpload}>UPDATE</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Account;