import React, { useContext } from 'react';
import { loginContext } from './context/loginContext';

export default function Dashboard() {
  const { firstName, lastName, email, phone } = useContext(loginContext);
  console.log('hello', firstName);
  return (
    <>
      <h1>welcome to your dashboard</h1>
      <p>
        Name:{firstName} {lastName}
      </p>
      <p>Email:{email}</p>
      <p>Phone:{phone} </p>
    </>
  );
}
