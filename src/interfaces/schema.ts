import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string({
      required_error: "Full Name is required",
    })
    .min(5, { message: "Full Name be at least 3 characters long" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { message: "password must be longer than or equal to 8 characters"
   }),
});

export type FormData = z.infer<typeof signUpSchema>;
