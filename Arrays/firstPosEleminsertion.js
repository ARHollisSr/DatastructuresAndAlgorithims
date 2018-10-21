Array.prototype.injectFirstPosition = function(element)
{
    for (let i = this.length; i >= 0; i--)
    {
        this[i] = this[i-1];
    }
    this[0] = element;
}

let someValues = [2,4,6,8,10,12];
//someValues.injectFirstPosition(0);
//console.log(someValues);

//alternatively 
someValues.unshift(0);
console.log(someValues);