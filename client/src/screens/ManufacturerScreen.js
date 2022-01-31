import React from 'react';
import AddProductForm from '../components/AddProductForm';
import Button from "@material-ui/core/Button";
import Navbar from "../components/Navbar";

export default function ManufacturerScreen(props) {
    var [isProductFormActive, setProductForm] = React.useState(true);
    const accounts = props.accounts;
    const supplyChainContract = props.supplyChainContract;
    console.log(supplyChainContract.methods.fetchProduct(1).call({ from: accounts[0], gas: 100000 }));
    // console.log("reached here");
    return <div>
        <Navbar />
        <div className="homepage-container">
            {/* <Button variant="contained" color="primary" onClick={() => { setProductForm(true) }}>
            Add Product
        </Button> */}
            {isProductFormActive ? <AddProductForm accounts={accounts}
                supplyChainContract={supplyChainContract} /> : null}
            {/* <AddProductForm /> */}
        </div>
    </div>;
}
