import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import SupplyChainContract from "./contracts/SupplyChain.json";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import AdminPanelScreen from "./screens/AdminPanelScreen";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
    // manufacturerRole: null,
    // distributorRole: null,
    // deliveryRole: null,
    // customerRole: null,
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      const networkId = "5777"; // await web3.eth.net.getId();

      const deployedNetwork = SupplyChainContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SupplyChainContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // const manufacturerRole = localStorage.getItem("manufacturerRole");
      // const distributorRole = localStorage.getItem("distributorRole");
      // const deliveryRole = localStorage.getItem("deliveryRole");
      // const customerRole = localStorage.getItem("customerRole");

      this.setState(
        {
          web3,
          accounts,
          contract: instance,
          // manufacturerRole: manufacturerRole,
          // distributorRole: distributorRole,
          // deliveryRole: deliveryRole,
          // customerRole: customerRole,
        },
        this.runExample
      );
    } catch (error) {
      alert(`Error!!! Failed to load web3, accounts, or contract.`);
      console.error(error);
    }
  };

  runExample = async () => {
    const { contract } = this.state;
    console.log(contract);
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/home" component={HomeScreen} /> */}
            {/* <Route exact path="/admin" component={AdminPanelScreen}  /> */}
            <Route exact path="/home">
              <HomeScreen
                accounts={this.state.accounts}
                supplyChainContract={this.state.contract}
              />
            </Route>
            <Route exact path="/admin">
              <AdminPanelScreen
                accounts={this.state.accounts}
                supplyChainContract={this.state.contract}
              />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
