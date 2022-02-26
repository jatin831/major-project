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
    event PurchasedByDistributor(uint256 uid);
    event ShippedByManufacturer(uint256 uid);
    event ReceivedByDistributor(uint256 uid);
    event PurchasedByVaccinationCenter(uint256 uid);
    event ShippedByDistributor(uint256 uid);
    event ReceivedByDeliveryHub(uint256 uid);
    event ShippedByDeliveryHub(uint256 uid);
    event ReceivedByVaccinationCenter(uint256 uid);

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

    function hasDeliveryHubRole(address _account) public view returns (bool) {
        return roles[_account].DeliveryHub;
    }

    function addDeliveryHubRole(address _account) public {
        require(msg.sender == owner);
        require(!hasDeliveryHubRole(_account));

        roles[_account].DeliveryHub = true;
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

    modifier verifyAddress(address add) {
        require(msg.sender == add);
        _;
    }

    modifier manufactured(uint256 _uid) {
        require(products[_uid].productState == Structure.State.Manufactured);
        _;
    }

    modifier shippedByManufacturer(uint256 _uid) {
        require(
            products[_uid].productState == Structure.State.ShippedByManufacturer
        );
        _;
    }

    modifier receivedByDistributor(uint256 _uid) {
        require(
            products[_uid].productState == Structure.State.ReceivedByDistributor
        );
        _;
    }

    modifier purchasedByVaccinationCenter(uint256 _uid) {
        require(
            products[_uid].productState == Structure.State.PurchasedByVaccinationCenter
        );
        _;
    }

    modifier shippedByDistributor(uint256 _uid) {
        require(
            products[_uid].productState == Structure.State.ShippedByDistributor
        );
        _;
    }

    modifier receivedByDeliveryHub(uint256 _uid) {
        require(
            products[_uid].productState == Structure.State.ReceivedByDeliveryHub
        );
        _;
    }

    modifier shippedByDeliveryHub(uint256 _uid) {
        require(
            products[_uid].productState == Structure.State.ShippedByDeliveryHub
        );
        _;
    }

    modifier receivedByVaccinationCenter(uint256 _uid) {
        require(
            products[_uid].productState == Structure.State.ReceivedByVaccinationCenter
        );
        _;
    }

    // STEP 1 : Manufacture a product.
    function manufactureProduct(
        // string memory manufacturerLongitude,
        // string memory manufacturerLatitude,
        string memory productName,
        uint256 productPrice,
        string memory productCategory
    ) public {
        require(hasManufacturerRole(msg.sender));
        Structure.Product memory product;
        product.owner=msg.sender;
        product.productdet.productid = uid;
        product.productdet.productName = productName;
        product.productdet.productPrice = productPrice;
        product.productdet.productCategory = productCategory;
        product.manufacturer.manufacturer = msg.sender;
        // product.manufacturer.manufacturerLongitude = manufacturerLongitude;
        // product.manufacturer.manufacturerLatitude = manufacturerLatitude;
        product.productState = Structure.State.Manufactured;

        products[uid] = product;

        productHistory[uid].history.push(product);

        emit Manufactured(uid);
        uid = uid + 1;
    }

   // STEP 2 : Purchase of manufactured product by Distributor.
    function purchaseByDistributor(uint256 _uid) public manufactured(_uid) {
        require(hasDistributorRole((msg.sender)));
        products[_uid].distributor.distributor = msg.sender;
        products[_uid].productState = Structure.State.PurchasedByDistributor;
        productHistory[_uid].history.push(products[_uid]);

        emit PurchasedByDistributor(_uid);
    }

    // STEP 3 : Shipping of purchased product to Distributor.
    function shipToDistributor(uint256 _uid)
        public
        verifyAddress(products[_uid].owner)
    {
        require(hasManufacturerRole(msg.sender));
        products[_uid].productState = Structure.State.ShippedByManufacturer;
        productHistory[_uid].history.push(products[_uid]);

        emit ShippedByManufacturer(_uid);
    }

    // STEP 4 : Receive the purchased product shipped by Manufacturer.
    function receiveByDistributor(
        uint256 _uid
        // string memory distributorLongitude,
        // string memory distributorLatitude
    )
        public
        shippedByManufacturer(_uid)
        verifyAddress(products[_uid].distributor.distributor)
    {
        require(hasDistributorRole(msg.sender));
        products[_uid].owner = msg.sender;
        // products[_uid].distributor.distributorLongitude = distributorLongitude;
        // products[_uid].distributor.distributorLatitude = distributorLatitude;
        products[_uid].productState = Structure.State.ReceivedByDistributor;
        productHistory[_uid].history.push(products[_uid]);

        emit ReceivedByDistributor(_uid);
    }

    // STEP 5 : Purchase of a product at Distributor by VaccinationCenter.
    function purchaseByVaccinationCenter(uint256 _uid)
        public
        receivedByDistributor(_uid)
    {
        require(hasVaccinationCenterRole(msg.sender));
        products[_uid].vaccinationcenter.vaccinationcenter = msg.sender;
        products[_uid].productState = Structure.State.PurchasedByVaccinationCenter;
        productHistory[_uid].history.push(products[_uid]);

        emit PurchasedByVaccinationCenter(_uid);
    }

    // STEP 6 : Shipping of product by Distributor purchased by VaccinationCenter.
    function shipByDistributor(uint256 _uid)
        public
        verifyAddress(products[_uid].owner)
        verifyAddress(products[_uid].distributor.distributor)
    {
        require(hasDistributorRole(msg.sender));
        products[_uid].productState = Structure.State.ShippedByDistributor;
        productHistory[_uid].history.push(products[_uid]);

        emit ShippedByDistributor(_uid);
    }

    // STEP 7 : Receiveing of product by delivery hub purchased by VaccinationCenter.
    function receiveByDeliveryHub(
        uint256 _uid
        // string memory deliveryHubLongitude,
        // string memory deliveryHubLatitude
    ) public shippedByDistributor(_uid) {
        require(hasDeliveryHubRole(msg.sender));
        products[_uid].owner = msg.sender;
        products[_uid].deliveryhub.deliveryHub = msg.sender;
        // products[_uid].deliveryhub.deliveryHubLongitude = deliveryHubLongitude;
        // products[_uid].deliveryhub.deliveryHubLatitude = deliveryHubLatitude;
        products[_uid].productState = Structure.State.ReceivedByDeliveryHub;
        productHistory[_uid].history.push(products[_uid]);

        emit ReceivedByDeliveryHub(_uid);
    }

    // STEP 8 : Shipping of product by delivery hub purchased by VaccinationCenter.
    function shipByDeliveryHub(uint256 _uid)
        public
        receivedByDeliveryHub(_uid)
        verifyAddress(products[_uid].owner)
    {
        require(hasDeliveryHubRole(msg.sender));
        products[_uid].productState = Structure.State.ShippedByDeliveryHub;
        productHistory[_uid].history.push(products[_uid]);

        emit ShippedByDeliveryHub(_uid);
    }

    // STEP 9 : Receive the purchased product by VaccinationCenter.
    function receiveByCustomer(
        uint256 _uid
        // string memory vaccinationcenterLongitude,
        // string memory vaccinationcenterLatitude
        )
        public
        shippedByDeliveryHub(_uid)
        verifyAddress(products[_uid].vaccinationcenter.vaccinationcenter)
    {
        require(hasVaccinationCenterRole(msg.sender));
        products[_uid].owner = msg.sender;
        // products[_uid].vaccinationcenter.vaccinationcenterLongitude = vaccinationcenterLongitude;
        // products[_uid].vaccinationcenter.vaccinationcenterLatitude = vaccinationcenterLatitude;
        products[_uid].productState = Structure.State.ReceivedByVaccinationCenter;
        productHistory[_uid].history.push(products[_uid]);

        emit ReceivedByVaccinationCenter(_uid);
    }

    function fetchProductCount() public view returns (uint256) {
        return uid;
    }

    function fetchProductState(uint256 _uid) public view returns (Structure.State) {
        return products[_uid].productState;
    }

    function fetchProduct(uint256 _uid) public view returns (uint256,
    string memory,
    uint256,
    string memory,
    address,
    string memory,
    string memory,
    address
    ) {
        Structure.Product storage product = products[_uid];
        return ( product.productdet.productid, product.productdet.productName, product.productdet.productPrice, product.productdet.productCategory, product.manufacturer.manufacturer,
<<<<<<< HEAD
        product.manufacturer.manufacturerLongitude, product.manufacturer.manufacturerLatitude,product.distributor.distributor);
=======
        product.manufacturer.manufacturerLongitude, product.manufacturer.manufacturerLatitude, product.distributor.distributor);
>>>>>>> origin/master
    }

}
