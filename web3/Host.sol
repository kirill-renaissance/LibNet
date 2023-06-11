pragma solidity ^0.8.9;
// SPDX-License-Identifier: UNLICENSED
import "./Book.sol";

struct BookInfo{
    address bookOwner;
    string uri;
    address tenant; 
}

contract Host{
    address payable  public  _owner;
    uint256 public counter = 0;
    mapping (uint256 => BookInfo) public books;
    mapping (address => uint256 ) bookToIndex;
    
    modifier onlyOwner(){
        require(msg.sender == _owner);
        _;
    } 
    constructor(){
        _owner = payable(msg.sender);
    }

    function CreateBook(address payable bookOwner,uint256 ownerDayliVolume,uint256 hostDayliVolume,uint256 pledge, string memory uri) external onlyOwner{
        Book _book = new Book(_owner, bookOwner,ownerDayliVolume,hostDayliVolume,pledge,uri);
        bookToIndex[address(_book)] = counter;
        books[counter] = BookInfo(bookOwner,uri,address(0x0000000000000000000000000000000000000000));
        counter++;
    } 

}
