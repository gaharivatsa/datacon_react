import React from 'react';

function MapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3458567379157!2d80.03668590616039!3d12.820913316635403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76ce2d4aedd%3A0x63d3d41517b93aa2!2sMechanical%20A%20Block!5e0!3m2!1sen!2sin!4v1696066999682!5m2!1sen!2sin"
      width="200"
      height="200"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default MapComponent;
