import z, { email, number } from 'zod';


export const loginSchema= z.object({
    email:z.string().nonempty('Email is required').refine((val)=>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
            {
             message: 'Enter a valid email',
            }),

    password:z.string().min(1, 'Password must be at least 6 characters'),
})


export const signupSchema = z.object({
   email:z.string().nonempty('Email is required').refine((val)=>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
            {
             message: 'Enter a valid email',
            }),
     name: z.string().min(1, "Name is required"),
     number: z.string().min(5, 'Contact no. is required'),
     password:z.string().min(6, 'Password must be at least 6 characters'), 

});

