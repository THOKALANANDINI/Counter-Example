import React,{useState} from 'react';

function Login() {
const [data,setData] = useState()


  return (
    <div>
      <h1>Login</h1>
      <form>
        <label> Name:</label>
        <input type="text" value="name" />
        <br />
        <label> Email: </label>
        <input type="text" value="email"  />
        <br />
        <label> Password:</label>
        <input type="text" value="pwd" />
        <br />
        <br />
        <label>Country:</label>
        <select>
          <option value="select">Select</option>
          <option value="India">India</option>
          <option value="Uk">Uk</option>
          <option value="USA">USA</option>
        </select>
        <br />
        <input type="checkbox" id="box" name="box" value="box" />
        Agreed terms and conditions
        <br />
        <input type="Submit" />
      </form>
    </div>
  );
}
export default Login;
