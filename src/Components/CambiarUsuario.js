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

import Bernie from "../Images/logo.png";

import { useHistory } from "react-router-dom";

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
    // marginTop: "72px",
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundImage: url(${process.env.PUBLIC_URL + "../Images/logo.png"}),
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
    // marginTop: "-50px",
  },
  link: {
    color: "gray",
  },
  large: {
    height: "239px",
    width: "239px",
    bottom: "45px",
  },
}));
const validationSchema = yup.object({
  name: yup
    .string()
    .min(5, "Nombre demasiado corto")
    .max(20, "Nombre demasiado largo")
    .required("Usuario requerido"),
});
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"ECO Autoparts SA © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function CambiarUsuario() {
  let history = useHistory();

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      history.push("/usuarioCambiado");
    },
  });
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={9} />
      <Grid
        item
        xs={12}
        sm={8}
        md={3}
        component={Paper}
        elevation={6}
        square
        // className={classes.form}
      >
        <div className={classes.paper}>
          {/* <Typography component="h1" variant="h5">
            ECO AUTOPARTS
          </Typography> */}
          <Avatar src={Bernie} className={classes.large} />
          <form
            className={classes.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <ThemeProvider theme={theme}>
              <Typography variant="body1" align="center">
                {
                  "Ingresa tu usuario y te reiniciaremos tu contraseña al valor por defecto"
                }
                {"."}
              </Typography>
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
            </ThemeProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Reiniciar Contraseña
            </Button>
            <Grid container>
              <Grid item xs align="center">
                <Link href="/" variant="body2" className={classes.link}>
                  Volver
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
ReactDOM.render(<CambiarUsuario />, document.getElementById("root"));
