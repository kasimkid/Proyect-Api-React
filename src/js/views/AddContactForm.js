import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')

  const [addContact, setAddContact] = useState({
    full_name: "",
    email: "",
    number: "",
    address: "",

  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(number)
    console.log(address)
  }




  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <h3 className="text-center">Add a New Contact</h3>
          <form onSubmit={handleSubmit}>
            <label for="Input1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full_name" value={name} onChange={(e) => { setName(e.target.value) }} />
            <label for="Input2" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email@" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <label for="Input3" className="form-label">Phone</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <label for="Input4" className="form-label">Address</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} />

          </form>
          <div className="d-flex justify-content-between" >
            <Link to="/" className="btn btn-danger my-2">
              Back
            </Link>
            <button className="btn btn-success my-2" onClick={handleSubmit}>Save</button>
          </div>
        </div>

      </div>

    </>
  );
};

export default AddContactForm;
