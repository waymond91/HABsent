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

  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label style={labelStyle}>{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
  });

  const Form = ({ onSubmit }) => {
    const usernameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      };
      onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit}>
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
            onClick={(event) => (window.location.href = "/")}
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
      const color = state.isDisabled ? "red" : "#005966";

      return { ...provided, opacity, transition };
    }
  };

  const options = [
    { value: "mahe", label: "Mahé" },
    { value: "praslin", label: "Praslin" },
    { value: "la digue", label: "La Digue" }
  ];

  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };

  return (
    <div SignIn>
      <div className="App">
        &nbsp;
        <h1>Sign Up</h1>
        &nbsp;
      </div>
      <div style={SignUpStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
