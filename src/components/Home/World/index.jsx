import { withStyles } from '@material-ui/core/styles';
import React, {Component} from "react";
import {Container, Grid} from "@material-ui/core";
import {getAllContinents} from "../../../functions";
import Table from "./Table"
// import Pagination from "./Pagination";
import Pagination from '@material-ui/lab/Pagination';


const useStyles = theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  titleText: {
    fontSize: "45px",
    margin: "0px",
    padding: "25px",
    textAlign: "center",
  },
  inputStyle: {
    width: "15%",
    height: "20px",
    borderRadius: "4px",
    border: "2px solid black",
    backgroundColor: "black",
    outline: "none",
    color: "white",
    fontSize: "14px",
    marginBottom: "10px",
    padding: "8px",
    '&:focus':{
      width: '20%'
    },
    transition: 'all 0.2s linear'
  },
  paginationStyle:{
    justifyContent:'center',
    display:'flex',
    width:'100%',
    marginTop:'10px'
  },
  [theme.breakpoints.down("xs")]: {
    inputStyle: {
     width:'30%',
      '&:focus':{
        width: '45%'
      },
    },
  }
});

class World extends Component {
  constructor() {
    super();
    this.state = {
      originalContinents: [],
      currentPage: 1,
      postsPerPage:6,
    }
  }

  async componentDidMount() {
     const continents_data = await getAllContinents()
     this.setState({
       originalContinents: continents_data,
       copy_data: continents_data
     })
  }

  paginate = (number) => {
    this.setState({
      currentPage: number
    })
  }

  onSearchHandler = (e) => {
    let cpp = this.state.copy_data
    if (e.target.value.length > 0 ){
    this.setState({
      originalContinents: cpp.filter(data => data.country.toLowerCase().includes(e.target.value.toLowerCase())),
      currentPage:1
    })
    }
    else {this.setState({
      originalContinents: this.state.copy_data
    })}

  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
    const currentPosts = this.state.originalContinents.slice(indexOfFirstPost, indexOfLastPost)
    const { classes } = this.props;
    return (
      <div>
        <Container>
          <h1 className={classes.titleText}>All countries</h1>
          <input className={classes.inputStyle} placeholder="Search by country" type="text" onChange={this.onSearchHandler.bind()}/>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
             <Table datas={currentPosts}/>
              <Pagination className={classes.paginationStyle} hideNextButton={true} hidePrevButton={true} count={parseInt(this.state.originalContinents.length / this.state.postsPerPage)} page={parseInt(this.state.currentPage)} onChange={(e) => this.paginate(e.target.innerText)} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(World)