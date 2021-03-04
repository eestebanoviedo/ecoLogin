import React from "react";
import ReactDOM from "react-dom";
// Material UI

import { TextField, Button, FormHelperText, Grid } from "@material-ui/core";

// Formik
import { useFormik, Form } from "formik";
// Yup
import * as yup from "yup";

const validationSchema = yup.object({
  user: yup.string("Enter your email").required("Enter your user"),
  password: yup.string("eNTER").required("C REQUIERE"),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      user: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Grid container container="main" spacing={0} xs={12}>
        <Grid spacing={2} xs={9} />
        <Grid spacing={2} xs={3}>
          <form onSubmit={formik.handleSubmit}>
            <h1>Formulario</h1>
            <TextField
              className="input"
              id="user"
              name="user"
              label="user"
              variant="outlined"
              type="text"
              value={formik.values.user}
              onChange={formik.handleChange}
              errors={formik.errors.user && Boolean(formik.errors.user)}
              helperText={formik.touched.user && formik.errors.user}
            />
            <br />
            <br />
            <TextField
              // className="input"
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              autoComplete="current-password"
            />
            <br />
            <br />
            <Button type="submit">Iniciar Sesion</Button>
            <br />
            <br />
            <FormHelperText id="texto">textoasdasdasdasdasds</FormHelperText>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(<Login />, document.getElementById("root"));
