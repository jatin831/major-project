import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { useRole } from "../../context/RoleDataContext";
import { useStyles } from "./Styles";
import Grid from "@material-ui/core/Grid";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AddProductForm(props) {
	const accounts = props.accounts;
	const supplyChainContract = props.supplyChainContract;
	const classes = useStyles();
	// const { roles } = useRole();
	const [fvalid, setfvalid] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const [manuForm, setManuForm] = React.useState({
		id: 0,
		manufacturerName: "",
		manufacturerDetails: "",
		manufacturerLongitude: "",
		manufacturerLatitude: "",
		productName: "",
		productCode: 0,
		productPrice: 0,
		productCategory: "",
	});

	const handleChangeManufacturerForm = async (e) => {
		setManuForm({
			...manuForm,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmitManufacturerForm = async () => {
		setLoading(true);

		if (
			manuForm.manufacturerName !== "" &&
			manuForm.manufacturerDetails !== "" &&
			manuForm.manufacturerLongitude !== "" &&
			manuForm.manufacturerLatitude !== "" &&
			manuForm.productName !== "" &&
			manuForm.productCode !== 0 &&
			manuForm.productPrice !== 0 &&
			manuForm.productCategory !== ""
		) {
			setfvalid(false);
			await supplyChainContract.methods
				.manufactureProduct(
					// manuForm.manufacturerLongitude,
					// manuForm.manufacturerLatitude,
					manuForm.productName,
					parseInt(manuForm.productPrice),
					manuForm.productCategory
				)
				.send({ from: accounts[0], gas: 1000000 });
			setManuForm({
				id: 0,
				manufacturerName: "",
				manufacturerDetails: "",
				manufacturerLongitude: "",
				manufacturerLatitude: "",
				productName: "",
				productCode: 0,
				productPrice: 0,
				productCategory: "",
			});
		} else {
			setfvalid(true);
		}
		setLoading(false);
	};

	const [openSnack, setOpenSnack] = React.useState(false);

	const handleClick = () => {
		setOpenSnack(true);
		handleSubmitManufacturerForm();
	};

	const handleCloseSnack = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnack(false);
	};
	// -------// -------

	return (
		<div>
			<div className={classes.FormWrap}>
				<h1 className={classes.pageHeading}>Add Medicine Shipment</h1>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							required
							name="manufacturerName"
							variant="outlined"
							value={manuForm.manufacturerName}
							onChange={handleChangeManufacturerForm}
							label="Manufacturer Name"
							style={{ width: "100%" }}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							name="manufacturerDetails"
							variant="outlined"
							value={manuForm.manufacturerDetails}
							onChange={handleChangeManufacturerForm}
							label="Manufacturer Details"
							style={{ width: "100%" }}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							name="manufacturerLongitude"
							variant="outlined"
							value={manuForm.manufacturerLongitude}
							onChange={handleChangeManufacturerForm}
							label="Longitude"
							style={{ width: "100%" }}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							name="manufacturerLatitude"
							variant="outlined"
							value={manuForm.manufacturerLatitude}
							onChange={handleChangeManufacturerForm}
							label="Latitude"
							style={{ width: "100%" }}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							name="productName"
							variant="outlined"
							value={manuForm.productName}
							onChange={handleChangeManufacturerForm}
							label="Medicine Name"
							style={{ width: "100%" }}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							name="productCode"
							variant="outlined"
							value={manuForm.productCode}
							onChange={handleChangeManufacturerForm}
							label="Medicine Code"
							style={{ width: "100%" }}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							required
							name="productPrice"
							variant="outlined"
							value={manuForm.productPrice}
							onChange={handleChangeManufacturerForm}
							label="Medicine Price"
							style={{ width: "100%" }}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							name="productCategory"
							variant="outlined"
							value={manuForm.productCategory}
							onChange={handleChangeManufacturerForm}
							label="Medicine Category"
							style={{ width: "100%" }}
						/>
					</Grid>
				</Grid>
				<br />
				<p>
					<b style={{ color: "red" }}>
						{fvalid ? "Please enter all data" : ""}
					</b>
				</p>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					onClick={handleClick}
				>
					SUBMIT
				</Button>

				<Snackbar
					open={openSnack}
					autoHideDuration={6000}
					onClose={handleCloseSnack}
				>
					<Alert
						onClose={handleCloseSnack}
						severity="success"
						sx={{ width: "100%" }}
					>
						Medicine Added Successfully!
					</Alert>
				</Snackbar>
			</div>
		</div>
	);
}
