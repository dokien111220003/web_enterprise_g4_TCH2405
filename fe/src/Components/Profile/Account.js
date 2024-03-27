import React, { useState } from 'react';
import './Account.css';

const Account = () => {
    const [showPassword] = useState(false);
    const [gender, setGender] = useState('male');

    const handleGenderChange = (e) => {
        setGender(e.target.value);
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
                        <input type="text" value="John Smith" readOnly />
                    </div>
                    <div className="input-acc">
                        <label>Phone:</label>
                        <input type="number" value="0123456789" readOnly />
                    </div>
                    <div className="input-acc-faculty">
                        <label>Faculty:</label>
                        <input type="text" value="Marketing" readOnly />
                    </div>
                    <div className="input-acc">
                        <label>Address:</label>
                        <input type="text" value="73 Maple Street" readOnly />
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
                <div className="acc-image">
                    <img src="https://via.placeholder.com/150" alt="Profile" />
                    <input type="file" accept="image/*"/>
                </div>
                <div className="account-submit-container">
                    <button className="account-img-submit">UPDATE</button>
                </div>
            </div>
        </div>
    )
}

export default Account;