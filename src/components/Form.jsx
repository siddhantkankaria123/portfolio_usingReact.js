import { Link, NavLink, useNavigate } from "react-router-dom";
import "./form.css";
import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [inputText, setinputText] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setinputText({
      ...inputText,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(process.env.REACT_APP_BACKEND_URL, inputText);
    // console.log(res);
    navigate("/");
  };
  return (
    <>
      <div className="container form-container">
        <div class="mb-3 w-75 h-100 px-3">
          <form onSubmit={handleSubmit}>
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control "
              placeholder="John Doe"
              required
              name="name"
              value={inputText.name}
              onChange={handleChange}
            />
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control "
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
              name="email"
              value={inputText.email}
              onChange={handleChange}
            />
            <label for="exampleFormControlInput1" class="form-label">
              Subject
            </label>
            <input
              type="text"
              class="form-control "
              placeholder="Subject of Mail"
              name="subject"
              value={inputText.subject}
              onChange={handleChange}
            />
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter Message"
              required
              name="message"
              value={inputText.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className=" btn form-button  btn-primary  py-2 px-3 mt-4   "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
