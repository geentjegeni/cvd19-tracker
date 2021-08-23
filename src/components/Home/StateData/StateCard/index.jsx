import React, {Fragment} from "react";
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardStyle: {
        backgroundColor:'white',
        borderRadius: '7px',
        border:'1px solid #00000021',
        boxShadow:
            '  0 0.3px 3.1px rgba(0, 0, 0, 0.029),\n' +
            '  0 0.9px 8.6px rgba(0, 0, 0, 0.042),\n' +
            '  0 2.1px 20.8px rgba(0, 0, 0, 0.054),\n' +
            '  0 7px 69px rgba(0, 0, 0, 0.08)\n' +
            '',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        marginRight:'8px',
        height:'120px',
        padding:'10px',
        color:'black'
    },
    cardHover:{
        '&:hover': {
            transform: `scale(${1.03})`,
        },
        transition: `all 0.2s ease-out`
    },
    titleText:{
        margin:'0',
        fontSize:'34px',
        textAlign:'center',
        transition:'all 0.4s linear'
    },
    infoNumbers:{
        margin:'0px',
        fontSize:'44px',
        textAlign:'center'
    },
    [theme.breakpoints.down("xs")]: {
        titleText:{
            margin:'0',
            fontSize:'18px',
            textAlign:'center'
        },
        infoNumbers:{
            margin:'0px',
            fontSize:'18px',
            textAlign:'center'
        },
        cardStyle:{
            marginRight: '0px'
        }
    },
}));

const StateCard = ({stateInfo}) => {

    const classes = useStyles();
    return (
        <Fragment>
            <Grid className={classes.cardHover} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className={classes.cardStyle}>
                  <div>
                        <h1 className={classes.titleText}>Cases</h1>
                        <h1 className={classes.infoNumbers}>{stateInfo.cases.toLocaleString()}</h1>
                   </div>
                </div>
            </Grid>
            <Grid className={classes.cardHover} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className={classes.cardStyle} >
                    <div>
                        <h1 className={classes.titleText}>Deaths</h1>
                        <h1 className={classes.infoNumbers}>{stateInfo.deaths.toLocaleString()}</h1>
                    </div>
                </div>
            </Grid>
            <Grid className={classes.cardHover} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className={classes.cardStyle}>
                    <div>
                        <h1 className={classes.titleText}>Tests</h1>
                        <h1 className={classes.infoNumbers}>{stateInfo.tests.toLocaleString()}</h1>
                    </div>
                </div>
            </Grid>
            <Grid className={classes.cardHover} item xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className={classes.cardStyle} >
                    <div>
                        <h1 className={classes.titleText}>Recovered</h1>
                        <h1 className={classes.infoNumbers}>{stateInfo.recovered.toLocaleString()}</h1>
                    </div>
                </div>
            </Grid>
        </Fragment>
    )
}
export default StateCard;