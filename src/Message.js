import React from 'react';

export default function Message(){
  return(
    <div>
  <h3>Your message(optional)</h3>
  <button>+ </button>
  <WhatsAppUpdate />
  </div>
  )
}

export function WhatsAppUpdate(){
  return (
  <div>
    <input type = "checkbox"/>I want to receive updates directly on whatsApp.
  </div>
  );
}