import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
      <MailOutlineIcon
        onClick={handleClick}
        style={{ cursor: 'pointer', fontSize: 40 }}
      />
      
    </div>
  );
}
