import { updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
  
    // Debugging info
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
  
    // Basic validation for email format
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      // Create user
      const result = await createUser(email, password);
      const user = result.user;
  
      // Update user profile with displayName
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });
  
      console.log("User created and profile updated:", user);
  
      // Optionally redirect or perform additional actions
  
    } catch (error) {
      console.error("Error signing up:", error.code, error.message);
      alert(`Error signing up: ${error.message}`);
    }
  };
  

  return (
    <div className="flex flex-wrap max-w-[120rem] mx-auto bg-black">
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <div className="absolute bottom-56 z-10 px-8 text-white">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-semibold leading-10"
          >
            We work 10x faster than our competitors and stay consistent. While
            they are bogged down with technical debt, we are releasing new
            features.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-11 text-2xl font-semibold"
          >
            John Elmond
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl"
          >
            Founder, Emogue
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl"
          >
            Photography Agency
          </motion.p>
        </div>
        <img
          className="-z-1 absolute top-0 h-full w-full object-cover opacity-80"
          src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Background"
        />
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col lg:justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="mt-20 lg:text-2xl font-bold text-left text-white text-xl"
          >
            Create an Account, please enter your details.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 text-white ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-slate-700 text-2xl hover:text-orange-500"
          >
            <motion.img
              className="mr-2 h-5"
              src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
              alt="Google-icon"
            />
            Log in with Google
          </motion.button>
          <div className="relative mt-8 flex h-px place-items-center bg-white"></div>
          <motion.form
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6,  }}
  className="flex flex-col pt-3 md:pt-4"
  onSubmit={handleSubmit}
>
  {[
    "firstName",
    "lastName",
    "email",
    "password",
    "confirmPassword",
  ].map((field, index) => (
    <div
      key={index}
      className="relative flex h-14 w-full min-w-[200px] mt-4"
    >
      <input
        type={
          field === "password" || field === "confirmPassword"
            ? "password"
            : field === "email"
            ? "email"
            : "text"
        }
        name={field}
        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-xl font-normal text-white outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
        placeholder={field.replace(/([A-Z])/g, " $1").trim()}
        required
        autoComplete={
          field === "confirmPassword" ? "new-password" : field
        }
      />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[20px] peer-focus:leading-tight peer-focus:text-white  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
              </div>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              type="submit"
              className="w-full flex items-center justify-center rounded-md mt-4 border px-4 py-1 text-white ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-slate-700 hover:text-orange-500 text-2xl"
            >
              Sign Up
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="py-12 text-center"
          >
            <p className="whitespace-nowrap text-2xl text-white">
              Do you have an account?
              <Link
                to="/login"
                className="underline-offset-4 font-semibold text-gray-400 underline transition hover:text-orange-500"
              >
                Login.
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
