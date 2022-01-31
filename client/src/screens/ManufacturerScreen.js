import React from 'react';
import AddProductForm from '../components/AddProductForm';
import Button from "@material-ui/core/Button";
import Navbar from "../components/Navbar";

export default function ManufacturerScreen(props) {
    var [isProductFormActive, setProductForm] = React.useState(true);
    console.log("reached here");
    return <div>
        <Navbar />
        <div className="homepage-container">
            {/* <Button variant="contained" color="primary" onClick={() => { setProductForm(true) }}>
            Add Product
        </Button> */}
            {isProductFormActive ? <AddProductForm /> : null}
            {/* <AddProductForm /> */}
        </div>
    </div>;
}
