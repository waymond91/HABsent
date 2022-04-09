import React from "react";
import Select from "react-select";

export default function SignUp() {
  const SignUpStyle = {
    height: "300px",
    display: "flex"
  };

  const formStyle = {
    margin: "auto",
    padding: "10px",
    border: "1px solid #005966",
    borderRadius: "5px",
    background: "#f5f5f5",
    width: "220px",
    display: "block"
  };

  const labelStyle = {
    margin: "5px 0 5px 0",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15px"
  };

  const inputStyle = {
    margin: "5px 0 10px 0",
    padding: "5px",
    border: "1px solid #bfbfbf",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%"
  };

  const submitStyle = {
    margin: "10px 0 0 0",
    padding: "7px 10px",
    border: "1px solid #efffff",
    borderRadius: "3px",
    background: "#005966",
    width: "100%",
    fontSize: "15px",
    color: "white",
    display: "block"
  };

  const handleSubmit = () => {
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    //var data = null;

    const apiKey = "329e6f3abbe1e4290163b02111c101ab89757";
    //const apiKey = "624fd16067937c128d7c95f9";

    // Insert new user

    var url = "https://habsent-0ddb.restdb.io/rest/usertable";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("x-apikey", apiKey);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    };
    const active = 1;
    const extraData = JSON.stringify({ more: "json", value: "here" });
    var data = `{"email":"${emailRef}","username":"${usernameRef}","password":"${passwordRef}","active":${active},"data":${extraData}}`;
    console.log(data);
    xhr.send(data);
    window.location.href = "/";
  };

  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label style={labelStyle}>{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
  });

  const usernameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const Form = ({ onSubmit }) => {
    return (
      <form
        style={formStyle} //onSubmit={handleSubmit}
      >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={emailRef} label="Email:" type="email" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <label style={labelStyle}>Location:</label>
        <Select
          options={options}
          closeMenuOnSelect={false}
          //components={animatedComponents}
          isMulti
          styles={customStyles}
        />
        &nbsp;
        <div>
          <button
            style={submitStyle}
            type="submit"
            onClick={
              handleSubmit
              //(event) => (window.location.href = "/")
            }
          >
            Sign up
          </button>
        </div>
      </form>
    );
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    }
  };

  const options = [
    { value: "location 1", label: "location 1" },
    { value: "location 2", label: "location 2" },
    { value: "location 3", label: "location 3" }
  ];

  return (
    <div SignUp>
      <div className="App">
        &nbsp;
        <h1>Sign Up</h1>
        &nbsp;
      </div>
      <div style={SignUpStyle}>
        <Form //onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
