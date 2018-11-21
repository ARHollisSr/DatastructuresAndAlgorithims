function getIndexToIns(arr,num) {
    arr.sort((a,b)=>{return a-b;});
    let result = 0;
    for(let i=0; i <= arr.length; i++)
    {
        if(num <= arr[i])
        {
            result = i;
            break;
        }
        result = i;
    }
    return result;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

//OR

function getIndexToIns2(arr,num) {
    arr.push(num);
    arr.sort((a,b)=>{return a - b;});
    return arr.indexOf(num);
}