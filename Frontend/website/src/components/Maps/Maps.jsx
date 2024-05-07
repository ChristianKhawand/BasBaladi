import React from 'react';

function Maps() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13301.930302029945!2d35.57594155574555!3d33.540836073657545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151edd6d67716faf%3A0xdca101552c93b268!2sJezzine!5e0!3m2!1sen!2slb!4v1714996998322!5m2!1sen!2slb"
      width="80%"
      height="450"
      style={{ border: '7px solid green' }} // Adjust border properties here
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Maps;
