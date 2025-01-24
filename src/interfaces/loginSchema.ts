import { z } from "zod";

export const loginSchema = z.object({
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

export type FormData = z.infer<typeof loginSchema>;
