import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../slices/auth/authSlice";
import { signupSchema } from "../utils/validations/authSchemas";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SignUpCard = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const { signupLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      user_type: "employee",
      name: "",
      email: "",
      password: "",
      phone: "",
      employee_id: "",
      department: "",
      user_role: "",
      join_date: "",
    },
  });

  
  const formSubmit = async (data) => {
    try {
      
      // ("Validated form data:", data);
      await dispatch(signUpUser(data)).unwrap();
      navigate('/login')
    } catch (err) {
      // toast.error(err || "An unknown error occurred during signup.");
      console.error("Signup failed:", err);
    }
  };

  const selectedRole = watch("user_type");

  return (
    <div className="w-full max-w-[480px] bg-white rounded-[28px] shadow-md px-4 sm:px-6 py-5 mx-auto font-poppins">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-medium text-black">Welcome!</h2>
        <p className="text-xs text-gray-400">
          Have an Account?{" "}
          <span
            onClick={()=>navigate('/login')}
            className="text-[#EFCD78] font-semibold cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>

      <h1 className="text-xl font-semibold text-black mb-4">Sign up</h1>

      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="mb-4">
          <label className="text-xs font-medium text-black block mb-2">
            Select Role
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1 text-xs text-black">
              <input
                type="radio"
                value="admin"
                className="accent-[#444]"
                {...register("user_type")}
              />
              Admin
            </label>
            <label className="flex items-center gap-1 text-xs text-black">
              <input
                type="radio"
                value="employee"
                className="accent-[#444]"
                {...register("user_type")}
              />
              Employee
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* --- Common Fields --- */}
          <div>
            <label className="text-xs text-black block mb-1">Email</label>
            <input {...register("email")} placeholder="Email" className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs" />
            {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-xs text-black block mb-1">Password</label>
            <input {...register("password")} type="password" placeholder="Password" className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs" />
            {errors.password && <p className="text-red-500 text-[10px] mt-0.5">{errors.password.message}</p>}
          </div>

          <div>
            <label className="text-xs text-black block mb-1">Name</label>
            <input {...register("name")} placeholder="Full Name" className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs" />
            {errors.name && <p className="text-red-500 text-[10px] mt-0.5">{errors.name.message}</p>}
          </div>
           <div>
                <label className="text-xs text-black block mb-1">Contact No.</label>
                <input {...register("phone")} placeholder="Contact" className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs" />
                {errors.phone && <p className="text-red-500 text-[10px] mt-0.5">{errors.phone.message}</p>}
              </div>

        
          {selectedRole === 'employee' && (
            <>
              <div>
                <label className="text-xs text-black block mb-1">Employee ID</label>
                <input
                  {...register("employee_id")}
                  placeholder="Employee ID"
                  className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
                />
                {errors.employee_id && <p className="text-red-500 text-[10px] mt-0.5">{errors.employee_id.message}</p>}
              </div>
              
              <div>
                <label className="text-xs text-black block mb-1">Job Role</label>
                <input {...register("user_role")} placeholder="Role" className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs" />
                {errors.user_role && <p className="text-red-500 text-[10px] mt-0.5">{errors.user_role.message}</p>}
              </div>

              <div>
                <label className="text-xs text-black block mb-1">Department</label>
                <input {...register("department")} placeholder="Department" className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs" />
                {errors.department && <p className="text-red-500 text-[10px] mt-0.5">{errors.department.message}</p>}
              </div>

              <div>
                <label className="text-xs text-black block mb-1">Joined On</label>
                <input
                  type="date"
                  {...register("join_date")}
                  className="w-full border border-[#C0C0C0] px-3 py-3 rounded-md text-xs"
                />
                {errors.join_date && <p className="text-red-500 text-[10px] mt-0.5">{errors.join_date.message}</p>}
              </div>
            </>
          )}
        </div>

        <button
          type="submit"
          disabled={signupLoading}
          className="w-full bg-[#2C2C2C] text-white py-3 mt-5 rounded-md text-xs font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {signupLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUpCard;