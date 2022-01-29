// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

import "./Structure.sol";

contract SupplyChain {
  uint256 public uid;
  address owner;

  mapping(address => Structure.Roles) roles;


  constructor() {
        owner = msg.sender;
        uid = 1;
    }

  function hasManufacturerRole(address _account) public view returns (bool) {
        return roles[_account].Manufacturer;
    }

  function addManufacturerRole(address _account) public {
    require(msg.sender==owner);
    require(!hasManufacturerRole(_account));
        roles[_account].Manufacturer = true;
    }

  function hasDistributorRole(address _account) public view returns (bool) {
        return roles[_account].Distributor;
    }

  function addDistributorRole(address _account) public {
    require(msg.sender==owner);
    require(!hasDistributorRole(_account));
        roles[_account].Distributor = true;
    }

  function hasDeliveryRole(address _account) public view returns (bool) {
        return roles[_account].Delivery;
    }

  function addDeliveryRole(address _account) public {
    require(msg.sender==owner);
    require(!hasDeliveryRole(_account));
        roles[_account].Delivery = true;
    }

  function hasVaccinationCenterRole(address _account) public view returns (bool) {
        return roles[_account].VaccinationCenter;
    }

  function addVaccinationCenterRole(address _account) public {
    require(msg.sender==owner);
    require(!hasVaccinationCenterRole(_account));
        roles[_account].VaccinationCenter = true;
    }

}
