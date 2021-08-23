import React from "react";
import {useEffect, useState} from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import { Line } from 'react-chartjs-2'
import {getData, getWorldData} from "../../../../functions";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    cardContainer: {
        border: '3px solid black', borderRadius:'8px', padding:'10px'
    }
})



function MainCards () {
    const classes = useStyles()
    const [worldDataNumbers, setWorldDataNumbers] = useState([])
    const [worldDataDates, setWorldDataDates] = useState([])
    const [horizontalData, setHorizontalData] = useState([])
    const [worldData, setWorldData] = useState({cases:"", deaths:"", active:""})

    const getAll = async () => {
        const data =  await getData()
        const keys = Object.keys(data.cases)
        const values = Object.values(data.cases)
        setWorldDataNumbers(values)
        setWorldDataDates(keys)
    }


    const getWorld = async () => {
        const worldDatas = await getWorldData()
        setWorldData(worldDatas)
    }

    useEffect(() => {
        getAll();
        getWorld();
    },[])

    useEffect(()=> {
        let dates = []
        for (let i = 0; i < worldDataDates.length; i++){
            dates.push(new Date(worldDataDates[i]).getDay())
        }
        let daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        setHorizontalData(    {data:{labels: [daysArr[dates[0]],daysArr[dates[1]],daysArr[dates[2]],
                    daysArr[dates[3]],daysArr[dates[4]],daysArr[dates[5]],daysArr[dates[6]]],
                datasets: [
                    {
                        label: '# of Infected People',
                        data: [worldDataNumbers[0],worldDataNumbers[1],worldDataNumbers[2],
                            worldDataNumbers[3],worldDataNumbers[4], worldDataNumbers[5], worldDataNumbers[6]],
                        fill: false,
                        backgroundColor: 'rgb(50,39,42)',
                        borderColor: 'rgba(0,0,0,0.37)',
                    },
                ]
            }})
    },[worldDataDates, worldDataNumbers])


    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid style={{marginTop:'25px'}}item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={classes.cardContainer}>
                            <h1 align={'center'} style={{margin:'5px 0 20px 0px'}}>World cases in the last seven days</h1>
                            <Line data={horizontalData.data}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div className={classes.cardContainer}>
                            <h1 align={'center'}>CASES</h1>
                            <h1 align={'center'}>{(worldData.cases).toLocaleString()}</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div className={classes.cardContainer}>
                            <h1 align={'center'}>DEATHS</h1>
                            <h1 align={'center'}>{(worldData.deaths).toLocaleString()}</h1>
                        </div>
                    </Grid>
                    <Grid  item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className={classes.cardContainer}>
                            <h1 align={'center'}>ACTIVE</h1>
                            <h1 align={'center'}>{(worldData.active).toLocaleString()}</h1>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


export default MainCards;