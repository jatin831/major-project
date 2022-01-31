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
                        Distributer
                    </Button>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Purchase Product
                    </Button>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Receive Product
                    </Button>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Your  Product
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
function Buy(){
    return (
        <Button variant="contained" color="primary" component={Link} to="/distributor/buy">
        Buy
        </Button>
    )
}
function DistributionTable(prob) {
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
            <th>Buy </th>

          </tr>
         {/* adding data using loop */}
          {prob.data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Universal_ID}</td>
                <td>{val.Product_Code}</td>
                <td>{val.Manufacture}</td>
                <td>{val.Manufacture_Date}</td>
                <td>{val.Product_Name}</td>
                <td>{val.Owner}</td>
                <td><Buy /></td>

              </tr>
            )
          })}
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
    Buy:true}];

function CustomerScreen(){
    return (<div><Navbar /><h1>Purchase Product </h1><DistributionTable data={data} /><footer>Copyright @vaccine distributtion {d}</footer></div>)
}
export default CustomerScreen;
