import { makeStyles } from "@material-ui/core/styles";

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
    marginTop: "200px",
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
    marginTop: "-50px",
  },
  link: {
    color: "gray",
  },
  large: {
    height: "239px",
    width: "239px",
    marginBottom: "45px",
  },
}));

export default useStyles;
