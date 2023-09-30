import React from 'react';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

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
    <div style={{ display: 'flex', alignItems: 'center',fontSize:'1.3rem' }}>
      <MailOutlineTwoToneIcon
        onClick={handleClick}
        style={{ cursor: 'pointer', fontSize: 40 }}
      />
      
    </div>
  );
}
