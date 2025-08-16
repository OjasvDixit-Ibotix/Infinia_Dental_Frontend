import z, { number } from 'zod';

export const loginSchema= z.object({
    email:z.string().nonempty('Email is required').refine((val)=>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
            {
             message: 'Enter a valid email',
            }),

      password: z.string({ required_error: "Password is required" })
       .min(6, "Password must be at least 6 characters"),
})


// export const signupSchema = z.object({
//    email:z.string().nonempty('Email is required').refine((val)=>
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
//             {
//              message: 'Enter a valid email',
//             }),
//      name: z.string().min(1, "Name is required"),
//     //  number: z.string().min(5, 'Contact no. is required'),
//           phone: z.string().optional(),

//      password:z.string().min(6, 'Password must be at least 6 characters'), 
//      empID:z.string().optional(),
//     user_role: z
//         .string()
//         .optional(),

//     department: z
//         .string()
//         .optional(),

//     join_date: z
//         .string()
//         .optional(),

//      user_type: z.enum(['admin', 'employee']),

// });





// export const signupSchema = z.object({
//   email: z
//     .string({ required_error: "Email is required" })
//     .nonempty("Email is required")
//     .email("Enter a valid email"),

//   name: z
//     .string({ required_error: "Name is required" })
//     .min(1, "Name is required"),

//   phone: z
//     .string({ required_error: "Phone number is required" })
//     .min(5, "Phone number must be at least 5 digits"),

//   password: z
//     .string({ required_error: "Password is required" })
//     .min(6, "Password must be at least 6 characters"),

//   employee_id: z
//     .string({ required_error: "Employee ID is required" })
//     .min(1, "Employee ID is required"),

//   user_role: z
//     .string({ required_error: "User role is required" })
//     .min(2, "Length must be between 2 and 100"),

//   department: z
//     .string({ required_error: "Department is required" })
//     .min(1, "Department is required"),

//   join_date: z
//     .string({ required_error: "Join date is required" })
//     .min(1, "Join date is required"),

//   user_type: z.enum(["admin", "employee"], {
//     required_error: "User type is required",
//   }),
// });


const baseSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .nonempty("Email is required")
    .refine((val)=>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
            {
             message: 'Enter a valid email',
        }),

  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),

    phone: z
    .string({ required_error: "Phone number is required" })
    .min(5, "Phone number must be at least 5 digits"),


});

// 2. Define the schema for when user_type is 'admin'
const adminSchema = baseSchema.extend({
  user_type: z.literal("admin"),
  // Note: No employee fields here!
});


// 3. Define the schema for when user_type is 'employee'
const employeeSchema = baseSchema.extend({
  user_type: z.literal("employee"),
  employee_id: z
    .string({ required_error: "Employee ID is required" })
    .min(1, "Employee ID is required"),

  user_role: z
    .string({ required_error: "User role is required" })
    .min(2, "Length must be between 2 and 100"),

  department: z
    .string({ required_error: "Department is required" })
    .min(1, "Department is required"),

  join_date: z
    .string({ required_error: "Join date is required" })
    .min(1, "Join date is required"),
});

export const signupSchema = z.discriminatedUnion("user_type", [
  adminSchema,
  employeeSchema,
]);

export const forgotPasswordSchema = z.object({
   email:z.string().nonempty('Email is required').refine((val)=>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
            {
             message: 'Enter a valid email',
            }),
})

