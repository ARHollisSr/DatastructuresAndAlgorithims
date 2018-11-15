function findLongestWordLength(str) {
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