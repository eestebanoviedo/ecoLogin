
import { makeStyles} from "@material-ui/core/styles";




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
        input: {
          marginTop: "-50px",    
      
        },
        paper: {
          margin: theme.spacing(8, 1),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
      
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundImage: `url(${process.env.PUBLIC_URL + "../Images/logo.png"})`,
          backgroundSize: "cover",
          marginBottom: "0px",
          backgroundPosition: "center",
          height: "80px",
          width: "80px",
        },
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
          marginBottom: "0px",
          
          height: theme.spacing(20),
          width: theme.spacing(20),
          // marginLeft: theme.spacing(9),
          // height: "180px",
          // width: "180px",
          
        },
      }));

    //   return(
    //       <div></div>
    //   )
      


export default useStyles;