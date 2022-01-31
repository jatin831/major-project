import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../css/Distributorscreen.css";
const date = new Date();
const d = date.getFullYear();

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


// function Buy(){
//     return (
//         <Button variant="contained" color="primary" component={Link} to="/distributor/buy">
//         Buy
//         </Button>
//     )
// }
export function ProductTable(prop) {
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
                    {/* <th>Buy </th> */}

                </tr>
                {/* adding data using loop */}
                {/* {prop.data.map((val, key) => {
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
                })} */}
            </table>
        </div>
    );
}

