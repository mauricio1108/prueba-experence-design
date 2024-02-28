import "./Form.scss";
import React, { useState } from 'react';
import passIcon from "../../assets/Icons/passIcon.svg";
import EYEICON from "../../assets/Icons/EYE open@svg.svg"
import checkIcon from "../../assets/Icons/checkIcon.svg";
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [user, setUser] = useState({ firstName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [formValidations, setFormValidations] = useState({ firstName: "", email: "", password: "" });
  let characters = "!#$%&/()=?*[];:_,.-+{}";
  const navigate = useNavigate();

  const validateForm = (e) => {
    console.log(user);
    e.preventDefault();
    if (user.firstName.trim() === '') {
      setFormValidations({ formValidations, firstName: 'Este campo es necesario' });
      return;
    }
    if (user.email.trim() === '') {
      setFormValidations({ formValidations, email: 'Este campo es necesario' });
      return;
    }
    if (user.password.trim() === '') {
      setFormValidations({ formValidations, password: 'Este campo es necesario' });
      return;
    }
    else if (user.password.length < 8) {
      setFormValidations({ formValidations, password: 'la contraseña debe ser mayor a 8 caracteres' });
    }
    else if (!user.password.split("").some(char => characters.split("").includes(char))) {
      setFormValidations({ formValidations, password: 'la contraseña debe contener un caracter especial' });
    } else {
      navigate("/succes")
    }
  }

  const handleFirstNameChange = (e) => {
    setUser({ ...user, firstName: e.target.value })
    setFormValidations({ ...formValidations, firstName: "" });
  }
  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value })
    setFormValidations({ ...formValidations, email: "" });
  }
  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value })
    setFormValidations({ ...formValidations, password: "" });
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div id='form-container'>
      <h1 className="title">Start Your Journey with a 7-day free trial</h1>
      <form id="form" onSubmit={validateForm}>
        <div className="each-inp">
          <label htmlFor="name">First Name*</label>
          <input
            className="login-inp"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your first name" value={user.firstName}
            onChange={handleFirstNameChange} />
          {formValidations.firstName && <p className="error-msg">{formValidations.firstName}</p>}
        </div>
        <div className="each-inp">
          <label htmlFor="email">Email*</label>
          <input
            className="login-inp"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleEmailChange}
          />
          {formValidations.email && <p className="error-msg">{formValidations.email}</p>}
        </div>
        <div className="each-inp">
          <label htmlFor="password">Password*</label>
          <div className="pass-cont">
            <input className="login-inp" name="password" id="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" onChange={handlePasswordChange} />
            <button className="passIconButton" onClick={togglePasswordVisibility}>
              <img src={showPassword ? EYEICON : passIcon} alt="Toggle Password Visibility" />
            </button>
          </div>
            {formValidations.password && <p className="error-msg">{formValidations.password}</p>}
        </div>
        <div className="valid-checks">
          <div className="each-check">
            <img className="check" src={checkIcon} alt="" />
            <p>Must be at least 8 characters</p>
          </div>
          <div className="each-check">
            <img className="check" src={checkIcon} alt="" />
            <p>Must contain one special character</p>
          </div>
        </div>
        <button className="create-button" type="submit">Create account</button>
        <p className="have-account">Already have an account? <span className="log-in">Log in</span></p>
      </form>
    </div>
  )
}

export default Form;
