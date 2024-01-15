import { useRef, useState } from "react";



export default function Login() {

  // const email = useRef();
  // const password = useRef();
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvlaid = enteredValues.email !== '' && !enteredValues.email.includes('@');

  function handleSubmit(e) {
    e.preventDefault();

    // const enteredEmail = email.current.value;
    // const enterPassword = password.current.value;
    // console.log(enteredEmail, enterPassword);
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value,
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: value
    }))
  }


  return (

    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // ref={email}
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvlaid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // ref={password}
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}
          />

        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
