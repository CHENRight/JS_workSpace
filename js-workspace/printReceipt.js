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

function isBarcodesExist(database,barcodes){
    let flag = false;
    for(let i = 0;i < barcodes.length;i++){
        for(let j = 0;j < barcodes.length;j++){
            if(barcodes[i] == database[j]){
                flag = true;
            }
        }
    }
    return flag;
}

function getReceiptData(barcodes){
    let TempReceipt = new Array();
    const menu = database.map(function(data){return data['id'];});

    barcodes.forEach(curBarcode => {
        menu.forEach(curData => {
            if(curBarcode == curData['id']){
                let index = TempReceipt.indexOf(curData['name']);
                if(index > -1){
                    TempReceipt[index]['num']++;
                    TempReceipt[index]['total'] += curData['price']; 
                }else{
                    TempReceipt.push({'name':curData['name'],'price': curData['price'],'num':1});
                }
            }
        })
    });
    return TempReceipt;
}

function createReceipt(database,barcodes){
    var receipt = 'Receipts\n------------------------------------------------------------\n';
    if(isBarcodesExist(database,barcodes)){
        var finalprice = 0;
        let TempReceipt = getReceiptData(barcodes);

        for(let i = 0;i < TempReceipt.length;i++){
            receipt += (TempReceipt[i]['name'] + '\t' + TempReceipt[i]['price'] + '\t' + TempReceipt[i]['num'] + '\n');
            finalprice += (parseInt(TempReceipt[i]['price']) * parseInt(TempReceipt[i]['num']));
        }

        receipt += ("------------------------------------------------------------\nPrice: " + finalprice);
    }
    else{
        receipt += ("Error:all barcodes is not exist\n------------------------------------------------------------\n");
    }
    
    return receipt;
}
    
module.exports = {
    createReceipt,
}