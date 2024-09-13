import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { logIn } = useAuth();
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  const nevigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const mail = form.get("email");
    const pass = form.get("password");

    // Loggingin With The Function Calling
    logIn(mail, pass)
      .then(() => {
        e.target.reset();
        nevigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Please Register First");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:w-96">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Login Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative form-control ">
                <input
                  className="input input-bordered"
                  placeholder="Password"
                  type={showPass ? "text" : "password"}
                  name="password"
                  id=""
                  required
                />
                <p
                  className="absolute top-4 right-2"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="pb-6 mx-auto">
              Do not have an Account?{" "}
              <NavLink to="/register" className="font-semibold text-blue-600">
                Register
              </NavLink>
            </p>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Login;
