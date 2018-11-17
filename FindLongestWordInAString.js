function findLongestWordLength(str) {
<<<<<<< HEAD
    let count = 0;
    let currentCount = 0;
    let previousCount = 0;

    for (let i=0; i < str.length; i++)
    {
        if(str[i] != "")
        {
            currentCount++;
        }
        else{
            if(previousCount < currentCount)
            previousCount = currentCount;
            currentCount = 0;
        }
    }
    return str.split('');
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
=======
    var words = str.split(' ');
    var maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength)
            maxLength = words[i].length;
    }
    return maxLength;
}

function findLongestWordLength2(str) {
    return str.split(' ').reduce(function (x, y) { return Math.max(x, y.length) }, 0);
}
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
console.log(findLongestWordLength2("What if we try a super-long word such as otorhinolaryngology"));
>>>>>>> 8cc1338f70aa5f4c16bbd3a54ed671dbc310e18c
