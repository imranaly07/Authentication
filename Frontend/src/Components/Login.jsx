import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4000/user/login", userInfo);

      if (response && response.data) {
        alert(response.data.message);
        localStorage.setItem("User", JSON.stringify(response.data.newUser));
        window.location.reload()
        
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        
        <button type="submit">Login</button>
        
        <p>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "crimson", textDecoration: "underline" }}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
