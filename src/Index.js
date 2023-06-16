import React, { useState, useContext } from 'react';
import App from './App';
import Dashboard from './Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loginContext } from './context/loginContext';

function Index() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ]);
  return (
    <loginContext.Provider
      value={{
        firstName,
        lastName,
        setFirstName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
      }}
    >
      <RouterProvider router={router} />
    </loginContext.Provider>
  );
}
export default Index;
