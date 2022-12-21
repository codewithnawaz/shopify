import React from 'react'
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';


const submit = document.getElementById("submit");
const input = document.getElementById("name",);

// input.addEventListener("keyup",(e)=>{
//     const value = e.currentTarget.value;
//     if(value===""){
//         submit.disabled = true;
//     }else{
//         submit.disabled = false;
//     }
// })


const initialValues = {
    name: "",
    last_name: "",
    email: "",
    password: ""
}

function Register() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registerSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
        }
    })
    console.log(errors);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="heading fs-1 fw-bolder mt-5 mb-3 d-flex justify-content-center">
                    Register
                </div>
                <div className="InputContainer mb-2 d-flex justify-content-center">
                    <input type="text"
                        placeholder='name'
                        name='name'
                        id='name'
                        className='input'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="err d-flex justify-content-center px-5 "style={{color:"red"}}>
                    {errors.name && touched.name ? (
                        <p className='form-error'>{errors.name}</p>
                    ) : null}
                </div>
                <div className="InputContainer mb-2  d-flex justify-content-center">
                    <input type="text"
                        placeholder='last name'
                        name='last_name'
                        id='last_name'
                        className='input'
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="err d-flex justify-content-center"style={{color:"red"}}>
                    {errors.last_name && touched.last_name ? (
                        <p className='form-error'>{errors.last_name}</p>
                    ) : null}
                </div>
                <div className="InputContainer mb-2  d-flex justify-content-center">
                    <input type="email"
                        placeholder='email'
                        name='email'
                        id='email'
                        className='input'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="err d-flex justify-content-center"style={{color:"red"}}>
                    {errors.email && touched.email ? (
                        <p className='form-error'>{errors.email}</p>
                    ) : null}
                </div>
                <div className="InputContainer mb-2  d-flex justify-content-center">
                    <input type="password"
                        placeholder='password'
                        name='password'
                        id='password'
                        className='input'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="err d-flex justify-content-center" style={{color:"red"}}>
                    {errors.password && touched.password ? (
                        <p className='form-error'>{errors.password}</p>
                    ) : null}
                </div>
                <div className="button mt-4 mb-3 d-flex justify-content-center ">
                    <button className="btn btn-outline-dark" type='submit' id="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
