import React from 'react'
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div style={{height:'100vh', justifyContent:'center', alignItems:'center', display:'flex',backgroundColor:'#000000d1', color:'white'}}>
            <div>
                <AnnouncementIcon/>
                <h1 style={{margin:'0px', fontSize:'54px', marginBottom:'15px'}}>Ups, wrong path buddy :(</h1>
                <Link to={'.'}>
                    <Button variant="outlined" style={{color:'white', border:'2px solid white'}}>
                        Go back
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;