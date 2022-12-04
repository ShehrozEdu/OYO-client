import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2)
    .max(25)
    .required("*Please enter your name, minimum 2 char"),
  email: Yup.string()
    .email()
    .required("*Please enter the correct email format"),
  password: Yup.string().min(6).required("*Please enter your password"),
  confirm_password: Yup.string()
    .required("*Enter Password again")
    .oneOf([Yup.ref("password"), null], "*Passwords did not match"),
});
