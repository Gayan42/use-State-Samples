import React, { useState } from "react";

function FormChallenge() {
  const [contact, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
  });

  function eventChange(event) {
    setDetails((prevValue) => {
      const { value, name } = event.target;

      console.log(value);
      console.log(name);
      if (name === "fName") {
        return {
          firstname: value,
          lastname: prevValue.lastname,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          lastname: value,
          firstname: prevValue.firstname,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          lastname: prevValue.lastname,
          firstname: prevValue.firstname,
          email: value,
        };
      } else if (name === "dob") {
        console.log(value);
        console.log(name);
        console.log(prevValue.firstname);
        console.log(prevValue.lastname);
        return {
          lastname: prevValue.lastname,
          firstname: prevValue.firstname,
          email: prevValue.email,
          date: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.firstname} {contact.lastname}
      </h1>
      <p>{contact.email}</p>
      <form>
        <label>First Name</label>
        <input name="fName" onChange={eventChange} placeholder="First Name" />
        <input name="lName" onChange={eventChange} placeholder="Last Name" />
        <input name="email" onChange={eventChange} placeholder="Email" />
        <input type="date" onChange={eventChange} name="dob"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormChallenge;
