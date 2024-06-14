import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    let userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      let response = await axios.post("http://localhost:4000/user/signup", userInfo);

      if (response) {
        alert(response.data.message);

        localStorage.setItem("User",JSON.stringify(response.data.newUser))
        window.location.reload()

      

      
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed');
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required", minLength: { value: 3, message: "Username must be at least 3 characters" }, maxLength: { value: 20, message: "Username cannot exceed 20 characters" } })}
        />
        {errors.username && <span>{errors.username.message}</span>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" }, maxLength: { value: 20, message: "Password cannot exceed 20 characters" } })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
