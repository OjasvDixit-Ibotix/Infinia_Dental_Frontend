import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/validations/authSchemas";
import { useDispatch , useSelector} from "react-redux";
import { loginUser } from "../slices/auth/authSlice";
import { toast } from "sonner";
const LoginCard = ({ onSwitch }) => {


  const {
      register,handleSubmit, formState:{errors}
  }= useForm({
    resolver:zodResolver(loginSchema)
  })
  
  const { loading, error } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
   const navigate= useNavigate();

    const formSubmit = async (data) => {
    
    try {
      await dispatch(loginUser(data)).unwrap();
      
      toast.success('Log In successfully');
      navigate('/dashboard');

    } catch (error) {
      toast.error(error.message || 'Failed to log in');
    }
  };
   
     
  return (
    <div className="w-full max-w-[500px] bg-white rounded-[28px] shadow-[0_4px_35px_rgba(0,0,0,0.08)] px-4 sm:px-8 py-7 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl font-normal text-black font-[Poppins] text-[20px] leading-normal">Welcome!</h2>
        <p className="text-xs sm:text-sm text-[#ABABAB]">
          No Account?{" "}
          <span
            onClick={onSwitch}
            className="text-[#EFCD78] font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
       <h1 className="text-2xl sm:text-[34px]   leading-tight mb-6 text-black font-[Poppins] text-[55px] font-medium ">
        Log in
      </h1>

     <form onSubmit={handleSubmit(formSubmit)}>
        <div className="mb-5">
          <label htmlFor="email" className="block text-xs sm:text-sm  mb-2 text-black font-[Poppins] text-[16px] font-normal leading-normal">
            Enter your username or email address 
          </label>
          <input
            id="email"
            type="text"
            placeholder="Username or email address"  {...register('email')}
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none text-xs sm:text-sm"
          />
          {
            errors.email &&(
              <p  className="text-red-500 text-xs mt-1"> {errors.email.message}</p>
            )
          }
        </div>
        <div className="mb-4">
          <label htmlFor="password"  className=" text-black font-[Poppins] text-[16px] font-normal leading-normal block text-xs sm:text-sm  mb-2">
            Enter your Password
          </label>
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#C0C0C0] rounded-md outline-none text-xs sm:text-sm"
          />
            {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          <div className="text-right mt-2 text-xs text-[#EFCD78] cursor-pointer">
            Forgot Password
          </div>
        </div>

        {/* <Link to='/dashboard'> */}
          <button type="submit"  className="w-full bg-[#2C2C2C] text-white py-2 sm:py-3 rounded-lg shadow hover:opacity-90 transition mt-4 text-xs sm:text-base">
            Log in
          </button>
        {/* </Link> */}
     </form>

    </div>
  );
};

export default LoginCard;
