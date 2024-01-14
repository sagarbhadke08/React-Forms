import { useRef } from "react";



export default function Login() {

  const email = useRef();
  const password = useRef();
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: ''
  // })

  function handleSubmit(e) {
    e.preventDefault();

    const enteredEmail = email.current.value;
    const enterPassword = password.current.value;
    console.log(enteredEmail, enterPassword);


  }

  // function handleInputChange(identifier, value){
  //   setEnteredValues(prevValues=>({
  //     ...prevValues,
  //     [identifier]:value
  //   }))
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
            ref={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
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
