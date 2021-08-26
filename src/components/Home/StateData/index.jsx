import React, {Fragment, useEffect, useState} from "react";
import { Grid, Container } from "@material-ui/core";
import {getAllUsStates, getOneState} from "../../../functions";
import StateCard from "./StateCard";
import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    borderRadius: "15px",
    height: "130px",
    border: "3px solid black",
  },
  paragraphStyle: {
    margin: "0 0 30px 0",
    fontSize: "9px",
    fontStyle: "italic",
  },
  inputStyle: {
    width: "99%",
    height: "30px",
    borderRadius: "6px",
    border: "2px solid black",
    backgroundColor: "black",
    outline: "none",
    color: "white",
    fontSize: "14px",
    marginBottom: "10px",
    padding: "8px",
    marginLeft: "-9px",
  },
  cardStyle: {
    backgroundColor: "white",
    borderRadius: "7px 7px 0 0",
    boxShadow:
      "  0 0.3px 3.1px rgba(0, 0, 0, 0.029),\n" +
      "  0 0.9px 8.6px rgba(0, 0, 0, 0.042),\n" +
      "  0 2.1px 20.8px rgba(0, 0, 0, 0.054),\n" +
      "  0 7px 69px rgba(0, 0, 0, 0.08)\n" +
      "",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginRight: "8px",
    height: "120px",
    padding: "10px",
    color: "black",
  },
  titleText: {
    margin: "0",
    fontSize: "34px",
    textAlign: "center",
  },
  infoNumbers: {
    margin: "0px",
    fontSize: "44px",
    textAlign: "center",
  },
  [theme.breakpoints.down("xs")]: {
    titleText: {
      margin: "0",
      fontSize: "18px",
      textAlign: "center",
    },
    infoNumbers: {
      margin: "0px",
      fontSize: "18px",
      textAlign: "center",
    },
    cardStyle: {
      marginRight: "0px",
    },
  },
}));

const StateData = () => {
  const [selectedState, setSelectedState] = useState(undefined);
  const [allUsStates, setAllUsStates] = useState([]);

  const singleState = async (event, stateName) => {
    if (stateName.length > 0) {
      const oneState = await getOneState(stateName);
      if (oneState) {
        setSelectedState(oneState);
      }
    }
  };

  const getDataUS = async () => {
    let all_datas = await getAllUsStates()
    setAllUsStates(all_datas)

  }

  useEffect(()=>{
    getDataUS();

  },[])

  const classes = useStyles();
  return (
    <div style={{ marginBottom: "55px", marginTop: "55px" }}>
      <Container>
        <h1 style={{ fontSize: "45px" }} align={"center"}>
          Search by U.S state
        </h1>
        <Grid container spacing={3}>
          <Grid
            style={{ width: "100%" }}
            item
            xm={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Autocomplete
                options={allUsStates}
                style={{
                  backgroundColor: "#ffffff",
                }}
                onInputChange={(e, newName) => { singleState(e, newName)}}
                getOptionLabel={(option) => option.state}
                renderInput={(params) => <TextField {...params} label="Search by state" id="standard-basic" label="Search by country" />}
            />
          </Grid>
          {selectedState !== undefined ? (
            <StateCard stateInfo={selectedState} />
          ) : (
            <Fragment>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <div
                  className={classes.cardStyle}
                  style={{ borderRadius:'7px', border:'1px solid #00000021' }}
                >
                  <div>
                    <h1 className={classes.titleText}>Cases</h1>
                    <h1 className={classes.infoNumbers}>
                    </h1>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <div
                  className={classes.cardStyle}
                  style={{ borderRadius:'7px', border:'1px solid #00000021' }}
                >
                  <div>
                    <h1 className={classes.titleText}>Deaths</h1>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <div
                  className={classes.cardStyle}
                  style={{ borderRadius:'7px', border:'1px solid #00000021' }}
                >
                  <div>
                    <h1 className={classes.titleText}>Tests</h1>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <div
                  className={classes.cardStyle}
                  style={{ borderRadius:'7px', border:'1px solid #00000021' }}
                >
                  <div>
                    <h1 className={classes.titleText}>Recovered</h1>
                  </div>
                </div>
              </Grid>
            </Fragment>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default StateData;
