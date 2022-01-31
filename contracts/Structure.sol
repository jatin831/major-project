pragma solidity >=0.4.21 <8.10.0;

library Structure {

    enum State {
        Manufactured
    }

    struct ManufactureDetails {
        address manufacturer;
        string manufacturerLongitude;
        string manufacturerLatitude;
    }

    struct ProductDetails {
        string productName;
        uint256 productid;
        uint256 productPrice;
        string productCategory;
    }

    struct DistributorDetails {
        address distributor;
        string distributorLongitude;
        string distributorLatitude;
    }

    struct DeliveryHubDetails {
        address deliveryHub;
        string deliveryHubLongitude;
        string deliveryHubLatitude;
    }

    struct CustomerDetails {
        address customer;
        string customerLongitude;
        string customerLatitude;
    }

    struct Roles {
        bool Manufacturer;
        bool Distributor;
        bool Delivery;
        bool VaccinationCenter;
    }

    struct Product {
        ProductDetails productdet;
        State productState;
        ManufactureDetails manufacturer;    
        DistributorDetails thirdparty;
        DeliveryHubDetails deliveryhub;
        CustomerDetails customer;
    }

    struct ProductHistory {
        Product[] history;
    }
}
