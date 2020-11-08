const hi="Welcome to the Node Calculator"

function add(a, b){
    
    return (a+b).toString();
}
function sub(a, b){
    return (a-b).toString();
}
function prod(a, b){
    return (a*b).toString();
}
function div(a, b){
    return (a/b).toString();
}
module.exports.hi=hi;

module.exports.sum=add;
module.exports.diff=sub;
module.exports.mul=prod;
module.exports.divide=div;