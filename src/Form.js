
import React, { useContext } from 'react';
import { loginContext } from './context/loginContext';
export default function Form() {
  const options = ['+91', '+7', '+93'];
  const { setFirstName, setLastName, setEmail, setPhone } =
    useContext(loginContext);

  function handleOnClick(event) {
    {
      // (e) => (e.target.value);
    }
  }

  function handleOnChange(event) {
    const name = event.target.value;
    setFirstName(name);
  }

  function handleOnLastChange(event) {
    const lastN = event.target.value;
    setLastName(lastN);
  }

  function handleOnEmailChange(event) {
    const mail = event.target.value;
    setEmail(mail);
  }
  function handleOnPhoneChange(event) {
    const num = event.target.value;
    setPhone(num);
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        id="firstName"
        placeholder="FirstName*"
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="name"
        id="LastName"
        placeholder="LastName*"
        onChange={handleOnLastChange}
      />
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email*"
        required
        onChange={handleOnEmailChange}
      />
      <br />
      <select onChange={handleOnClick}>
        {options.map((option) => {
          return <option>{option}</option>;
        })}
        ;
      </select>
      <input
        type="phone"
        name="phoner"
        id="phone"
        placeholder="Phone*"
        required
        onChange={handleOnPhoneChange}
      />
      <br />
    </div>
  );
}
