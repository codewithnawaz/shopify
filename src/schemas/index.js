import * as Yup from "yup";

 export const registerSchema = Yup.object({
    name:Yup.string().min(3).max(15).required("*Required"),
    last_name:Yup.string().min(2).max(15).required("*Required"),
    email:Yup.string().email().required("*Required"),
    password:Yup.string().min(8).max(15).required("*Required"),
 })