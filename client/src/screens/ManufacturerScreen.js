import React from "react";
import AddProductForm from "../components/AddProductForm";
import Button from "@material-ui/core/Button";
import Navbar from "../components/Navbar";
import { ProductTable } from "./ProductTable";
import { Grid } from "@material-ui/core";

export default function ManufacturerScreen(props) {
    var [isProductFormActive, setProductForm] = React.useState(true);
    var [tableData, setTableData] = React.useState([]);
    const accounts = props.accounts;
    const supplyChainContract = props.supplyChainContract;
    supplyChainContract.methods
        .fetchProduct(1)
        .call({ from: accounts[0], gas: 100000 })
        .then((response) => {
            var temp = [];
            temp.push(response);
            // setTableData(temp);
            console.log(temp);
        });
    // console.log("reached here");
    return (
        <div>
            <Navbar />
            <div className="form-container">
                {/* <Button variant="contained" color="primary" onClick={() => { setProductForm(true) }}>
            Add Product
        </Button> */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AddProductForm
                            accounts={accounts}
                            supplyChainContract={supplyChainContract}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ProductTable />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
