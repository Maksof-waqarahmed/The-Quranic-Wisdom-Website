import './whatsapp.css'
import React from 'react';

function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/3460836870" // yahan apna WhatsApp number dalen
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
    </a>
  );
}

export default WhatsAppChat;
