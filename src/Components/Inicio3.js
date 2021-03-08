import React from "react";
import ReactDOM from "react-dom";

import FormLogin from "./formLogin.js";

import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  user: yup
    .string()
    .min(5, "Nombre demasiado corto")
    .max(20, "Nombre demasiado largo")
    .required("Usuario requerido"),
  password: yup
    .string("Enter your password")
    .min(8, "La contraseña debe tener un minimo de 8 caracteres")
    .required("Contraseña requerida"),
});

export default function Inicio3() {
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
    <FormLogin
      // El 1= input user
      // El 2= input password
      onSubmit={formik.handleSubmit}
      value1={formik.values.user}
      value2={formik.values.password}
      onChange1={formik.handleChange}
      onChange2={formik.handleChange}
      error1={formik.touched.user && Boolean(formik.errors.user)}
      error2={formik.touched.password && Boolean(formik.errors.password)}
      helperText1={formik.touched.user && formik.errors.user}
      helperText2={formik.touched.password && formik.errors.password}
    />
  );
}

ReactDOM.render(<Inicio3 />, document.getElementById("root"));
