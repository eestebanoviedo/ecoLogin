import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";


import FormLogin from "./app";

const validationSchema = yup.object({
  user: yup
    .string("Escribe un nombre de usuario")
    .required("Completa este campo."),
  password: yup
    .string("Ingresa tu contraseña")
    .min(8, "")
    .required("Completa este campo. "),
});

const SignInSide= ()=> {
  
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <div>
          <FormLogin
           onSubmit={formik.handleSubmit}
           values={formik.values.user,formik.values.password}
           onChange={formik.handleChange.name} 
           error={formik.touched.password && Boolean(formik.errors.password) } 
           helperText={formik.touched.password && formik.errors.password} />
      </div>
  );
}

export default SignInSide;

