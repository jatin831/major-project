// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

import "./Structure.sol";

contract SupplyChain {
  mapping(address => Structure.Roles) roles;

  function addManufacturerRole(address _account) public {
        roles[_account].Manufacturer = true;
    }

  function DistributorRole(address _account) public {
        roles[_account].Distributor = true;
    }

  function addDeliveryrRole(address _account) public {
        roles[_account].Delivery = true;
    }

  function addVaccination_CenterRole(address _account) public {
        roles[_account].Vaccination_Center = true;
    }

}
