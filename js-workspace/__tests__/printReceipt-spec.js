const printreceipt = require("../printReceipt.js");

const database = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]; 

it ('should_return_receipt_when_barcodes_is_0001_0003_0005_0003', () => {
    //given
    const barcodes = ['0001', '0003', '0005', '0003'];

    //when
    var receipt = printreceipt.createReceipt(database,barcodes);
    
    //then
    expect(receipt).toBe("Receipts\n------------------------------------------------------------\nCoca Cola\t3\t1\nPepsi-Cola\t5\t2\nDr Pepper\t7\t1\n------------------------------------------------------------\nPrice: 20");
});