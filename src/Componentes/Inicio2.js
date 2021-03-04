import React from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Bernie from "../logo.png";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(5, "Nombre Corto!")
    .max(20, "Nombre Largo!")
    .required("Required"),
  password: yup
    .string("Enter your password")
    .min(8, "La contraseña debe tener un minimo de 8 caracteres")
    .required("Password is required"),
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3E984C",
    },
    secondary: {
      main: "#019966",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "../Images/background.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundImage: `url(${process.env.PUBLIC_URL + "../Images/logo.png"})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "80px",
  //   width: "80px",
  // },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #00867E 30%, #019966  90%)",
  },
  form: {
    borderRadius: "40px",
    margin: "30px",
  },
  link: {
    color: "gray",
  },
  large: {
    height: theme.spacing(13),
    width: theme.spacing(13),
    // height: "180px",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"ECO Autoparts SA © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} />
      <Grid
        item
        xs={12}
        sm={8}
        md={3}
        component={Paper}
        elevation={6}
        square
        className={classes.form}
      >
        <div className={classes.paper}>
          <Avatar src={Bernie} className={classes.large} />

          <Typography component="h1" variant="h5">
            ECO AUTOPARTS
          </Typography>

          <form
            className={classes.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <ThemeProvider theme={theme}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                name="name"
                label="Nombre"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Contraseña"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                autoComplete="current-password"
              />
            </ThemeProvider>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar Sesion
            </Button>

            <Grid container>
              <Grid item xs align="center">
                <Link href="#" variant="body2" className={classes.link}>
                  ¿Olvido su contraseña?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

ReactDOM.render(<SignInSide />, document.getElementById("root"));
