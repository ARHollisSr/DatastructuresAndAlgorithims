function titleCase(str) {
    var stringToArray = str.toLowerCase().split(' ');
    var result = stringToArray.map((val)=> {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}


console.log(titleCase("I'm a little tea pot"));