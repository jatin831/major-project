import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../css/Distributorscreen.css";

import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const date = new Date();
const d = date.getFullYear();

// function Ship() {
// 	return (
// 		<Button
// 			variant="contained"
// 			color="primary"
// 			component={Link}
// 			to="/delivery/ship"
// 		>
// 			Ship
// 		</Button>
// 	);
// }

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		textAlign: "left",
		flexGrow: 1,
	},
}));

export function ShipProductByDistributor(props) {
	console.log(props.data[0]);

	// var [tableData, setTableData] = React.useState([]);
	const accounts = props.accounts;
	const supplyChainContract = props.supplyChainContract;

	const handleShipButton = async (id) => {
		// console.log("calledddddddddddddddddddd");
		// console.log(supplyChainContract);
		console.log("calledddddddddddddddddddd iiiiiiiiiiiiiiiii");

		await supplyChainContract.methods
			.shipByDistributor(id)
			.send({ from: accounts[0], gas: 10000000 });

		// setCount(0);
	};

	return (
		<div className="Distributor">
			<table>
				<tr>
					<th>Product ID </th>
					<th>Product Name</th>
					<th>Price</th>
					<th>Product Category </th>
					<th>Manufacture</th>
					<th>Ship</th>
				</tr>
				{/* adding data using loop */}
				{props.data.map((s) => {
					return (
						<tr>
							<td>{s[0]}</td>
							<td>{s[1]}</td>
							<td>{s[2]}</td>
							<td>{s[3]}</td>
							<td>{s[4]}</td>
							{/* <td>
								<Ship />
							</td> */}
							<td>
								<Button
									variant="contained"
									color="secondary"
									onClick={() => handleShipButton(s[1])}
								>
									Ship
								</Button>
								{/* <Buy onClick={() => handleBuyButton(s[0])} /> */}
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import "../css/Distributorscreen.css";

// import Button from "@material-ui/core/Button";

// import { Link } from "react-router-dom";

// const date = new Date();
// const d = date.getFullYear();

// // function Ship() {
// // 	return (
// // 		<Button
// // 			variant="contained"
// // 			color="primary"
// // 			component={Link}
// // 			to="/delivery/ship"
// // 		>
// // 			Ship
// // 		</Button>
// // 	);
// // }

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		textAlign: "left",
// 		flexGrow: 1,
// 	},
// }));

// export function ShipProductByDistributor(props) {
// 	console.log(props.data[0]);

// 	// var [tableData, setTableData] = React.useState([]);
// 	const accounts = props.accounts;
// 	const supplyChainContract = props.supplyChainContract;

// 	const handleShipByDistributorButton = async (id) => {
// 		// console.log("calledddddddddddddddddddd");
// 		// console.log(supplyChainContract);
// 		console.log("yehi wala call ho raha hai");

// 		const prodState = await supplyChainContract.methods
// 			.fetchProductState(id)
// 			.call({ from: accounts[0], gas: 100000 });
// 		console.log(prodState);

// 		await supplyChainContract.methods
// 			.shipByDistributor(id)
// 			.send({ from: accounts[0], gas: 10000000 });

// 		console.log("yehi wala call ho raha hai doobaaraaa");

// 		const prodState = await supplyChainContract.methods
// 			.fetchProductState(id)
// 			.call({ from: accounts[0], gas: 100000 });
// 		console.log(prodState);

// 		// setCount(0);
// 	};

// 	return (
// 		<div className="Distributor">
// 			<table>
// 				<tr>
// 					<th>Product ID </th>
// 					<th>Product Name</th>
// 					<th>Price</th>
// 					<th>Product Category </th>
// 					<th>Manufacture</th>
// 					<th>Ship</th>
// 				</tr>
// 				{/* adding data using loop */}
// 				{props.data.map((s) => {
// 					return (
// 						<tr>
// 							<td>{s[0]}</td>
// 							<td>{s[1]}</td>
// 							<td>{s[2]}</td>
// 							<td>{s[3]}</td>
// 							<td>{s[4]}</td>
// 							{/* <td>
// 								<Ship />
// 							</td> */}
// 							<td>
// 								<Button
// 									variant="contained"
// 									color="secondary"
// 									onClick={handleShipByDistributorButton(s[1])}
// 								>
// 									Ship
// 								</Button>
// 								{/* <Buy onClick={() => handleBuyButton(s[0])} /> */}
// 							</td>
// 						</tr>
// 					);
// 				})}
// 			</table>
// 		</div>
// 	);
// }
