import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Submit() {
  const navigate = useNavigate();
  const handleOnSubmit = () => {
    navigate('/dashboard');
  };
  return <button onClick={handleOnSubmit}>Talk To Us</button>;
}
