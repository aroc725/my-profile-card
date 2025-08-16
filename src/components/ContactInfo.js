function ContactInfo({ profile, showContact }) {
  return (
    <div className="contact-info-display">
      <span className="contact-text">
        {showContact === 'email' ? (
          <a href={`mailto:${profile.email}`} className="contact-link">
            {profile.email}
          </a>
        ) : (
          <a href={`tel:${profile.phone}`} className="contact-link">
            {profile.phone}
          </a>
        )}
      </span>
    </div>
  );
};

export default ContactInfo;