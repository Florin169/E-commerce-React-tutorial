import React, { useState } from "react";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";
import { auth, signInWithGoogle } from "../firebase/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventdefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setEmail({ ...email, [name]: value });
    setPassword({ ...password, [name]: value });
  };

  return (
    <div className="w-1/2">
      <h2 className="text-4xl mb-10">I already have a account</h2>
      <span className="text-xl mb-36">
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          required
          placeholder="Email"
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          value={password}
          required
          placeholder="Password"
          handleChange={handleChange}
        />

        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogoleSignIn>
          Sign in with Google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
