// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

import "./Structure.sol";

contract SupplyChain {
    uint256 public uid;
    address owner;

    mapping(address => Structure.Roles) roles;
    mapping(uint256 => Structure.Product) products;
    mapping(uint256 => Structure.ProductHistory) productHistory;

    constructor() public {
        owner = msg.sender;
        uid = 1;
    }

    event Manufactured(uint256 uid);

    function hasManufacturerRole(address _account) public view returns (bool) {
        return roles[_account].Manufacturer;
    }

    function addManufacturerRole(address _account) public {
        require(msg.sender == owner);
        require(!hasManufacturerRole(_account));
        roles[_account].Manufacturer = true;
    }

    function hasDistributorRole(address _account) public view returns (bool) {
        return roles[_account].Distributor;
    }

    function addDistributorRole(address _account) public {
        require(msg.sender == owner);
        require(!hasDistributorRole(_account));
        roles[_account].Distributor = true;
    }

    function hasDeliveryRole(address _account) public view returns (bool) {
        return roles[_account].Delivery;
    }

    function addDeliveryRole(address _account) public {
        require(msg.sender == owner);
        require(!hasDeliveryRole(_account));

        roles[_account].Delivery = true;
    }

    function hasVaccinationCenterRole(address _account)
        public
        view
        returns (bool)
    {
        return roles[_account].VaccinationCenter;
    }

    function addVaccinationCenterRole(address _account) public {
        require(msg.sender == owner);
        require(!hasVaccinationCenterRole(_account));
        roles[_account].VaccinationCenter = true;
    }

    function manufactureProduct(
        string memory manufacturerLongitude,
        string memory manufacturerLatitude,
        string memory productName,
        uint256 productPrice,
        string memory productCategory
    ) public {
        require(hasManufacturerRole(msg.sender));
        Structure.Product memory product;
        product.productdet.productid = uid;
        product.productdet.productName = productName;
        product.productdet.productPrice = productPrice;
        product.productdet.productCategory = productCategory;
        product.manufacturer.manufacturer = msg.sender;
        product.manufacturer.manufacturerLongitude = manufacturerLongitude;
        product.manufacturer.manufacturerLatitude = manufacturerLatitude;
        product.productState = Structure.State.Manufactured;

        products[uid] = product;

        productHistory[uid].history.push(product);

        emit Manufactured(uid);
        uid = uid + 1;
    }

    function fetchProduct(uint256 _uid) public view returns (uint256,
    string memory,
    uint256,
    string memory,
    address,
    string memory,
    string memory
    ) {
        Structure.Product storage product = products[_uid];
        return ( product.productdet.productid, product.productdet.productName, product.productdet.productPrice, product.productdet.productCategory, product.manufacturer.manufacturer,
        product.manufacturer.manufacturerLongitude, product.manufacturer.manufacturerLatitude);
    }
}
