import React from 'react';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Bernie from '../Components/personal.png';
import useStyles from './loginStyles';
import theme from './StylesGlobal';
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";




const FormLogin = (props)=>{

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


  return(
    
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
                <Avatar  variant="square" src={Bernie} className={classes.large}  />
                <form
                
                  className={classes.form}
                  onSubmit={props.onSubmit}
                  noValidate
                >
                  <ThemeProvider theme={theme}>
                    <TextField
                      className={classes.input}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="user"
                      name="user"
                      label="Usuario"
                      value={props.values}
                      onChange={props.onChange}
                      error={props.error}
                      helperText={props.helperText}
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
                      value={props.values}
                      onChange={props.onChange}
                      error={props.error}
                      helperText={props.helperText}
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
                <Box mt={28}  >
                <Copyright />
              </Box>
              </div>
            </Grid>
          </Grid>

  )

}

export default FormLogin;


