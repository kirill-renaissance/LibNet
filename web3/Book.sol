// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

struct Renta{
    uint startTime;
    uint finishTime;
 
    uint256 ownerVolume;
    uint256 ownerWithdrawVolume;
 
    uint256 hostVolume;
    uint256 hostWithdrawVolume;

    uint256 pledge;
 
    address host;
    address owner;
    address tenant;
}

struct RentaConfig{
    uint256 ownerDayliPayment;
    uint256 hostDayliPayment;
    uint256 pledge;
}


contract Book {
    event BookIsLost(
        address tenant,
        uint256 pledge,
        uint256 delay
    );

    event StartRenta(
        uint startTime,
        uint finishTime,
        uint256 ownerVolume,
        uint256 ownerWithdrawVolume,
        uint256 hostVolume,
        uint256 hostWithdrawVolume,
        uint256 pledge,
        address host,
        address owner,
        address tenant
    );

    address payable public _bookOwner;
    address payable public _host;
    bool public rented; 
    string public _uri;
    RentaConfig public rentaConfig;
    Renta public renta;

    modifier isNotRented(){
        require(!rented);
        _;
    } 
    modifier isRented(){
        require(rented);
        _;
    } 


    modifier onlyOwner(){
        require(msg.sender == _bookOwner);
        _;
    } 

    modifier onlyHost(){
        require(msg.sender == _host);
        _;
    }

    event Withdrawal(uint amount, uint when);

    constructor(address payable hostAdmin, address payable bookOwner,uint256 ownerDayliVolume,uint256 hostDayliVolume,uint256 pledge, string memory uri) payable {
        _host = hostAdmin;
        _bookOwner = bookOwner;
        rentaConfig = RentaConfig(ownerDayliVolume,hostDayliVolume,pledge);
        _uri = uri;
    }

    function changeRentaConfig(uint256 ownerMonthVolume,uint256 hostMonthVolume,uint256 pledge) external onlyHost isNotRented{
        rentaConfig = RentaConfig(ownerMonthVolume,hostMonthVolume,pledge);
    }


    function rentBook(uint rentExpiration) external payable isNotRented{
        require (msg.value == rentExpiration*(rentaConfig.ownerDayliPayment+rentaConfig.hostDayliPayment)+rentaConfig.pledge); 
        uint startTime = block.timestamp;
        rented = true;
        renta = Renta({
            startTime: startTime,
            finishTime: 60 * 60 * 24 * rentExpiration,
            ownerVolume: rentaConfig.ownerDayliPayment*rentExpiration,
            ownerWithdrawVolume: 0,
            hostVolume:rentaConfig.hostDayliPayment*rentExpiration,
            hostWithdrawVolume:0,
            pledge: rentaConfig.pledge,
            host: _host,
            owner: _bookOwner,
            tenant: msg.sender
        });
        emit StartRenta(
            startTime,
            60 * 60 * 24 * rentExpiration,
            rentaConfig.ownerDayliPayment*rentExpiration,
            0,
            rentaConfig.hostDayliPayment*rentExpiration,
            0,
             rentaConfig.pledge,
             _host,
             _bookOwner,
             msg.sender
        );

        require(renta.ownerVolume+renta.hostVolume+renta.pledge == msg.value);
    }

    function withdraw() external payable isRented onlyOwner{
        renta.ownerWithdrawVolume+=renta.ownerVolume;
        payable(_bookOwner).transfer(renta.ownerVolume);
        renta.ownerVolume = 0;
        renta.hostWithdrawVolume+=renta.hostVolume;
        payable(_host).transfer(renta.hostVolume);
        renta.hostVolume = 0;
    }

    function lostBook() external payable isRented{
        require(block.timestamp > renta.finishTime);
        payable(_bookOwner).transfer(renta.pledge);
        emit BookIsLost(renta.tenant, renta.pledge, block.timestamp - renta.finishTime);
    }
}
