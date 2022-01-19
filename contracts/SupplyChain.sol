// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

import "./Structure.sol";

contract SupplyChain {
  mapping(address => Structure.Roles) roles;

  function addManufacturerRole(address _account) public {
        roles[_account].Manufacturer = true;
    }

  function addDistributorRole(address _account) public {
        roles[_account].Distributor = true;
    }

  function addDeliveryrRole(address _account) public {
        roles[_account].Delivery = true;
    }

  function addVaccinationCenterRole(address _account) public {
        roles[_account].VaccinationCenter = true;
    }

}
