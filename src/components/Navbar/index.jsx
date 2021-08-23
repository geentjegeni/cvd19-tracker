import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { withRouter } from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

const useStyles = makeStyles(theme => ({
  navHolder: {
    zIndex: "1",
    position: "fixed",
    left: "0px",
    top: "0",
    height: "100vh",
    backgroundColor: `rgba(0, 0, 0, 0.7)`,
    transition: "all .5s ease",
    backdropFilter: `blur(8px)`,
  },
  iconsHolder: {
    margin: "10px",
    transition: "all .6s ease",
  },
  navTextHolders: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "80%",
    alignItems: "center",
  },
  navText: {
    color: "white",
    transition: "all .2s ease",
    fontSize: "30px",
    padding: "10px",
    borderRadius: "10px",
    margin:'40px',
    textAlign:'center',
    "&:hover": {
      backgroundColor: "#00000094",
      cursor: "pointer",
      transform: `translate(0,-0.3em)`
    },
  },
  mainNavText: {
    color: "white",
    transition: "all .2s ease",
    fontSize: "30px",
    padding: "10px",
    borderRadius: "10px",
    margin: '40px',
    textAlign: 'center',
  },
  [theme.breakpoints.down("xs")]: {
    mainNavText: {
      color: "white",
      transition: "all .2s ease",
      fontSize: "20px",
      padding: "10px",
      borderRadius: "10px",
      margin: '10px',
      textAlign: 'center',
    },
    navText: {
      color: "white",
      transition: "all .2s ease",
      fontSize: "20px",
      padding: "10px",
      borderRadius: "10px",
      margin: '10px',
      textAlign: 'center',
    }
  }
}));

function Navbar() {
  const classes = useStyles();
  const [widthSet, setWidthSet] = useState(true);

  const redirectHandler = async (url) => {
    await setWidthSet(true)
    window.location.assign(url)
  }

  return (
      <div
          className={classes.navHolder}
          style={{
            width: widthSet ? "0%" : "100%",
            opacity: widthSet ? "0.8" : "1",
          }}
      >
        <div
            className={classes.iconsHolder}
            style={{
              color: widthSet ? "black" : "white",
              opacity: widthSet ? "0.8" : "1",
            }}
            onClick={() => setWidthSet(!widthSet)}
        >
        <span>
          {widthSet ? (
              <MenuIcon
                  style={{ height: "45px", width: "45px", cursor: "pointer" }}
              />
          ) : (
              <MenuOpenIcon
                  style={{ height: "45px", width: "45px", cursor: "pointer" }}
              />
          )}
        </span>
        </div>
        <div className={classes.navTextHolders}>
          <h1
              className={classes.mainNavText}
          >
            Contact me
          </h1>
          <div style={ widthSet ? {display:'none'} : {display: 'block'}}>
            <h1
                onClick={() => redirectHandler(`https://www.linkedin.com/in/gent-jegeni-410977146/`)}
                className={classes.navText}
                style={{
                  opacity: widthSet ? "0" : "1",
                }}
            >
              linkedin
            </h1>
            <h1
                onClick={() => redirectHandler(`https://github.com/geentjegeni`)}
                className={classes.navText}
                style={{
                  opacity: widthSet ? "0" : "1",
                }}
            >
              github
            </h1>
          </div>
        </div>
      </div>
  );
}
export default withRouter(Navbar);