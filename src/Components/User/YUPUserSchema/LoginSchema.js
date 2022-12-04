import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("*Please enter the correct email format"),

  password: Yup.string().min(5).required("*Please enter your password"),
});
