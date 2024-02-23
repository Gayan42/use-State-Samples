import React, { useState } from "react";

function ComplexState() {
  //const [firstname, getFirstName] = useState("");
  //const [lastname, getLastName] = useState("");
  const [fullname, setFullName] = useState({
    firstname: "",
    lastname: "",
  });

  function eventChange(event) {
    // const feildName = event.target.name;
    // const newValue = event.target.value;
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          firstname: value,
          lastname: prevValue.lastname,
        };
      } else if (name === "lName") {
        return {
          lastname: value,
          firstname: prevValue.firstname,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullname.firstname + " " + fullname.lastname}</h1>
      <form>
        <input onChange={eventChange} name="fName" placeholder="First Name" />
        <input onChange={eventChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ComplexState;
