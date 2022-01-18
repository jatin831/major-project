import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../components/NavbarWithoutButton";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRole } from "../context/RoleDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// export default
function AdminPanelScreen(props) {
	const accounts = props.accounts;
	const supplyChainContract = props.supplyChainContract;

	// const { roles, setRoles } = useRole();

	const [manufacturerRole, setManufacturerRole] = React.useState("");
	const [distributorRole, setDistributorRole] = React.useState("");
	const [deliveryRole, setDeliveryRole] = React.useState("");
	const [customerRole, setCustomerRole] = React.useState("");

	// const handleAddManufacturerRole = async () => {
	// 	await setRoles({
	// 		...roles,
	// 		manufacturer: manufacturerRole,
	// 	});

	// 	localStorage.setItem("manufacturerRole", manufacturerRole);
	// 	await supplyChainContract.methods
	// 		.addManufacturerRole(manufacturerRole)
	// 		.send({ from: accounts[0], gas: 100000 })
	// 		.then(console.log);

	// 	setManufacturerRole("");
	// };

	// const handleAddDistributorRole = async () => {
	// 	await setRoles({
	// 		...roles,
	// 		distributor: distributorRole,
	// 	});

	// 	localStorage.setItem("distributorRole", distributorRole);
	// 	await supplyChainContract.methods
	// 		.addDistributorRole(distributorRole)
	// 		.send({ from: accounts[0], gas: 100000 })
	// 		.then(console.log);

	// 	setDistributorRole("");
	// };

	// const handleAddDeliveryRole = async () => {
	// 	await setRoles({
	// 		...roles,
	// 		delivery: deliveryRole,
	// 	});

	// 	localStorage.setItem("deliveryRole", deliveryRole);
	// 	await supplyChainContract.methods
	// 		.addDeliveryRole(deliveryRole)
	// 		.send({ from: accounts[0], gas: 100000 })
	// 		.then(console.log);

	// 	setDeliveryRole("");
	// };

	// const handleAddCustomerRole = async () => {
	// 	await setRoles({
	// 		...roles,
	// 		customer: customerRole,
	// 	});

	// 	localStorage.setItem("customerRole", customerRole);
	// 	await supplyChainContract.methods
	// 		.addCustomerRole(customerRole)
	// 		.send({ from: accounts[0], gas: 100000 })
	// 		.then(console.log);

	// 	setCustomerRole("");
	// };

	const [role, setRole] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		setRole(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<Navbar />
			<h3>Add New Member to the Blockchain</h3>
			<div className="homepage-container">
				<form noValidate autoComplete="off">
					<div>
						<TextField
							id="manufacturerRole"
							label="Enter Address"
							variant="outlined"
							value={manufacturerRole}
							onChange={(e) => setManufacturerRole(e.target.value)}
							style={{ width: "500px" }}
						/>
					</div>
				</form>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-controlled-open-select-label">Role</InputLabel>
					<Select
						labelId="demo-controlled-open-select-label"
						id="demo-controlled-open-select"
						open={open}
						onClose={handleClose}
						onOpen={handleOpen}
						value={role}
						label="Role"
						onChange={handleChange}
					>
						<MenuItem value={0}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>Manufacturer</MenuItem>
						<MenuItem value={2}>Distributor</MenuItem>
						<MenuItem value={3}>Delivery</MenuItem>
						<MenuItem value={4}>Vaccination Center</MenuItem>
					</Select>
				</FormControl>
				<Button
					variant="contained"
					color="primary"
					// onClick={handleAddManufacturerRole}
					style={{ width: "20%", marginLeft: "10px" }}
				>
					Add Member
				</Button>
			</div>
		</div>
	);
}
export default AdminPanelScreen;
