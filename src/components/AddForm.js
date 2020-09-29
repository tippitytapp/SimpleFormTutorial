import React, { useState } from "react";

function AddForm(props) {
  const { names, setNames } = props;
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNames([...names, person]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={person.name}
        onChange={handleChange}
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        name="age"
        placeholder="Age"
        value={person.age}
        onChange={handleChange}
      />
      <button> Add Person </button>
    </form>
  );
}

export default AddForm;
