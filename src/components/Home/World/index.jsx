import { withStyles } from '@material-ui/core/styles';
import React, {Component} from "react";
import {Container, Grid} from "@material-ui/core";
import {getAllCountries} from "../../../functions";
import Table from "./Table"
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
      selected:'',
      casesFilterUp:false,
      casesFilterDown:false,
      deathsFilterUp:false,
      deathsFilterDown:false
    }
    this.onChangeFilter = this.onChangeFilter.bind(this)
  }



  _handleKeyDown = (event) => {
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;
    const max_length = parseInt(this.state.originalContinents.length / this.state.postsPerPage)
    switch( event.keyCode ) {
      case LEFT_ARROW:
        if (this.state.currentPage !== 1){
        this.setState({
          currentPage: this.state.currentPage - 1
        })
        }
        break;
      case RIGHT_ARROW:
        if (this.state.currentPage < max_length) {
          this.setState({
           currentPage: this.state.currentPage + 1
          })
        }
        break;
      default:
        break;
    }
  }


  async componentDidMount() {
     const continents_data = await getAllCountries()
     this.setState({
       originalContinents: continents_data,
       copy_data: continents_data
     })

    // document.addEventListener("keydown", this._handleKeyDown);
  }

  // componentWillUnmount() {
  //   document.removeEventListener("keydown", this._handleKeyDown);
  // }

  paginate = (number) => {
    this.setState({
      currentPage: number
    })
  }

  onSearchHandler = (e) => {
    let cpp = this.state.copy_data
    if (e.target.value.length > 0  && this.state.casesFilterUp === true){
      this.setState({
        originalContinents: cpp.sort((a, b) => b.cases - a.cases).filter(data => data.country.toLowerCase().includes(e.target.value.toLowerCase())),
        currentPage:1
      })
    } else if (e.target.value.length > 0  && this.state.casesFilterDown === true){
      this.setState({
        originalContinents: cpp.sort((a, b) => a.cases - b.cases).filter(data => data.country.toLowerCase().includes(e.target.value.toLowerCase())),
        currentPage:1
      })
    }
    else if (e.target.value.length > 0 ){
    this.setState({
      originalContinents: cpp.filter(data => data.country.toLowerCase().includes(e.target.value.toLowerCase())),
      currentPage:1
    })
    }
    else {this.setState({
      originalContinents: this.state.copy_data,
    })}

  }

  onChangeFilter = (filter) => {
    if (filter === "UPCASES") {
      const mostCases = this.state.originalContinents.sort((a, b) => b.cases - a.cases)
      this.setState({
        originalContinents: mostCases,
        selected:'UPCASES',
        casesFilterUp:true,
        casesFilterDown:false
      })
    }
    if (filter === "DOWNCASES") {
      const leastCases = this.state.originalContinents.sort((a, b) => a.cases - b.cases)
      this.setState({
        originalContinents: leastCases,
        casesFilterDown: true,
        casesFilterUp:false,
        selected:'DOWNCASES'
      })
    }
      if (filter === "UPDEATHS") {
        const mostDeaths = this.state.originalContinents.sort((a, b) => b.deaths - a.deaths)
        this.setState({
          originalContinents: mostDeaths,
          casesFilterDown: false,
          casesFilterUp:false,
          deathsFilterUp:true,
          selected:'UPDEATHS'
        })
      }
        if (filter === "DOWNDEATHS") {
          const leastDeaths = this.state.originalContinents.sort((a, b) => a.deaths - b.deaths)
          this.setState({
            originalContinents: leastDeaths,
            casesFilterDown: false,
            casesFilterUp:false,
            deathsFilterUp:false,
            deathsFilterDown:true,
            selected:'DOWNDEATHS'
          })
    }
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
             <Table casesFilterUp={this.state.casesFilterUp} selected={this.state.selected} filterData={this.onChangeFilter} datas={currentPosts}/>
              {/*<p style={{fontSize:'10px', textAlign:'center'}}>*Use left/right arrow keys to navigate through table</p>*/}
              <Pagination className={classes.paginationStyle} hideNextButton={true} hidePrevButton={true} count={parseInt(this.state.originalContinents.length / this.state.postsPerPage)} page={parseInt(this.state.currentPage)} onChange={(e) => this.paginate(e.target.innerText)} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(World)