import { useState } from "react";
import ContactInfo from "./ContactInfo";

function ProfileCard({ profile }) {
  const [showContact, setShowContact] = useState('email');

  const handleToggleContact = () => {
    setShowContact(showContact === 'email' ? 'phone' : 'email');
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={profile.image}
          alt={`${profile.name}'s profile`}
          className="profile-image"
        />
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-bio">{profile.bio}</p>
      </div>

      <div className="contact-section">
        <ContactInfo profile={profile} showContact={showContact} />
        <button
          onClick={handleToggleContact}
          className="toggle-button"
        >
          Show {showContact === 'email' ? 'Phone Number' : 'Email Address'}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;