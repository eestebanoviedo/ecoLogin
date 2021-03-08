import React from "react";

import useStyles from "./InicioStyles.js";
import theme from "./StylesGlobal.js";

import Bernie from "../Images/logo.png";

import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const FormLogin = (props) => {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"ECO Autoparts SA © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          <Avatar variant="square" src={Bernie} className={classes.large} />
          <form className={classes.form} onSubmit={props.onSubmit} noValidate>
            <ThemeProvider theme={theme}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="user"
                name="user"
                label="Usuario"
                value={props.values1}
                onChange={props.onChange1}
                error={props.error1}
                helperText={props.helperText1}
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
                value={props.value2}
                onChange={props.onChange2}
                error={props.error2}
                helperText={props.helperText2}
                autoComplete="current-password"
              />

              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  asdadassd
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
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
                <Link
                  href="/formulario"
                  variant="body2"
                  className={classes.link}
                >
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
};

export default FormLogin;
