import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableCellStyle:{
        color:'white',
        fontFamily:'Roboto Slab',
        width:'20%',
        borderBottom: `1px solid rgb(0 0 0 / 11%)`,
    },
    tableContainer:{
        border:'2px solid',
        boxShadow: `1px 2px 14px 3px rgb(0 0 0 / 21%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 10%)`
    },
    countryImg:{
        height:'15px',
        width:'23px',
        borderRadius:'2px'
    },
    firstCellsContainers:{
        fontFamily:'Roboto Slab',
        borderBottom: `1px solid rgb(0 0 0 / 11%)`
    }
});



const TableData = ({datas}) => {
    const classes = useStyles();

    return(
        <Fragment>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead style={{backgroundColor:'black', height:'50px'}}>
                        <TableRow  >
                            <TableCell className={classes.tableCellStyle}>Country</TableCell>
                            <TableCell className={classes.tableCellStyle}>Cases</TableCell>
                            <TableCell className={classes.tableCellStyle}>Today Cases</TableCell>
                            <TableCell className={classes.tableCellStyle}>Deaths</TableCell>
                            <TableCell className={classes.tableCellStyle}>Today Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((row, index) => (
                            <TableRow key={index} >
                                <TableCell style={{fontFamily:'Roboto Slab', padding:'20px', display:'flex'}} component="th" scope="row">
                                    <img className={classes.countryImg} src={row.countryInfo.flag} alt="Country Flag"/><div style={{margin:'-2px 0 0px 6px'}}>{row.country}</div>
                                </TableCell>
                                <TableCell className={classes.firstCellsContainers}><span>{row.cases.toLocaleString()}</span></TableCell>
                                <TableCell style={row.todayCases > 0 ? {backgroundColor:'#c1ff0436', fontFamily:'Roboto Slab', borderBottom: `1px solid rgb(0 0 0 / 11%)`} : {fontFamily:'Roboto Slab', width:'13%',borderBottom: `1px solid rgb(0 0 0 / 11%)`}}>{row.todayCases > 0 ? `+${row.todayCases.toLocaleString()}` : row.todayCases.toLocaleString() }</TableCell>
                                <TableCell className={classes.firstCellsContainers}>{row.deaths.toLocaleString()}</TableCell>
                                <TableCell style={row.todayDeaths > 0 ? {borderBottom: `1px solid rgb(0 0 0 / 11%)`, backgroundColor:`rgb(255 0 0 / 38%)`, fontFamily:'Roboto Slab'} :{fontFamily:'Roboto Slab', width:'13%', borderBottom: `1px solid rgb(0 0 0 / 11%)`}}>{row.todayDeaths > 0 ? `+${row.todayDeaths.toLocaleString()}` : row.todayDeaths.toLocaleString() }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default TableData;