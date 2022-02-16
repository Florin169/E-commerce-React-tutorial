import React, { useState } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { auth, createUserProfileDocument } from "../firebase/firebase";

const SignUp = () => {
  const [displayName, setDisplayname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayname("");
      setEmail("");
      setPassword("");
      setconfirmPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);

    setDisplayname({ ...displayName, [name]: value });
    setEmail({ [name]: value });
    setPassword({ [name]: value });
    setconfirmPassword({ [name]: value });
  };

  return (
    <div className="w-1/2">
      <h2 className="text-4xl mb-10">I do not have a account</h2>
      <span className="text-xl mb-36">
        Sign up with youre email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
