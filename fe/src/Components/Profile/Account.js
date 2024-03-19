import React from 'react';
import './Account.css';

const Account = () => {
    return (
        <div className="account-container">
            <h1>Account Manager</h1>
            <div className="user-info">
                <p>Username: JohnDoe</p>
                <p>Email: johndoe@example.com</p>
                {/* Add more user information here */}
            </div>
            <div className="account-actions">
                <button>Edit Profile</button>
                <button>Change Password</button>
                {/* Add more account actions here */}
            </div>
        </div>
    );
}

export default Account;