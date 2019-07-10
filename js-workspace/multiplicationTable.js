function isValid(start,end){
    return start <= end && start > 0 && end <= 1000;
    }
    
function createMulTable(start,end){
    var result = '';
    if(isValid(start,end)){
    for (var n=start;n<=end;n++) {
        for (var m=start;m<n+1;m++) {
            var b = m*n;
            if(m != n){
                result += (m + "*" + n + "=" + b +'\t');
            }else{
                result += (m + "*" + n + "=" + b);
            }
        }
        result += ("\n");
    }
    }else{
    result = null;
    }
    return result;
}
    
module.exports = {
    createMulTable,
}