//remove falsy values from an array
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.map((x)=> {
    if (typeof x !== "boolean")
      return x;
  }).filter(x=>x); //removes empty elements
}

console.log(bouncer([7, "ate", "", false, 9]));


//OR
function bouncer(arr) {
  return arr.filter(Boolean);
}