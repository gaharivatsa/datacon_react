import React from 'react';
import inst from '../media/2227-removebg-preview.png'
const InstagramLink = () => {
  const instagramUrl = 'https://instagram.com/dsbs_student_association?igshid=MWZjMTM2ODFkZg==';

  return (
    <div>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={inst} // Replace with the actual path to your Instagram logo image
          alt="Instagram"
          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
        />
      </a>
    </div>
  );
};

export default InstagramLink;
