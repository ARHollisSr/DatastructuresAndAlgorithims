function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i=0; i < test.length; i++)
    {
        if(target.indexOf(text[i]) < 0)
        return false;
    }
}

//OR

function mutatio2(arr) {
  return arr[1].toLowerCase().split('').every(function(letter) {
    return arr[0].toLowerCase().indexOf(letter) != -1;
  });
}

console.log(mutation(['hello', 'hey']));