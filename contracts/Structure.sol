pragma solidity >=0.4.21 <8.10.0;

library Structure {
    enum State {
        Manufactured,
        PurchasedByDistributor,
        ShippedByManufacturer,
        ReceivedByDistributor,
        PurchasedByVaccinationCenter,
        ShippedByDistributor,
        ReceivedByDeliveryHub,
        ShippedByDeliveryHub,
        ReceivedByVaccinationCenter
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

    struct VaccinationCenterDetails {
        address vaccinationcenter;
        string vaccinationcenterLongitude;
        string vaccinationcenterLatitude;
    }

    struct Roles {
        bool Manufacturer;
        bool Distributor;
        bool DeliveryHub;
        bool VaccinationCenter;
    }

    struct Product {
        address owner;
        ProductDetails productdet;
        State productState;
        ManufactureDetails manufacturer;
        DistributorDetails distributor;
        DeliveryHubDetails deliveryhub;
        VaccinationCenterDetails vaccinationcenter;
    }

    struct ProductHistory {
        Product[] history;
    }
}
