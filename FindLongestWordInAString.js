function findLongestWordLength(str) {
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