import React from 'react';
import EmailIcon from '@mui/icons-material/Email';

export default function EmailLink() {
  const email = 'dsc.dsbs.ktr@srmist.edu.in';

  const handleClick = () => {
    const mailtoLink = `mailto:${email}`;
    const newTab = window.open(mailtoLink, '_blank');
    if (newTab) {
      newTab.focus();
    } else {
     
      window.location.href = mailtoLink;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center',fontSize:'1.2rem' }}>
      <EmailIcon
        onClick={handleClick}
        style={{ cursor: 'pointer', fontSize: 32 }}
      />
      <span style={{ marginLeft: '8px' }}>Mail Us</span>
    </div>
  );
}
