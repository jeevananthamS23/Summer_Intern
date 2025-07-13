"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import style from "./form.module.css";

const Form = ({ val }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // useEffect(() => {
  //   const savedData = localStorage.getItem('formData');
  //   if (savedData) {
  //     const { name, email, password } = JSON.parse(savedData);
  //     setName(name);
  //     setEmail(email);
  //     setPassword(password);
  //   }
  // }, []);

  const handleSubmit = () => {
    // e.preventDefault();
    // const formData = { name, email, password };
    // localStorage.setItem('formData', JSON.stringify(formData));
    // alert('Form data saved locally!');
    const check=name.includes("Admin");
    const admin="Admin";
    const user="user";
    if(check){
    router.push(`/adminsee?name=${admin}`);
    }
    else if(!check){
      router.push(`/usersee?name=${user}`);
    }
  };

  return (
    <div>
      <div className={style.formcontainer}>
        <h1>{val} Login</h1>
   <form className={style.form}>
  <input
    type="text"
    id="name"
    placeholder="Enter Name"
    required
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <input
    type="email"
    id="email"
    placeholder="Enter Email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    id="password"
    placeholder="Password"
    required
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button type="button" onClick={handleSubmit}>Submit</button>
</form>
</div>
    </div>
  );
};

export default Form;
