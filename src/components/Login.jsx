import { useState } from "react";



export default function Login() {

  // const [eneterdEmail, setEnterdEmail] = useState('');
  // const [eneteredPassowrd, setEnteredPassword] = useState('');

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(eneterdEmail);
    console.log(eneteredPassowrd);


  }

  function handleInputChange(identifier, event){
    setEnteredValues(prevValues=>({
      ...prevValues,
      [identifier]:event.target.value
    }))
  }

  // function handleEmailChange(event) {
  //   setEnterdEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {

  //   setEnteredPassword(event.target.value);

  // }

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
            onChange={(event)=>handleInputChange('email',event)}
            value={eneterdEmail}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={eneteredPassowrd}
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
