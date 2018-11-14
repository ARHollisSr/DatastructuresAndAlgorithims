function spinalCase(str) {

    //split creates an array and allow you to use array methods. Join makes it a string again.
    //str.split('').map(isLetter(a)).join('');

    //var tempArr = str.trim().replace(/ +/g, "").split('');
    var tempArr = str.trim().split('');
    var newStr = [];
    tempArr.forEach(element => {
        if (element.toUpperCase() != element.toLowerCase()) {
            newStr.push(element.toLowerCase());
        }
        else if (element == " ") {
            newStr.push('-');
        }
        else {
            newStr.push('-');
        }
    });
    return newStr.join('').replace(/,/g,"");
    
    console.log(newStr.join('').replace(/,/g,""));
}
spinalCase("AllThe-small Things");
//spinalCase("Teletubbies say Eh-oh")
//spinalCase('The_Andy_Griffith_Show');
//spinalCase('This Is Spinal Tap');