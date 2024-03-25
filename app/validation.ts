import { z } from "zod";

export const patientFormValidation = z.object({
  firstName: z
    .string()
    .min(3, { message: "must be 3 or more characters long" }),
  lastName: z.string().min(3, { message: "Must be 3 or more characters long" }),
  email: z.string().email({ message: "Must be a valid email" }),
  mobile: z.string().min(10, { message: "Must be a valid number" }),
  gender: z.string(),
  age: z.string(),
  admitDate: z.date(),
});

export type PatientFormValidation = z.infer<typeof patientFormValidation>;

export const loginPageValidation = z.object({
  userId: z.string().min(5, { message: "Must be 5 or more characters long" }),
  password:z.string()
});

export type LoginPageValidation = z.infer<typeof loginPageValidation>;
