import React from 'react';

function Registration() {
  return (
    <div>
      <h1>Registration</h1>
      <label>Name:&nbsp;&nbsp;</label>
      <input />
      <br />
      <label>Email:</label>
      <input />
      <br />
      <label>Password:</label>
      <input />
      <br />
      <label>Confirm Password:</label>
      <input />
      <br />
      <label>DOB:</label> <input type="date" id="birthday" name="birthday" />
      <br />
      <label>Gender:</label>
      <input type="radio" value="Male" name="gender" /> Male
      <input type="radio" value="Female" name="gender" /> Female
      <br />
      <label>Address:</label>
      <textarea />
      <br />
      <label>Pinsode:</label>
      <input />
      <br />
      <label>Country:</label>
      <select>
        <option>Select</option>
        <option value="India">India</option>
        <option value="Uk">Uk</option>
        <option value="USA">USA</option>
      </select>
      <br />
      <input type="checkbox" id="box" name="box" value="box" />
      Agree terms and conditions
      <br />
      <input type="Submit" />
    </div>
  );
}
export default Registration;
