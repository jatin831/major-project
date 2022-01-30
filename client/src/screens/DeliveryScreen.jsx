import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import "../css/Distributorscreen.css";
const date=new Date();
const d=date.getFullYear();

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'left',
        flexGrow: 1,
    },
}));

 function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Vaccine Distribution System
                    </Typography>
                    <Button variant="contained" color="primary"  component={Link} to="/">
                        Delivery
                    </Button>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Buy Product
                    </Button>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Receive Product
                    </Button>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Ship   Product
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
function DeliveryTable(prob) {
    return (
      <div className="Distributor">
        <table>
          <tr>
            <th>Universal ID</th>
            <th>Product Code</th>
            <th>Manufacture</th>
            <th>Manufacture Date</th>
            <th>Product Name </th>
            <th> Owner</th>
            <th>Ship </th>

          </tr>
         {/* adding data using loop */}
          {/* {prob.data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            )
          })} */}
        </table>
      </div>
    );
  }

  //  contain array of object that need to be show on table
   const data=[{Universal_ID:"Universal ID"
    ,Product_Code:"Product_Code",
    Manufacture:"Manufacture",
    Manufacture_Date:"Date",
    Product_Name:"Product Name",
    Owner:"Owner",
    ship:true}];

function DeliveryScreen(){
    return (<div><Navbar /><DeliveryTable data={data} /><footer>Copyright @vaccine distributtion {d}</footer></div>)
}
export default DeliveryScreen;
